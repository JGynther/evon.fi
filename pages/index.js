import 'tailwindcss/tailwind.css'

import { useState } from "react"

import Head from 'next/head'
import Link from 'next/link'

import Arrow from "../public/arrow.svg"

import PageWrapper from "@components/pageWrapper"
import Section from "@components/section"
import Title from "@components/title"
import Subtitle from "@components/subtitle"
import Prose from "@components/prose"

import Navigation from "@components/nav"
import Footer from "@components/footer"


export default function Home() {
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
            Ole omistaja, älä sijoittaja.
          </h1>


          <h2 className="my-3 md:text-lg opacity-80">
            Evon Capital on erittäin tuottohakuisten piensijoittajien yhteisyritys, joka sijoittaa varojaan pitkällä aikahorisontilla.
            Yhtiö yhdistää niin osakkaidensa varat kuin osaamisen — ja hakee markkinoihin nähden ylituottoa tällä synergialla.
          </h2>

          <h2 className="mt-8 md:text-lg opacity-80">
              Kiinnostaako lähteä mukaan? 👇
          </h2>

          <Link href="/osakeanti" passHref>
            <button className="
              bg-indigo-500 py-3 px-5 my-2 rounded tracking-wider text-lg my-8 font-normal
              transition hover:bg-indigo-700 focus:ring group text-center
              "> 
              <span className="flex items-center">
                Osallistu osakeantiin
                <Arrow className="transition transform group-hover:translate-x-1"/>
              </span>
            </button>
          </Link>

          <div className="text-white text-opacity-60 text-center my-2">
            <p>Lue lisää</p>
            <span className="flex justify-center animate-bounce my-3">
              <Arrow className="transform rotate-90 scale-125 fill-current" />
            </span>
          </div>

        </div>
      </main>

      <Section>
          <Subtitle>
              Tietoa yrityksestä
          </Subtitle>
          <Title>
              Evon Capital
          </Title>
          <Prose large>
            Evon Capital on nuorten yrittäjien ja omistajien muodostama sijoitusyhtiö, joka tähtää 
            räväkkään sijoittamiseen, trendikkääseen näkyvyyteen ja ennen kaikkea verojen minimointiin. 
            Yhtiön osaava johto sekä joustava strategia ovat reseptimme ylituottoon vaihtuvissakin 
            markkinatilanteissa. 
          </Prose>
          <Prose large>
            Yhtiömme pyrkii myös perinteisen markkina-analyysin sekä sijoittamisen ohella tuottamaan omistajilleen lisäarvoa erilaisilla projekteilla, 
            joihin lukeutuu tämänhetkinen koneoppimis-projekti. 
            Sen tarkoituksena on pystyä lähitulevaisuudessa analysoimaan markkinoita tekoälyn avulla ja 
            reagoida tämän analyysin perusteella nopeasti osakkeiden markkina-arvojen heilahteluihin. 
            Tekoälyn on tarkoitus arvioida uutisten, Twitterin ja esimerkiksi onnettomuuksien vaikutuksia osakekurssiin nopeammin kuin ihminen pystyy tiedon käsittelemään.
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
          <Link href="/yritys" passHref>
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
          <Subtitle>
            Mille pohjalle yhtiö on rakennettu?
          </Subtitle>
          <Title>
              Yhtiön arvot
          </Title>

          <div className="grid gap-10 justify-center">

            <span className="bg-gray-800 px-7 md:px-10 py-7 rounded shadow">
              <h3 className="text-xl font-bold tracking-wide">
                Eeppisyys
              </h3>
              <Prose>
                Kyseessä ei ole vain pelkkä yksinkertainen sijoitus tai joku helvetin Sirkka-tädin kahvila. 
                Meidän firmamme on kehittyvä legenda, jonka eeppisiä jakeita kirjoitetaan päivä päivältä. 
                Tavoitteemme on luoda sijoittajien yhteisö, 
                joka tunnetaan kansallisella tasolla sen räväkkyydestä ja hyvästä meiningistä.
                Emme pelkää tehdä, yrittää tai kertoa keitä me olemme. 
                Kävelemme ylpeästi kabinetista toiseen sikari suussa ja apina -logo paidassa.
              </Prose>
            </span>

            <span className="bg-gray-800 px-7 md:px-10 py-7 rounded shadow">
              <h3 className="text-xl font-bold tracking-wide">
                Tuloksellisuus
              </h3>
              <Prose>
                Kaiken keskiössä on juuri sinun osakkeiden arvon kasvattaminen. 
                Sijoitusten pitää tuottaa, taseen kasvaa ja osaamisen karttua. 
                Yritysjohto on sitoutunut minimoimaan aivan kaikki kulut kampaviinereistä omaan palkkaansa, 
                jota ei muuten makseta, jotta tulokset ovat mahdollisimman voitokkaat omistajilleen. 
                Kaikki hankkeet ja projektit, joihin yritys lähtee mukaan tai toteuttamaan, 
                on taustalla voitokkaan tuloksen hankkiminen.
              </Prose>
            </span>

            <span className="bg-gray-800 px-7 md:px-10 py-7 rounded shadow">
              <h3 className="text-xl font-bold tracking-wide">
                Omistajuus
              </h3>
              <Prose>
                Toimintamme tärkein arvo on omistajuus. 
                Jokainen osakkeita ostava henkilö saa myös automaattisesti tittelin Omistaja. 
                Tämä tarkoittaa useita erilaisia eksklusiivisia etuja ja työkaluja, 
                jotka saat käyttöösi, ja joita ei muiden yritysten osakkeita ostamalla saa. 
                Jokainen Omistaja on lähtökohtaisesti myös osakas ja jokaisella Omistajalla on mahdollisuus osallistua yrityksen operatiiviseen toimintaan, 
                mikäli intoa ja osaamista löytyy. 
                Omistajilla on mahdollisuus vaikuttaa yhtiön sijoituksiin esimerkiksi Financial Advisor Boardin kautta.
              </Prose>
            </span>

          </div>
      </Section>

      <Section>
          <Subtitle>
            Toimitusjohtajan tervehdys
          </Subtitle>
          <Title>
            Tervetuloa!
          </Title>
          <Prose large italic>
            Tervetuloa mukaan Evon Capitalin eeppiselle (legendaariselle) matkalle. 
            Olen tämän jahdin kippari sekä toimitusjohtaja Aatu Pulkkinen. 
            Tehtävänäni on pitää huolta, että kyseessä on tuottoisa, eeppinen (legendaarinen) ja kaikin puolin loistava risteily.
            Yhtiömme keskittyy jatkuvasti nostamaan osakkeen arvoa, mutta tavoitteenamme on myös huolehtia kunnollisesta riskienhallinnasta. 
            Vaikka yksittäiset positiomme voivat olla jopa erittäin riskialttiita, pyrimme salkun laajaan hajautukseen ja markkinoiden tarkkaan seurantaan. 
            Hienoa, että olet päätynyt jo sivuillemme, mutta toivottavasti voimme kohta kutsua sinuakin Omistajaksi ja juhlistaa tätä sikarien sekä viskilasillisen äärellä. 
            Antoisaa sijoittamista!
          </Prose>
          <Prose large italic>“To the fucking Moon!” 🚀🚀🚀</Prose>
          <p className="text-lg opacity-100 mt-5 max-w-prose text-right tracking-wider">Aatu Pulkkinen, toimitusjohtaja Evon Group</p>
      </Section>

      <Section>
        <Subtitle>
          Omistajaksi
        </Subtitle>
        <Title>
          Miksi juuri sinun pitäisi olla omistaja?
        </Title>
        <Prose large>
          Koska haluat joku päivä olla rikas. 
          Me kaikki haluamme olla. 
          Se on meidän toimintamme päämäärä. 
          Evon Capitalin Omistajuus on kaikille niille henkilöille, 
          jotka tavoittelevat elämässään taloudellista vapautta ja miljoonia sen rajapyykin ylittämisen päälle.
        </Prose>
        <Prose large>
          Toimintamallimme mahdollistaa useita tapoja olla Omistaja. 
          Osalle Omistajuus voi olla pelkkä passiivinen sijoitus, 
          joka jatkaa kasvuaan kyseisen henkilön elämän taustalla. 
          Toisille se voi olla hyvän henkinen yhteisö, 
          jossa voi keskustella sijoittamisesta ja löytää samanhenkisiä tyyppejä samalla, 
          kun sijoitukset jylläävät taustalla. 
          Lopuille se voi olla kaikkea tätä ja aktiivista osallistumista yrityksen sijoitustoimintaan, 
          projekteihin, hankkeisiin tai pyörittämiseen. 
          Me haluamme, että Omistajamme pystyvät olemaan yrityksemme toiminnassa mukana juuri niin paljon kuin he itse haluavat ja kykenevät. 
          He ovat ylpeitä omistuksestaan ja kokevat kuuluvansa mahtavaan yhteisöön, 
          joka on täynnä voittajia ja elämässään menestyviä ihmisiä.
        </Prose>
      </Section>

      <Section id="faq">
        <Subtitle>Usein kysyttyä</Subtitle>
        <Title>FAQ</Title>
        <Prose large>Yleisimpiä kysymyksiä ja niiden vastauksia. Etkö löytänyt vastausta kysymykseesi? Ota yhteyttä!</Prose>

        <FAQitem title="Mikä ihmeen Tree2u Oy?" startsOpen>
          Yhtiön virallinen rekisteröity nimi on Tree2u Oy (3094125-8) johtuen tilanteesta, 
          jossa PRH hylkäsi Evon Oy nimen vedoten sen olevan genetiivimuoto maantieteellisestä alueesta. 
          Yhtiö toimii nimellä Evon Group, 
          joka on rekisteröity aputoiminimeksi ja yhtiön brändi on rakennettu nimen Evon Capital ympärille. 
          Tulevaisuudessa Evon Capital Oy tullaan muuttamaan yhtiön viralliseksi nimeksi.
        </FAQitem>

        <FAQitem title="Ketä tässä kusetetaan?">
          Suora vastaus on, että ei yhtään ketään. Toimintamme on omistajillemme läpinäkyvää ja osallistavaa. Tämän lisäksi osakeanneissaan Evon Group pyrkii siihen, että merkinnän hintataso vastaa noin seuraavan vuoden matemaattista arvoa. Yrityksemme operatiivinen johto vastaa kaikkiin kysymyksiin ja huoliin, mikäli sellaisia ilmenee. Ota siis vain rohkeasti yhteyttä.
        </FAQitem>

        <FAQitem title="Kierrättekö te veroja?">
          Evon Group pitää huolen kaikista sille lakisääteisesti määrätyistä veroista ja maksuista. Yrityksen johto pitää huolen, että yrityksen toiminta on kaikissa sen vaiheissa laillista.
        </FAQitem>

        <FAQitem title="Onko yritysjohtonne pätevä?">
          Yritysjohtomme koostuu yliopistoissa ja työssäkäyvistä henkilöistä, joten tutkintoja tai sertifikaatteja heiltä ei vielä löydy, mutta tuore näkemys, intohimo taloutta ja markkinoita kohtaan sekä suuri määrä työ-, yrittäjyys- ja järjestökokemusta kuitenkin takaavat jo tarpeeksi hyvin pätevyytemme. Jokainen johtoon kuuluva henkilö opiskelee yliopistoissa tai/ja omatoimisesti omaan rooliin liittyviä asioita, jotta osaamista ja tietämystä karttuu lisää. 
        </FAQitem>

        <FAQitem title="Onko yritysjohtoon mahdollista päästä johonkin rooliin?">
          Kyllä. Mikäli sinulta löytyy halua, osaamista sekä ideoita, voit ottaa yhteyttä yrityksen operatiiviseen johtoon ja ilmoittaa halukkuutesi jo olemassa olevaan rooliin tai ehdottaa jotain uutta roolia. Yritysjohto sitten arvioi onko uusille rooleille tai roolin vaihdoille tarvetta tai perusteita.
        </FAQitem>

        <FAQitem title="Mitä yritysjohdolle maksetaan?">Yhtiön johtohenkilöille ei makseta palkkaa eikä sellaista mahdollisuutta ole suunniteltu tulevaisuuteenkaan. Johtotehtävissä toimiminen perustuu lähtökohtaisesti omaan kiinnostukseen ja vapaaehtoisuuteen. Yhtiöjohtoa saatetaan kuitenkin tulevaisuudessa palkita yhtiökokouksen hyväksymin optio-oikeuksin tai hallituksen hyväksymällä oikeudella ostaa yhtiön hallussa olevia osakkeita suunnilleen yhtiön matemaattisen arvon mukaisesti.</FAQitem>
        <FAQitem title="Mitä riskejä sijoituksella on?">Riskit ovat pitkälti samat kuin missä hyvänsä arvopaperisijoituksessa. Pyrimme räväkkään ja keskivertoa riskialttiimpaan sijoitustoimintaan, joten tämä on hyvä ottaa huomioon päätöstäsi tehdessä. </FAQitem>
        <FAQitem title="Miksi Evon Capital pyrkii keräämään jatkuvasti uutta pääomaa?">Vaikka pääoman määrä ei ole itseisarvo, niin sen kerääminen on kuitenkin meille oleellista, sillä se luo uusia mahdollisuuksia. Esimerkiksi lainan hakeminen ja sen mahdolliset ehdot paranevat. Yksittäisten transaktioiden kulut laskevat ja kiinteiden kulujen suhde pääomaan paranee. Myös kiinteistönvälitys -projektin kannalta pääoman kartuttaminen on kriittistä.</FAQitem>

      </Section>

      <Section>
        <div className="py-10 px-5 bg-gray-800 rounded shadow grid justify-center text-center">

          <Title noMargin>
            Oletko valmis sijoittamaan?
          </Title>

          <Link href="/osakeanti" passHref>
            <button className="
              bg-indigo-500 py-3 px-5 rounded tracking-wider text-lg mt-10 font-normal
              transition hover:bg-indigo-700 focus:ring group text-center
              "> 
              <span className="flex items-center justify-center">
                Osallistu osakeantiin
                <Arrow className="transition transform group-hover:translate-x-1"/>
              </span>
            </button>
          </Link>

        </div>
      </Section>

      <Footer />

    </PageWrapper>
  )
}

function FAQitem({ title, startsOpen, children }) {
  const startState = startsOpen ? true : false;
  const [isOpen, setIsOpen] = useState(startState);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <div className="grid my-5">
      <div className="grid bg-gray-800 py-3 rounded shadow transition transform">
          <button onClick={handleClick} className="flex gap-1 justify-between items-center px-7 md:px-10 md:text-lg tracking-wider hover:bg-gray-700 py-3 transition">
            <span className="flex-shrink"/>
            {title}
            <span className="text-lg md:text-2xl font-bold">{isOpen ? " - " : " + "}</span>
          </button>
        {isOpen &&
          <div className="mx-7 md:mx-10 mb-4">
            <Prose large>
              {children}
            </Prose>
          </div>
        }
      </div>
    </div>
  )
}