import { useState, useEffect } from "react";

import Link from "next/link";

import { supabase } from "@lib/supabase";

import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";

import Spinner from "@components/spinner";

export default function Blog() {
  return (
    <Layout title="Blog - Evon Capital">
      <Posts />
    </Layout>
  );
}

export function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const posts = await supabase
      .from("posts")
      .select()
      .order("created_at", { ascending: false })
      .then((r) => r.data);
    setPosts(posts);
  };

  return (
    <Section>
      <Title>Viimeisimmät blogimme</Title>
      <Prose large>Tutustu viimeisimpiin blogikirjoituksiimme tästä.</Prose>
      {posts ? (
        <ul className="flex flex-col mt-5 divide-y divide-neutral-700 bg-neutral-800 rounded p-3">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.id}`}
                passHref
                className="flex text-white text-opacity-80 hover:bg-neutral-700 transition py-2 px-4"
              >
                {new Date(post.created_at).toLocaleDateString()} {"-"}{" "}
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </Section>
  );
}
