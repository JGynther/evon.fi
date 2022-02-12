import { supabase } from "@lib/supabase";

import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Subtitle, Prose } from "@components/text";

export default function Post({ post }) {
  const categories = post?.categories?.categories;
  const meta = <meta property="article:published" content={post.created_at} />;
  return (
    <Layout title={post.title} meta={meta}>
      <Section>
        <article>
          {categories && (
            <Subtitle>
              <span className="flex flex-wrap gap-4">
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
