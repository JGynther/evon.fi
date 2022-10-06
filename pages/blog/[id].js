import ReactMarkdown from "react-markdown";

import { supabase } from "@lib/supabase";

import Layout from "@components/layout";
import Section from "@components/layout/section";

export default function Post({ post }) {
  const meta = (
    <>
      <meta property="article:published" content={post.created_at} />
      <title>{post.title}</title>
      <meta property="description" content={post?.description} />
    </>
  );
  return (
    <Layout title={post.title} meta={meta}>
      <Section>
        <article className="prose prose-invert prose-lg">
          <h4 className="text-indigo-500">
            {new Date(post.created_at).toLocaleDateString()}, {post.author}
          </h4>
          <h1 className="text-indigo-">{post.title}</h1>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await supabase
    .from("posts")
    .select("id")
    .then((r) => r.data);

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await supabase
    .from("posts")
    .select()
    .eq("id", params.id)
    .then((r) => r.data[0]);

  return {
    props: { post },
  };
}
