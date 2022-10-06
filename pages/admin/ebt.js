import { useState } from "react";
import toast from "react-hot-toast";

import { supabase, createLog } from "@lib/supabase";
import Button from "@components/button";
import Link from "next/link";

export default function Blog() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { title, id, author, description, content } = event.target;

    const { data, error } = await supabase.from("posts").insert([
      {
        title: title.value,
        id: id.value,
        author: author.value,
        description: description.value,
        content: content.value,
      },
    ]);

    if (error) {
      toast.error(error.message);
    } else {
      event.target.reset();
      toast.success(`Created post ${data[0].id}`);
      setTimeout(() => window.open(`/blog/${data[0].id}`, "_blank"), 2000);
    }

    setLoading(false);
  };

  return (
    <div className="bg-neutral-900 text-white h-screen overflow-auto p-5 md:p-10">
      <h1 className="text-2xl tracking-wider mb-8">Evon Blog Tool (EBT)</h1>
      <p className="max-w-prose text-white text-opacity-80 mb-14">
        A simple internal tool to publish new blog posts. Editing posts is
        currently not possible so take care. All posts are automatically
        formatted using Markdown and other default stylings of the website.
        Customization beyond what CommonMark markdown supports is not supported.
      </p>
      <form className="max-w-md flex flex-col" onSubmit={handleSubmit}>
        <Input type="text" label="Blog main title" name="title" required />
        <Input
          type="text"
          label="Slug (the part after /blog/<slug>)"
          name="id"
          required
        />
        <Input type="text" label="Author" name="author" required />
        <Input type="text" label="Description (optional)" name="description" />
        <Content />
        <Button type="submit" loading={loading}>
          Create blog
        </Button>
      </form>
    </div>
  );
}

function Input({ label, type, name, required }) {
  return (
    <div className="flex flex-col space-y-2 mb-6">
      <label className="text-lg tracking-wider">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="bg-neutral-900 rounded px-2 py-1 border border-neutral-700 hover:border-neutral-500 tranform hover:-translate-y-1 focus:-translate-y-1 outline-none focus:ring-1 focus:border-indigo-700 transition"
      />
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col space-y-2 mb-10">
      <label className="text-lg tracking-wider">Blog content</label>
      <label className="text-white text-opacity-60">
        Should be properly formatted markdown.{" "}
        <Link href="https://commonmark.org/">
          <a className="underline" target="_blank">
            Learn more
          </a>
        </Link>
      </label>
      <textarea
        required
        name="content"
        className="bg-neutral-900 rounded px-2 py-1 border border-neutral-700 hover:border-neutral-500 tranform hover:-translate-y-1 focus:-translate-y-1 outline-none focus:ring-1 focus:border-indigo-700 transition"
      />
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
    service: "admin/ebt",
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
