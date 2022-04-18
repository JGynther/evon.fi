import { supabase } from "@lib/supabase";

import { Portal } from "@components/layout";
import Banner from "@components/banner";

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

  return {
    props: { user },
  };
}
