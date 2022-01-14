import { supabase } from "@lib/supabase";

import Head from "next/head";

import PageWrapper from "@components/pagewrapper";
import Navigation from "@components/nav";
import Footer from "@components/footer";
import { Title, Subtitle, Prose } from "@components/text";

export default function Post({ post }) {
  const categories = post?.categories?.categories;
  return (
    <PageWrapper>
      <Head>
        <title>{post.title}</title>
        <meta property="article:published" content={post.created_at} />
      </Head>
      <Navigation />
      <div className="container mx-auto flex justify-center">
        <article className="mx-4">
          {categories && (
            <Subtitle>
              <span className="flex gap-4">
                {categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </span>
            </Subtitle>
          )}
          <Title noMargin>{post.title}</Title>
          <Subtitle>
            {new Date(post.created_at).toLocaleDateString()} by {post.author}
          </Subtitle>
          <div>
            {post.content.split("\n").map((line, index) => (
              <Prose large key={index}>
                {line}
              </Prose>
            ))}
          </div>
        </article>
      </div>
      <Footer />
    </PageWrapper>
  );
}

export async function getStaticPaths() {
  const posts = await supabase
    .from("posts")
    .select()
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
