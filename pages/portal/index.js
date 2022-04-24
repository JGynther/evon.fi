import { supabase } from "@lib/supabase";

import { Portal } from "@components/layout";
import Banner from "@components/banner";
import { createLog } from "lib/supabase";

import Portfolio from "@components/portfolio";
import Transactions from "@components/transactions";

export default function App({ user }) {
  return (
    <Portal title="Portal - Evon Capital" portal user={user}>
      <Banner
        title="Yhtiökokouspöytäkirja julkaistu!"
        long
        button="Dokumentit"
        href="/portal/documents"
      >
        Portaalin dokumentit-osiosta löytyy nyt vuoden 2022 varsinaisen
        yhtiökokouksen dokumentit.
      </Banner>
      <Transactions />
      <Portfolio />
    </Portal>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  createLog({
    event: "portal_login",
    userid: user.id,
    email: user.email,
  });

  return {
    props: { user },
  };
}
