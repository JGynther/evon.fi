import PageWrapper from '@components/pageWrapper';
import Section from '@components/section';

import fetchData from '@components/fetchdata';

import { signIn, useSession } from "next-auth/client";

export default function App({ portfolio_data, transaction_data, rss_data }) {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

    
  return (
    <>
    {session ? (
        <PageWrapper>
          <PortalNav />
            <BannerNotice title="Tervetuloa portaaliin!">
              Kyseessä on portaalin ensimmäinen beta-versio. 
              Mikäli huomaat ongelmia tai sinulla on muuten annettavaa palautetta, <a href="mailto:joona.gynther@evon.fi" className="underline font-semibold hover:text-indigo-900 transition">laita viesti.</a>
            </BannerNotice>
            <div className="flex">
            <TransactionTable data={transaction_data} />
            <RSSFeed data={rss_data}/>
            </div>
            {/*<Section>
              <div className="flex gap-10 flex-wrap justify-center whitespace-nowrap">
                <div>
                  <h1>Testi lorem ipsum dolor sit amet.</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <Chart data={portfolio_data}/>
              </div>
            </Section>*/}
          <Portfolio data={portfolio_data}/>
        </PageWrapper>
      ) : (
        <PageWrapper>
          <section className="flex justify-center items-center">
          <div className="">
            <PortalNav/>
            <div className="flex justify-center mx-24">
              <button onClick={signIn} className="
                flex-grow 
                bg-indigo-500 py-3 px-5 my-2 mx-10 rounded tracking-wider text-lg my-8 font-normal
                transition hover:bg-indigo-700 focus:ring group text-center
              "> 
                <span className="flex justify-center items-center">
                  Sign in
                  <Arrow className="transition transform group-hover:translate-x-1"/>
                </span>
              </button>
            </div>
          </div>
          </section>
        </PageWrapper>
      )
    }
    </>
  )
};

function RSSFeed({ data }) {
  return (
    <section className="flex justify-center mx-5">
      <div className="grid max-w-screen-sm border-2 border-gray-800 rounded">
        <div className="bg-indigo-500 text-center py-2 font-bold">KL NYT</div>
        {data.map((item, index) => 
          <div key={index} className={`grid py-4 px-3 gap-2 ${index % 2 === 0 ? "" : "bg-gray-800"}`}>
            <span className="flex gap-2 text-xs">
              <p className="text-white text-opacity-60">{new Date(item.pubDate).toTimeString().slice(0,5)}</p>
              <p className="uppercase tracking-widest text-indigo-500 ">{item.categories[0]}</p>
            </span>
            <p className="text-white text-opacity-80 hover:text-opacity-100 transition">
              <a href={item.link}>{item.title}</a>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

import Subtitle from "@components/subtitle"

function TransactionTable({ data }) {
  // Data is an array containing arrays with [date, name, purchase/sale, amount, price, sum]
  return (
    <section className="grid justify-center overflow-hidden m-5 my-10 text-center">
      <Title noMargin>Yhtiön viimeisimmät kaupat</Title>
      <div className="overflow-x-auto rounded">
        <table className="border-2 border-indigo-500">
          <thead className="bg-indigo-500 whitespace-nowrap">
            <tr>
              <th className="px-5 py-2">Päivämäärä</th>
              <th className="px-5 py-2">Tuote</th>
              <th className="px-5 py-2">Osto/myynti</th>
              <th className="px-5 py-2">Määrä</th>
              <th className="px-5 py-2">Kurssi</th>
              <th className="px-5 py-2">Summa</th>
            </tr>
          </thead>
          <tbody className="border-2 border-gray-800">
            {data.map((row, index) =>
              <tr key={index} className={`whitespace-nowrap ${index % 2 === 0 ? "" : "bg-gray-800"}`}>
                {row.map((cell, index) => 
                  <td key={index} className={`px-5 py-3 ${index > 1 ? "text-right" : "text-left"}`}>
                    {cell}
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Portfolio({ data }) {
  return (
    <section className="grid justify-center overflow-hidden m-5 text-center">
      <Title>Yhtiön (osake)salkku</Title>
      <div className="overflow-x-auto rounded">
        <table className="border-4 border-indigo-500">
          <thead className="bg-indigo-500 whitespace-nowrap">
            <tr className="">
              <th className="px-5 py-2">Osake</th>
              <th className="px-5 py-2">KPL</th>
              <th className="px-5 py-2">Keskihinta (EUR)</th>
              <th className="px-5 py-2">Hankinta-arvo (EUR)</th>
              <th className="px-5 py-2">Kurssi (EUR)</th>
              <th className="px-5 py-2">Tuotto (%)</th>
              <th className="px-5 py-2">Tuotto (EUR)</th>
              <th className="px-5 py-2">Arvo (EUR)</th>
              <th className="px-5 py-2">Paino (%)</th>
            </tr>
          </thead>
          <tbody className="border-4 border-gray-800">
            {data.map((row, index) => 
                <tr key={index} className={`
                  whitespace-nowrap 
                  ${index % 2 === 0 ? "" : "bg-gray-800"} 
                  ${index >= data.length - 5 ? "font-bold" : "font-light"}
                `}>
                  <td className="px-5 py-2 text-left">{row[0]}</td>
                  <td className="px-5 py-2 text-right">{row[2]}</td>
                  <td className="px-5 py-2 text-right">{row[3]}</td>
                  <td className="px-5 py-2 text-right">{row[4]}</td>
                  <td className="px-5 py-2 text-right">{row[5]}</td>
                  <td className="px-5 py-2 text-right">{row[6]}</td>
                  <td className="px-5 py-2 text-right">{row[7]}</td>
                  <td className="px-5 py-2 text-right">{row[8]}</td>
                  <td className="px-5 py-2 text-right">{row[9]}</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="text-right">* Osakkeiden kurssit viivästettyjä</p>
      <p className="text-right">** USD positiot arvioita euroina</p>
    </section>
  )
}

import { Doughnut } from 'react-chartjs-2';

function Chart({ data }) {
  const cut_data = data.slice(data.length - 5, data.length - 1);
  const formated_data = {
    labels: cut_data.map(row => row[0]),
    datasets: [{
      label: "testi",
      data: cut_data.map(row => row.slice(-2)[0].replace(",",".")),
      backgroundColor: [
        "#302e80",
        "#4337c9",
        "#6366f1",
        "#a5b4fb"
      ],
      hoverOffset: 30,
      borderWidth: 0,
    }]
  }
  return (
    <div className="flex-grow">
      <Doughnut data={formated_data} 
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
                }
              } 
            },
          } 
        }}/>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import Logo from "../public/logo.png"

function PortalNav() {
  return (
    <nav className="mx-5 md:mx-24 pt-8 md:py-8">
      <BackArrowButton>Takaisin etusivulle</BackArrowButton>
      <Link href="/portal" passHref>
          <a className="flex flex-wrap justify-center md:justify-start items-center gap-4 my-4">
              <Image src={Logo} alt="" width={75} height={60} className="object-cover cursor-pointer"/>
              <p className="tracking-widest text-2xl cursor-pointer font-semibold">
                  OMISTAJAPORTAALI
              </p>
              <span className="text-white bg-indigo-500 py-1 px-3 rounded tracking-widest">
                BETA
              </span>
          </a>
      </Link>
    </nav>
  )
}

import Arrow from "../public/arrow.svg"

function BackArrowButton({ children }) {
  return (
    <Link href="/" passHref>
    <div className="group transition">
      <button className="flex items-center text-indigo-500 group-hover:text-indigo-700 mt-5 text-lg tracking-wider">
        <Arrow className="fill-current transform rotate-180 group-hover:-translate-x-1 transition"/>
        {children}
      </button>
    </div>
    </Link>
  )
}

import Title from "@components/title"
import Prose from "@components/prose"

function BannerNotice({ title, children }) {
  return (
    <section>
      <div className="grid justify-center items-center p-10 bg-indigo-500 rounded text-center">
        <Title noMargin>
          {title}
        </Title>
        <Prose large>
          {children}
        </Prose>
      </div>
    </section>
  )
}

import Parser from "rss-parser"

export async function getStaticProps() {
  const [portfolio_data, transaction_data] = await fetchData()
  let parser = new Parser();
  const res = await parser.parseURL("https://feeds.kauppalehti.fi/rss/klnyt");
  const rss_data = res.items.slice(0,5)
  return {
    props: { portfolio_data, transaction_data, rss_data }
  }
}