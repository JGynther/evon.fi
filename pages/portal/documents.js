import { supabase } from "@lib/supabase";
import { useEffect, useState } from "react";

import Layout from "@components/layout";
import Section from "@components/layout/section";
import Spinner from "@components/spinner";

export default function Documents({ user }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    listAllObjects("documents").then((data) => setData(data));
  }, []);

  return (
    <Layout title="Documents - Evon Capital" portal user={user}>
      <Section>
        {!data && (
          <div className="flex justify-center items-center">
            <Spinner size="h-16 w-16" />
          </div>
        )}

        {data &&
          data.map((folder) => (
            <div key={folder.id}>
              <div className="text-xl uppercase tracking-widest">
                {folder.id}
              </div>
              <div className="flex flex-col space-y-5 my-8">
                {folder.objects.map((object) => (
                  <a
                    key={object.id}
                    className="cursor-pointer tracking-wider text-white text-opacity-80 hover:text-indigo-500 transition"
                    onClick={async () => {
                      supabase.storage
                        .from("documents")
                        .download(`${folder.id}/${object.name}`)
                        .then((r) => {
                          const fileURL = URL.createObjectURL(r.data);
                          window.open(fileURL);
                        });
                    }}
                  >
                    {object.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
      </Section>
    </Layout>
  );
}

async function listAllObjects(bucket) {
  const folders = await getFolders(bucket);

  const objects = await Promise.all(
    folders.map(async (folder) => {
      const data = await getObjectsByFolder(bucket, folder.name);
      return { id: folder.name, objects: data };
    })
  );

  return objects;
}

async function getObjectsByFolder(bucket, folder) {
  const { data, error } = await supabase.storage.from(bucket).list(folder);
  return data;
}

async function getFolders(bucket) {
  const { data, error } = await supabase.storage.from(bucket).list();
  return data;
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

  return {
    props: { user },
  };
}
