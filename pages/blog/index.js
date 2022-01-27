import { useState, useEffect } from "react";

import Link from "next/link";

import { supabase } from "@lib/supabase";

import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Subtitle } from "@components/text";

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
      <Subtitle>Blogi</Subtitle>
      <Title>Viimeisimmät blogimme</Title>
      {posts && (
        <ul className="grid gap-5">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`} passHref>
                <a className="text-indigo-500 hover:text-indigo-700 transition tracking-wider text-lg">
                  {new Date(post.created_at).toLocaleDateString()} -{" "}
                  {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
