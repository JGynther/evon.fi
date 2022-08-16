import { useRouter } from "next/router";
import { supabase } from "@lib/supabase";
import { useEffect } from "react";
import { Headless } from "@components/layout";
import { Title } from "@components/text";

export default function Login() {
  const router = useRouter();

  async function supabaseSignOut() {
    const user = await supabase.auth.user();

    if (user) {
      const { error } = await supabase.auth.signOut();
    }

    router.replace("/");
  }

  useEffect(() => {
    supabaseSignOut();
  }, []);

  return (
    <Headless title="Signout - Evon Capital">
      <Title>Sinua kirjataan ulos...</Title>
    </Headless>
  );
}
