import { supabase } from "@lib/supabase";

import { Portal } from "@components/layout";
import Banner from "@components/banner";
import { createLog } from "lib/supabase";

import Portfolio from "@components/portfolio";
import Transactions from "@components/transactions";

export default function App({ user }) {
  return (
    <Portal title="Portal - Evon Capital" portal user={user}>
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

  await createLog({
    event: "portal_login",
    userid: user.id,
    email: user.email,
  });

  return {
    props: { user },
  };
}
