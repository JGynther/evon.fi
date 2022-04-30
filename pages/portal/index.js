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
        title="Osakeanti on alkanut!"
        long
        button="Osakeantii"
        href="/portal/osakeanti"
      >
        Evon Capitalilla on 1.5. - 16.8. käynnissä sekä suunnattu A-anti sekä
        merkintäoikeusanti B-osakkeille. Nykyiset osakkaat tekevät kummankin
        annin merkinnät portaalissa!
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
