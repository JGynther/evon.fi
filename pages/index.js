import "tailwindcss/tailwind.css";

import { useState } from "react";

import Head from "next/head";
import Link from "next/link";

import Arrow from "../public/arrow.svg";

import { fetchData } from "@lib/fetchdata";

import PageWrapper from "@components/pagewrapper";
import Section from "@components/section";
import { Title, Subtitle, Prose } from "@components/text";
import { LinkButton } from "@components/button";

import Navigation from "@components/nav";
import TransactionTable from "@components/portal/transactiontable";
import Footer from "@components/footer";

export default function Home({ transaction_data }) {
  return (
    <PageWrapper>
      <Head>
        <title>Evon Capital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex justify-center items-center text-center mx-5">
        <div className="max-w-screen-md">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide md:my-8 opacity-100">
            Ole opportunisti, älä pelkkä sijoittaja.
          </h1>

          <h2 className="my-3 md:text-lg opacity-80">
            Evon Capital on erittäin tuottohakuisten piensijoittajien
            yhteisyritys, joka sijoittaa varojaan pitkällä aikahorisontilla.
            Yhtiö yhdistää niin osakkaidensa varat kuin osaamisen — ja hakee
            markkinoihin nähden ylituottoa tällä synergialla.
          </h2>

          <h2 className="mt-8 md:text-lg opacity-80">
            Kiinnostaako lähteä mukaan? 👇
          </h2>

          <LinkButton href="/waitlist">Liity odotuslistalle</LinkButton>
        </div>
      </main>

      <Section>
        <TransactionTable data={transaction_data} />
      </Section>

      <Section>
        <Subtitle>Tietoa yrityksestä</Subtitle>
        <Title>Evon Capital</Title>
        <Prose large>
          Evon Capital on nuorten yrittäjien ja omistajien muodostama
          sijoitusyhtiö, joka tähtää räväkkään sijoittamiseen, trendikkääseen
          näkyvyyteen ja ennen kaikkea verojen minimointiin. Yhtiön osaava johto
          sekä joustava strategia ovat reseptimme ylituottoon vaihtuvissakin
          markkinatilanteissa.
        </Prose>
        <Prose large>
          Jokainen omistaja voi osallistua yhtiön toimintaan niin paljon tai
          niin vähän kuin suinkin haluaa. Yhtiön sisältä löytyy monia erilaisia
          tiimejä, joissa voi hyödyntää omaa osaamistaan samalla oppien uutta.
          Yhteisöllisen sijoittamisen ajatusta noudattaen yhtiön sisältä löytyy
          jokaiselle kiinnostuneelle omistajalle avoin Financial Advisory Board
          (FAB), jossa voi ehdottaa sijoituskohteita sekä keskustella niistä.
        </Prose>
        <Prose large>
          Yhtiömme pyrkii myös perinteisen markkina-analyysin sekä sijoittamisen
          ohella tuottamaan omistajilleen lisäarvoa erilaisilla tapahtumilla ja
          projekteilla.
        </Prose>
      </Section>

      <Section>
        <Title>Tutustu yhtiöön tarkemmin</Title>
        <div className="flex flex-wrap justify-center gap-5 md:gap-10">
          <Link href="#arvot" passHref>
            <button className="bg-gray-800 flex-grow text-center text-white text-opacity-80 tracking-wider text-lg rounded py-5 shadow hover:shadow-xl transition transform hover:scale-105">
              Yhtiön arvot
            </button>
          </Link>
          <Link href="/" passHref>
            <button className="bg-gray-800 flex-grow text-center text-white text-opacity-80 tracking-wider text-lg rounded py-5 shadow hover:shadow-xl transition transform hover:scale-105">
              Yhtiön johto
            </button>
          </Link>
          <Link href="#faq" passHref>
            <button className="bg-gray-800 flex-grow text-center text-white text-opacity-80 tracking-wider text-lg rounded py-5 shadow hover:shadow-xl transition transform hover:scale-105">
              Usein kysyttyä (FAQ)
            </button>
          </Link>
        </div>
      </Section>

      <Section id="arvot">
        <Subtitle>Mille pohjalle yhtiö on rakennettu?</Subtitle>
        <Title>Yhtiön arvot</Title>

        <div className="grid gap-10 justify-center">
          <span className="bg-gray-800 px-7 md:px-10 py-7 rounded shadow">
            <h3 className="text-xl font-bold tracking-wide">Eeppisyys</h3>
            <Prose>
              Kyseessä ei ole vain pelkkä yksinkertainen sijoitus tai joku
              helvetin Sirkka-tädin kahvila. Meidän firmamme on kehittyvä
              legenda, jonka eeppisiä jakeita kirjoitetaan päivä päivältä.
              Tavoitteemme on luoda sijoittajien yhteisö, joka tunnetaan
              kansallisella tasolla sen räväkkyydestä ja hyvästä meiningistä.
              Emme pelkää tehdä, yrittää tai kertoa keitä me olemme. Kävelemme
              ylpeästi kabinetista toiseen sikari suussa ja apina-logo paidassa.
            </Prose>
          </span>

          <span className="bg-gray-800 px-7 md:px-10 py-7 rounded shadow">
            <h3 className="text-xl font-bold tracking-wide">Tuloksellisuus</h3>
            <Prose>
              Kaiken keskiössä on juuri sinun osakkeiden arvon kasvattaminen.
              Sijoitusten pitää tuottaa, taseen kasvaa ja osaamisen karttua.
              Yritysjohto on sitoutunut minimoimaan aivan kaikki kulut
              kampaviinereistä omaan palkkioonsa, jota ei muuten makseta, jotta
              tulokset ovat mahdollisimman voitokkaat omistajilleen. Kaikki
              hankkeet ja projektit, joihin yritys lähtee mukaan tai niitä
              toteuttamaan, tehdään tulos edellä.
            </Prose>
          </span>

          <span className="bg-gray-800 px-7 md:px-10 py-7 rounded shadow">
            <h3 className="text-xl font-bold tracking-wide">Omistajuus</h3>
            <Prose>
              Toimintamme tärkein arvo on omistajuus. Jokainen osakkeita ostava
              henkilö voi ylpeästi kutsua itseään meidän omistajaksi. Tämä
              tarkoittaa jo nyt, ja etenkin tulevaisuudessa, useita erilaisia
              eksklusiivisia etuja ja työkaluja, jotka saat käyttöösi, ja joita
              ei muiden yritysten osakkeita ostamalla saa. Kaikilla on pääsy
              mukaan yrityksen operatiiviseen toimintaan, mikäli intoa ja
              osaamista löytyy. Omistajilla on matalan kynnyksen mahdollisuus
              vaikuttaa yhtiön sijoituksiin esimerkiksi Financial Advisory
              Boardin kautta.
            </Prose>
          </span>
        </div>
      </Section>

      <Section>
        <Subtitle>Toimitusjohtajan tervehdys</Subtitle>
        <Title>Tervetuloa!</Title>
        <Prose large italic>
          Tervetuloa mukaan Evon Capitalin eeppiselle ja legendaariselle
          matkalle. Olen tämän nuorilla opportunisteilla täytetyn jahdin kippari
          sekä toimitusjohtaja Aatu Pulkkinen. Tehtävänäni on pitää huolta, että
          kyseessä on tuottoisa, eeppinen ja kaikin puolin loistava risteily.
          Yhtiömme keskittyy jatkuvasti nostamaan osakkeen arvoa, mutta
          tavoitteenamme on myös huolehtia kunnollisesta riskienhallinnasta.
          Vaikka yksittäiset positiomme voivat olla erittäin riskialttiita,
          pyrimme salkun laajaan hajautukseen ja markkinoiden tarkkaan
          seurantaan. Hienoa, että olet päätynyt jo sivuillemme, sillä
          toivottavasti voimme kohta kutsua sinuakin Omistajaksi ja juhlistaa
          tätä hienoa päätöstä sikarin sekä viskilasillisen äärellä. Antoisaa
          sijoittamista!
        </Prose>
        <Prose large italic>
          “To the fucking Moon!” 🚀🚀🚀
        </Prose>
        <p className="text-lg opacity-100 mt-5 max-w-prose text-right tracking-wider">
          Aatu Pulkkinen, toimitusjohtaja Evon Group
        </p>
      </Section>

      <Section>
        <Subtitle>Omistajaksi</Subtitle>
        <Title>Miksi juuri sinun pitäisi olla omistaja?</Title>
        <Prose large>
          Me tarjoamme sinulle eeppisen matkan täynnä mielenkiintoisia ihmisiä
          ja huikeita kokemuksia. Syitä olla mukana on monia: puhtaasti
          taloudellinen voitto, eeppisyys, verkostot, halu saada kokemusta
          projekteista tai oppia uutta sijoittamisesta. Mikään vaihtoehto ei ole
          sen enempää oikein tai väärin. Emme kuitenkaan halua mukaan yhtään
          ihmistä, joka ei ymmärrä mistä on kyse, jota tämä ei oikeasti
          kiinnosta tai joka ei kestä riskinottoa.
        </Prose>
        <Prose large>
          Toimintamallimme mahdollistaa useita tapoja olla omistaja. Osalle
          omistajuus voi olla pelkkä passiivinen sijoitus, joka jatkaa kasvuaan
          elämän taustalla. Toisille se voi olla samanhenkisten ihmisten
          yhteisö, jossa voi rennosti keskustella sijoittamisesta ja
          verkostoitua tulevaisuutta varten. Lopuille se voi olla kaikkea tätä
          ja lisäksi aktiivista osallistumista yrityksen sijoitustoimintaan,
          projekteihin, hankkeisiin tai pyörittämiseen. Me haluamme, että
          omistajamme pystyvät olemaan yrityksemme toiminnassa mukana juuri niin
          paljon kuin he itse haluavat ja kykenevät. He ovat ylpeitä
          omistuksestaan ja kokevat kuuluvansa mahtavaan yhteisöön, joka on
          täynnä voittajia ja tulevaisuudessa menestyviä ihmisiä.
        </Prose>
      </Section>

      <Section>
        <Subtitle>Tiimit</Subtitle>
        <Title>Financial Advisory Board - FAB</Title>
        <Prose large>
          FAB on matalan kynnyksen ryhmä yhtiön aktiivisille ja sijoittamisesta
          erityisen kiinnostuneille osakkaille. Ryhmän toiminta on hyvin
          aktiivista ja mukaan pääsee jokainen ryhmän jäsenyydestä kiinnostunut
          omistaja. Keskustelua käydään aktiivisesti niin WhatsAppissa kuin
          FAB:n tapaamisissakin. FAB:n keskeisin tehtävä on tuottaa
          sijoitusideoita yhtiöjohdolle ja käydä keskustelua tehdyistä
          päätöksistä. Ryhmää informoidaan yhtiön oleellisesta tapahtumista
          lähes reaaliajassa.
        </Prose>
        <Prose large>
          FAB pyrkii järjestämään mahdollisuuksien mukaan yritysvierailuja,
          saunailtoja ja muuta oheistoimintaa jäsenilleen. Mukaan voi lähteä
          oppimaan tai jakamaan omaa viisauttaan koko yhtiön käyttöön.
          Esimerkiksi yhtiöjohdon tuottamat analyysit jaetaan myös FAB:n
          jäsenten käyttöön ja jäsenille tarjotaan mahdollisuus osallistua
          analyysien tekoon.
        </Prose>
        <Prose large>
          Financial Advisory Boardin puheenjohtajana toimii strategiajohtaja
          Tomi Puurunen
        </Prose>
      </Section>

      <Section>
        <Subtitle>Mahdollisuudet</Subtitle>
        <Title>Oletko kiinnostunut tekemään hommia?</Title>
        <Prose large>
          Mikäli intoa löytyy, ole yhteydessä meihin, sillä tekemistä löytyy.
          Haemme jatkuvasti uusia innostuneita, ja mielellään myös edes hieman
          osaavia ihmisiä mukaan tekemään Evon Capitalista vielä suurempaa!
        </Prose>
        <Prose large>
          Tiimit
          <ul>
            <li>- Sijoitustiimi (FAB) </li>
            <li>- Tapahtumatiimi </li>
            <li>- Markkinointitiimi</li>
            <li>- Vero- ja paratiisisuunnittelutiimi</li>
          </ul>
        </Prose>
      </Section>

      <Section id="faq">
        <Subtitle>Usein kysyttyä</Subtitle>
        <Title>FAQ</Title>
        <Prose large>
          Yleisimpiä kysymyksiä ja niiden vastauksia. Etkö löytänyt vastausta
          kysymykseesi? Ota yhteyttä!
        </Prose>

        <FAQitem title="Mikä ihmeen Tree2u Oy?">
          Yhtiön virallinen rekisteröity nimi on Tree2u Oy (3094125-8) johtuen
          tilanteesta, jossa PRH hylkäsi Evon Oy nimen vedoten sen olevan
          genetiivimuoto maantieteellisestä alueesta. Yhtiö toimii nimellä Evon
          Group, joka on rekisteröity aputoiminimeksi ja yhtiön brändi on
          rakennettu nimen Evon Capital ympärille. Tulevaisuudessa Evon Capital
          Oy tullaan muuttamaan yhtiön viralliseksi nimeksi.
        </FAQitem>

        <FAQitem title="Ketä tässä kusetetaan?">
          Suora vastaus on, että ei yhtään ketään. Tai no… yhtiöjohtoa ehkä
          vähän, joka työskentelee ilman palkkiota 24/7 Sigma grindset
          -mentaliteetilla. Toimintamme on omistajillemme läpinäkyvää ja
          osallistavaa. Tämän lisäksi osakeanneissaan Evon Group pyrkii siihen,
          että merkinnän hintataso vastaa noin seuraavan vuoden matemaattista
          arvoa. Yrityksemme operatiivinen johto vastaa kaikkiin kysymyksiin ja
          huoliin, mikäli sellaisia ilmenee. Ota siis rohkeasti yhteyttä.
        </FAQitem>

        <FAQitem title="Kierrättekö te veroja?">
          Evon Group pitää huolen kaikista sille lakisääteisesti määrätyistä
          veroista ja maksuista. Yrityksen johto pitää huolen, että yrityksen
          toiminta on kaikissa sen vaiheissa laillista.
        </FAQitem>

        <FAQitem title="Onko yritysjohtonne pätevä?">
          Yritysjohto koostuu yliopisto-opiskelijoista ja työssäkäyvistä
          henkilöistä, joten tutkintoja tai sertifikaatteja heiltä ei
          välttämättä vielä löydy, mutta tuore näkemys, intohimo taloutta ja
          markkinoita kohtaan sekä suuri määrä työ-, yrittäjyys- ja
          järjestökokemusta kuitenkin takaavat jo tarpeeksi riittävän
          pätevyyden. Jokainen johtoon kuuluva henkilö opiskelee yliopistossa
          tai/ja omatoimisesti omaan rooliin liittyviä asioita, joten osaamista
          ja tietämystä karttuu koko ajan lisää.
        </FAQitem>

        <FAQitem title="Onko yritysjohtoon mahdollista päästä johonkin rooliin?">
          Kyllä. Mikäli sinulta löytyy halua, osaamista sekä ideoita, voit ottaa
          yhteyttä yrityksen operatiiviseen johtoon ja ilmoittaa halukkuutesi jo
          olemassa olevaan rooliin tai ehdottaa jotain uutta roolia. Yhtiöjohto
          arvioi onko uusille rooleille tai roolin vaihdoille tarvetta tai
          perusteita.
        </FAQitem>

        <FAQitem title="Mitä yritysjohdolle maksetaan?">
          Yhtiön johtohenkilöille ei makseta palkkaa eikä sellaista
          mahdollisuutta ole suunniteltu tulevaisuuteenkaan. Johtotehtävissä
          toimiminen perustuu lähtökohtaisesti omaan kiinnostukseen ja
          vapaaehtoisuuteen. Yhtiöjohtoa saatetaan kuitenkin tulevaisuudessa
          palkita yhtiökokouksen hyväksymin optio-oikeuksin tai hallituksen
          hyväksymällä oikeudella ostaa yhtiön hallussa olevia osakkeita
          suunnilleen yhtiön matemaattisen arvon mukaisesti.
        </FAQitem>

        <FAQitem title="Mitä riskejä sijoituksella on?">
          Riskit ovat pitkälti samat kuin missä tahansa arvopaperisijoituksessa.
          Pyrimme räväkkään ja keskivertoa riskialttiimpaan sijoitustoimintaan,
          joten tämä on hyvä ottaa huomioon päätöstä tehtäessä. Tämän lisäksi
          listaamattoman arvopaperin likviditeetti on luonnollisesti huomattavan
          heikko verrattuna julkisesti listattuihin tuotteisiin.
        </FAQitem>

        <FAQitem title="Miksi Evon Capital pyrkii keräämään jatkuvasti uutta pääomaa?">
          Vaikka pääoman määrä ei ole itseisarvo, niin sen kerääminen on
          kuitenkin meille oleellista, sillä se luo uusia mahdollisuuksia.
          Esimerkiksi lainan hakeminen ja sen mahdolliset ehdot paranevat.
          Yksittäisten transaktioiden suhteelliset kulut laskevat ja kiinteiden
          kulujen suhde pääomaan paranee. Myös tulevaisuuden sijoitusprojektien
          (esim. kiinteistösijoittaminen) kannalta pääoman kartuttaminen on
          kriittistä.
        </FAQitem>
      </Section>

      <Footer />
    </PageWrapper>
  );
}

function FAQitem({ title, startsOpen, children }) {
  const startState = startsOpen ? true : false;
  const [isOpen, setIsOpen] = useState(startState);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <div className="grid my-5">
      <div className="grid bg-gray-800 py-3 rounded shadow transition transform">
        <button
          onClick={handleClick}
          className="flex gap-1 justify-between items-center px-7 md:px-10 md:text-lg tracking-wider hover:bg-gray-700 py-3 transition"
        >
          <span className="flex-shrink" />
          {title}
          <span className="text-lg md:text-2xl font-bold">
            {isOpen ? " - " : " + "}
          </span>
        </button>
        {isOpen && (
          <div className="mx-7 md:mx-10 mb-4">
            <Prose large>{children}</Prose>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const [portfolio_data, transaction_data] = await fetchData();

  return {
    props: { transaction_data },
    revalidate: 86400, // Update every 24 hours
  };
}
