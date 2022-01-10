import { fetchData } from "@lib/fetchdata";
import { supabase } from "@lib/supabase";

import Head from "next/head";
import Link from "next/link";

import PageWrapper from "@components/pagewrapper";
import Banner from "@components/banner";
import TransactionTable from "@components/portal/transactiontable";
import PortalNav from "@components/portal/portalnav";
import Portfolio from "@components/portal/portfolio";
import Footer from "@components/footer";

export default function App({ user, portfolio_data, transaction_data }) {
  return (
    <PageWrapper>
      <Head>
        <title>Omistajaportaali - Evon Capital</title>
      </Head>

      <div className="grid justify-center text-center py-2 bg-indigo-500 bg-opacity-50 text-lg tracking-wider">
        <p>Kirjautuneena sisään tunnuksella: {user.email}</p>
        <Link href="/portal/profile" passHref>
          <a className="underline">Profiiliin tästä</a>
        </Link>
      </div>

      <PortalNav />

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

      <Footer />
    </PageWrapper>
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
