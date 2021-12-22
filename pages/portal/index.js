import Head from "next/head";

import Arrow from "../../public/arrow.svg";

import PageWrapper from "@components/pagewrapper";
import RSSFeed from "@components/portal/rss";
import TransactionTable from "@components/portal/transactiontable";
import PortalNav from "@components/portal/portalnav";
import Portfolio from "@components/portal/portfolio";

import fetchData from "@lib/fetchdata";

import { getSession } from "next-auth/client";

export default function App({ portfolio_data, transaction_data, rss_data }) {
  return (
    <PageWrapper>
      <Head>
        <title>Omistajaportaali - Evon Capital</title>
      </Head>

      <PortalNav />

      <div className="flex flex-wrap justify-center">
        <TransactionTable data={transaction_data} />
        <RSSFeed data={rss_data} />
      </div>

      <Portfolio data={portfolio_data} />
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
