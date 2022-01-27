import { useRouter } from "next/router";

import { supabase } from "@lib/supabase";

import { useEffect } from "react";

import Loading from "@components/layout/loading";

export default function Login() {
  const router = useRouter();

  async function supabaseSignOut() {
    const user = await supabase.auth.user();

    if (user) {
      const { error } = await supabase.auth.signOut();
    }

    router.push("/");
  }

  useEffect(() => {
    supabaseSignOut();
  }, []);

  return <Loading text="Sinua kirjataan ulos." />;
}
