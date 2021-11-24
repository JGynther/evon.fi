import Head from "next/head";

import Arrow from "../public/arrow.svg";

import PageWrapper from "@components/pagewrapper";
import RSSFeed from "@components/portal/rss";
import TransactionTable from "@components/portal/transactiontable";
import PortalNav from "@components/portal/portalnav";
import Portfolio from "@components/portal/portfolio";

import fetchData from "@components/fetchdata";

import { signIn, useSession } from "next-auth/client";

export default function App({ portfolio_data, transaction_data, rss_data }) {
  const [session, loading] = useSession();

  if (loading) {
    return (
      <>
        <p>Loading...</p>
        <p>Jos lataaminen kestää, päivitä sivu.</p>
      </>
    );
  }

  return (
    <>
      {session ? (
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
      ) : (
        <PageWrapper>
          <Head>
            <title>Login - Evon Capital</title>
          </Head>
          <section className="max-h-screen overflow-hidden">
            <div className="">
              <PortalNav />
              <div className="grid items-center min-h-screen md:min-h-0">
                <div className="flex justify-center mx-24">
                  <button
                    onClick={signIn}
                    className="
                    flex-grow bg-indigo-500 py-3 px-5 my-2 md:mx-10
                    rounded tracking-wider text-lg my-8 font-normal
                    transition hover:bg-indigo-700 focus:ring group text-center
                  "
                  >
                    <span className="flex justify-center items-center">
                      Sign in{" "}
                      <Arrow className="transition transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </PageWrapper>
      )}
    </>
  );
}

import { Doughnut } from "react-chartjs-2";

function Chart({ data }) {
  const cut_data = data.slice(data.length - 5, data.length - 1);
  const formated_data = {
    labels: cut_data.map((row) => row[0]),
    datasets: [
      {
        label: "testi",
        data: cut_data.map((row) => row.slice(-2)[0].replace(",", ".")),
        backgroundColor: ["#302e80", "#4337c9", "#6366f1", "#a5b4fb"],
        hoverOffset: 30,
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="flex-grow">
      <Doughnut
        data={formated_data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: "left",
              align: "start",
              labels: {
                color: "white",
                font: {
                  size: 14,
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

import Parser from "rss-parser";

export async function getStaticProps() {
  const [portfolio_data, transaction_data] = await fetchData();

  let parser = new Parser();
  const res = await parser.parseURL("https://feeds.kauppalehti.fi/rss/klnyt");
  const rss_data = res.items.slice(0, 5);

  return {
    props: { portfolio_data, transaction_data, rss_data },
    revalidate: 10,
  };
}
