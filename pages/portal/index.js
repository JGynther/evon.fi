import { fetchData } from "@lib/fetchdata";
import { supabase, createAdminLogEntry } from "@lib/supabase";

import Layout from "@components/layout";
import Banner from "@components/banner";
import TransactionTable from "@components/portal/transactiontable";
import Portfolio from "@components/portal/portfolio";

export default function App({ user, portfolio_data, transaction_data }) {
  return (
    <Layout title="Portal - Evon Capital" portal user={user}>
      <Banner
        title="Yhtiökokouspöytäkirja julkaistu!"
        long
        button="Dokumentit"
        href="/portal/documents"
      >
        Portaalin dokumentit-osiosta löytyy nyt vuoden 2022 varsinaisen
        yhtiökokouksen dokumentit.
      </Banner>

      <div className="flex flex-wrap justify-center">
        <TransactionTable data={transaction_data} />
      </div>

      <Portfolio data={portfolio_data} />
    </Layout>
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

  await createAdminLogEntry({
    event: "portal_login",
    userid: user.id,
    email: user.email,
  });

  const [portfolio_data, transaction_data] = await fetchData();

  return {
    props: { user, portfolio_data, transaction_data },
  };
}
