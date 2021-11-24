import Link from "next/link";
import Head from "next/head";

import Arrow from "../../public/arrow.svg";

import PageWrapper from "@components/pagewrapper";
import Section from "@components/section";
import { Title, Prose } from "@components/text";

import Navigation from "@components/nav";
import Footer from "@components/footer";

export default function Contact() {
  return (
    <PageWrapper>
      <Head>
        <title>Submit error</title>
      </Head>
      <Navigation />
      <Section>
        <Link href="/" passHref>
          <button className="flex items-center text-indigo-500 hover:text-indigo-700 transition my-5 text-lg tracking-wider">
            <Arrow className="fill-current transform rotate-180" />
            Takaisin etusivulle
          </button>
        </Link>
        <Title>Lomakkeen lähettämisessä tapahtui virhe.</Title>
        <Prose large>
          Ole hyvä ja kokeile myöhemmin uudelleen. Mikäli ongelma jatkuu, ole
          ystävällinen ja ota meihin yhteyttä suoraan.
        </Prose>
      </Section>
      <Footer />
    </PageWrapper>
  );
}
