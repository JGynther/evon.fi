import Head from "next/head";
import { useRouter } from "next/router";

import { supabase } from "@lib/supabase";

import { useEffect } from "react";

import PageWrapper from "@components/pagewrapper";
import PortalNav from "@components/portal/portalnav";
import Footer from "@components/footer";

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

  return (
    <PageWrapper>
      <Head>
        <title>Signout - Evon Capital</title>
      </Head>
      <div>
        <PortalNav noSignout />
        <div className="flex justify-center tracking-wider text-xl">
          Sinua kirjataan ulos.
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
