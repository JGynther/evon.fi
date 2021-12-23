import Head from "next/head";

import PageWrapper from "@components/pagewrapper";
import Banner from "@components/banner";

import RSSFeed from "@components/portal/rss";
import TransactionTable from "@components/portal/transactiontable";
import PortalNav from "@components/portal/portalnav";
import Portfolio from "@components/portal/portfolio";
import Footer from "@components/footer";

import { fetchData } from "@lib/fetchdata";

import { getSession } from "next-auth/client";

export default function App({ portfolio_data, transaction_data, rss_data }) {
  return (
    <PageWrapper>
      <Head>
        <title>Omistajaportaali - Evon Capital</title>
      </Head>

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
        <RSSFeed data={rss_data} />
      </div>

      <Portfolio data={portfolio_data} />

      <Footer />
    </PageWrapper>
  );
}

import Parser from "rss-parser";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const [portfolio_data, transaction_data] = await fetchData();

  let parser = new Parser();
  const res = await parser.parseURL("https://feeds.kauppalehti.fi/rss/klnyt");
  const rss_data = res.items.slice(0, 5);

  return {
    props: { session, portfolio_data, transaction_data, rss_data },
  };
}
