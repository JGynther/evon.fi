import { supabase, createLog, bucket } from "@lib/supabase";
import { useState, useEffect } from "react";
import Button from "@components/button";
import toast from "react-hot-toast";
import Link from "next/link";

const CACHECONTROL = 31536000; // 1 year

function RecentObjectList({ refresh }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    supabase.storage
      .from("public")
      .list("", { limit: 10, sortBy: { column: "updated_at", order: "desc" } })
      .then((res) => setData(res.data));
  }, [refresh]);

  return (
    <div className="mt-14 max-w-prose border-2 border-neutral-800 rounded divide-y-2 divide-neutral-800">
      <div className="flex divide-x-2 divide-neutral-800 bg-neutral-800">
        <div className="w-1/4 px-2">Date created</div>
        <div className="w-1/4 px-2">Name</div>
        <div className="w-1/4 px-2">Type</div>
        <div className="w-1/4"></div>
      </div>
      {data?.map((object) => (
        <div
          key={object.name}
          className="flex divide-x-2 divide-neutral-800 text-white text-opacity-80"
        >
          <div className="w-1/4 px-2 py-1">
            {new Date(object.updated_at).toLocaleDateString()}
          </div>
          <div className="w-1/4 px-2 py-1">{object.name}</div>
          <div className="w-1/4 px-2 py-1">{object.metadata.mimetype}</div>
          <Link href={`${bucket}/${object.name}`}>
            <a
              target="_blank"
              className="w-1/4 px-2 py-1 underline text-white text-opacity-60"
            >
              Preview
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function BucketTool() {
  const [loading, setLoading] = useState(false);
  const [filename, setFilename] = useState();
  const href = `${bucket}/${filename ? filename : ""}`;
  const [refresh, doRefresh] = useState(false);

  return (
    <div className="bg-neutral-900 text-white h-screen overflow-auto p-5 md:p-10">
      <div className="mb-10">
        <h1 className="text-2xl mb-8">BucketTool</h1>
        <p className="mb-4 max-w-prose text-white text-opacity-80">
          BucketTool is a Evon internal tool to upload objects (read as images,
          media, etc.) to our public storage from where it can be freely shared
          with the outside world.
        </p>
        <p className="mb-4 max-w-prose text-white text-opacity-80">
          Some strict defaults are enforced on all uploaded images. Maximum file
          size is 50 MB (unchangeable, vendor enforced limit) and CDN
          cache-control header is set at 1 year. Please note, all content
          uploaded via BucketTool is PUBLIC for ANYONE to view. Only upload
          marketing or otherwise public assets.
        </p>
        <p className="mb-4 max-w-prose text-white text-opacity-60 text-sm">
          Using the tool requires a valid portal login plus
          &quot;admin.view&quot; and &quot;bucket.upload&quot; permission
          privileges.
        </p>
      </div>

      <div className="border-2 border-dashed rounded border-neutral-700 px-5 md:px-10 py-6 max-w-screen-lg">
        <form
          className="flex flex-col md:flex-row space-y-5 md:space-x-14 md:items-center"
          onSubmit={async (event) => {
            event.preventDefault();
            setLoading(true);

            const { data, error } = await supabase.storage
              .from("public")
              .upload(event.target.name.value, event.target.file.files[0], {
                cacheControl: CACHECONTROL,
                upsert: false,
              });

            console.log(data, error);
            if (error) {
              toast.error(error.message);
            } else {
              toast.success(`Uploaded ${data.Key}`);
              event.target.reset();
              doRefresh(!refresh);
            }

            setLoading(false);
          }}
        >
          <div className="flex flex-col md:w-1/3 space-y-3 -mr-10">
            <label>1. Select file</label>
            <input name="file" type="file" required />
          </div>
          <div className="flex flex-col md:w-1/3 space-y-3">
            <label>2. Enter file name</label>
            <input
              name="name"
              type="text"
              className="bg-neutral-900 rounded px-2 py-1 border border-neutral-700 hover:border-neutral-500 tranform hover:-translate-y-1 focus:-translate-y-1 outline-none focus:ring-1 focus:border-indigo-700 transition"
              required
              onChange={(event) => setFilename(event.target.value)}
            />
          </div>
          <div className="flex flex-col md:w-1/3 space-y-3">
            <label>3. Upload...</label>
            <Button type="submit" loading={loading}>
              Upload object
            </Button>
          </div>
        </form>
      </div>

      <div className="mt-10 text-opacity-80 text-white">
        <code className="bg-neutral-800 py-1 px-2 rounded text-sm">
          {bucket}/{filename ? filename : "<filename>"}
        </code>
        <button
          className="bg-neutral-700 hover:bg-neutral-600 transition rounded py-1 px-2 mx-5 text-xs"
          onClick={() => navigator.clipboard.writeText(href)}
        >
          Copy link to clipboard
        </button>
      </div>
      <RecentObjectList refresh={refresh} />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { data } = await supabase.rpc("authorize", {
    permission: "admin.view",
    id: user.id,
  });

  if (data !== true) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  await createLog({
    service: "admin/buckettool",
    message: "admin user login",
    json: {
      user: user.email,
      id: user.id,
    },
    _source: "Next getServersideProps",
  });

  return {
    props: { user },
  };
}
