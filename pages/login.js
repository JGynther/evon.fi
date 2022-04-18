import { supabase } from "@lib/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "@components/layout";
import Section from "@components/layout/section";
import Button from "@components/button";
import { Input, Form } from "@components/formcontrol";
import { Title } from "@components/text";

export default function Login({ env }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const onChange = (event) => setEmail(event.target.value);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    supabaseSignIn(env, email, setDidSubmit);
  };

  const router = useRouter();
  useEffect(() => {
    if (supabase.auth.user()) {
      router.replace("/portal");
    }
  });

  if (didSubmit) {
    return (
      <Layout title="Login - Evon Capital">
        <Section>
          <Title>
            Sähköpostiisi on lähetetty kirjautumislinkki. Voit sulkea tämän
            sivun.
          </Title>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout title="Login - Evon Capital">
      <Section>
        <Form onSubmit={handleSignIn} center>
          <Input label="Sähköpostiosoite" type="email" onChange={onChange} />
          <Button type="submit" loading={isSubmitting}>
            Kirjaudu sisään
          </Button>
        </Form>
      </Section>
    </Layout>
  );
}

async function supabaseSignIn(env, email, setDidSubmit) {
  if (env === "prod") {
    const { data, error } = await supabase.auth.signIn({ email });
  } else {
    const { data, error } = await supabase.auth.signIn(
      { email },
      { redirectTo: "http://localhost:3000" }
    );
  }
  setDidSubmit(true);
}

export async function getStaticProps() {
  const env = process.env.NODE_ENV === "production" ? "prod" : "dev";
  return {
    props: {
      env: env,
    },
  };
}
