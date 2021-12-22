import Link from "next/link";
import Head from "next/head";

import PageWrapper from "@components/pagewrapper";
import Section from "@components/section";
import { Title, Subtitle, Prose } from "@components/text";
import OpenNewTabButton from "@components/opennewtabbutton";
import { LinkButton } from "@components/button";

import Navigation from "@components/nav";
import Footer from "@components/footer";

import Arrow from "../../public/arrow.svg";

export default function Osakeanti() {
  return (
    <PageWrapper>
      <Head>
        <title>Osakeanti - Evon Capital</title>
      </Head>

      <Navigation />

      <Section id="content">
        <Subtitle>1.8. - 31.12.2021</Subtitle>
        <Title>Evon Groupin osakeanti</Title>
        <Prose large>
          Haluatko lähteä omistajaksi Evon Capitaliin? No nyt se on mahdollista!
        </Prose>
        <Prose large>
          Tutustu ensin alta yhtiön osakeantiin liittyviin dokumentteihin ja
          markkinointimateriaaleihin. On erittäin tärkeää ymmärtää
          listaamattomaan osakeyhtiöön sijoittamisen riskit ennen sijoituksen
          tekemistä.
        </Prose>

        <div className="flex flex-wrap gap-7 items-center my-10 text-center tracking-wider text-sm">
          <OpenNewTabButton href="/osakeanti_infopaketti.pdf">
            Osakeantiesitys
          </OpenNewTabButton>

          <OpenNewTabButton href="/tulosennuste.pdf">
            Tulosennuste 2020-2025
          </OpenNewTabButton>

          <OpenNewTabButton href="/perustietoasiakirja.pdf">
            Yhtiön perustietoasiakirja
          </OpenNewTabButton>

          <OpenNewTabButton href="/osakeannin_ehdot.pdf">
            Osakeannin ehdot
          </OpenNewTabButton>
        </div>

        <Prose large>
          Oletko valmis sijoittamaan? Täytä <b>sitova</b> osakeantisitoumus
          oheisella lomakkeella.
        </Prose>

        <LinkButton href="/osakeanti/sitoumus">
          Siirry täyttämään lomake
        </LinkButton>
      </Section>

      <Footer />
    </PageWrapper>
  );
}
