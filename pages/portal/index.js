import { fetchData } from "@lib/fetchdata";
import { supabase } from "@lib/supabase";

import Layout from "@components/layout";
import Banner from "@components/banner";
import TransactionTable from "@components/portal/transactiontable";
import Portfolio from "@components/portal/portfolio";

export default function App({ user, portfolio_data, transaction_data }) {
  return (
    <Layout title="Portal - Evon Capital" portal user={user}>
      <Banner
        title="Yhtiökokousilmoitautuminen"
        long={true}
        subtitle="Varsinainen yhtiökokous"
        button="Ilmoitautumaan"
        href="/portal/yhtiokokous"
      >
        Yhtiökokous lähestyy nopeasti. Kannattaa hoitaa ilmoitautuminen kuntoon
        ennemmin kuin myöhemmin. Majoituslippuja saatavilla rajoitetusti!
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

  const [portfolio_data, transaction_data] = await fetchData();

  return {
    props: { user, portfolio_data, transaction_data },
  };
}
