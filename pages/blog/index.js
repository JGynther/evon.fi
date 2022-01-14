import { useState, useEffect } from "react";

import Link from "next/link";

import { supabase } from "@lib/supabase";

import PageWrapper from "@components/pagewrapper";
import Section from "@components/section";
import { Title, Subtitle } from "@components/text";
import Navigation from "@components/nav";
import Footer from "@components/footer";

export default function Blog() {
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
    <PageWrapper>
      <Navigation />
      <Section>
        <div className="grid justify-center">
          <Subtitle>Blogi</Subtitle>
          <Title>Viimeisimmät blogimme</Title>
          {posts && (
            <ul className="grid">
              {posts.map((post) => (
                <li key={post.id}>
                  <Subtitle>
                    <Link href={`/blog/${post.id}`} passHref>
                      <a>
                        {new Date(post.created_at).toLocaleDateString()} -{" "}
                        {post.title}
                      </a>
                    </Link>
                  </Subtitle>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>
      <Footer />
    </PageWrapper>
  );
}
