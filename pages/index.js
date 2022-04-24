import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";
import Button from "@components/button"

export default function Home() {
  return <Layout title="Evon Capital">
    <Hero />
    <About />
    <Welcome />
    <Values />
    <BecomeAnOwner />
    <Teams />
    <FAQ />
  </Layout>
}

function Hero() {
  return (
    <Section>
      <div className="text-center space-y-8 my-14">
        <Title><span className="text-4xl md:text-6xl">Ole opportunisti, älä pelkkä sijoittaja</span></Title>
        <div className="text-white text-opacity-80 text-lg">Evon Capital on tuottohakuisten piensijoittajien yritys, joka sijoittaa varojaan pitkällä aikahorisontilla. Yhtiö yhdistää niin osakkaidensa varat kuin osaamisen — ja hakee markkinoihin nähden tuottoa tällä synergialla.</div>
        <div className="text-white text-opacity-80 text-lg">Kiinnostaako lähteä mukaan? 👇</div>
        <div className="">
          <Button type="link" href="/waitlist">Liity odotuslistalle</Button>
        </div>
      </div>
    </Section>
  )
}

function About() {
  return (
    <Section>
      <Title>Tietoa yrityksestä</Title>
      <Prose large>Evon Capital Oy Ab on nuorista ja innokkaista sijoittajista koostuva yhteisö. Niin yhtiön johdosta kuin toimijoista löytyy monipuolista osaamista monelta eri osa-alueelta.
      Yhteisömme on alati kasvava ja kehittyvä kokonaisuus. Ja tämä kokonaisuus koostuu omistajista.
      </Prose>
    </Section>
  )
}

function Welcome() {
  return (
    <Section>
      <Title>Toimitusjohtajan tervehdys</Title>
      <Prose large>&quot;Tervetuloa mukaan Evon Capitalin eeppiselle ja legendaariselle matkalle. Olen tämän nuorilla opportunisteilla täytetyn jahdin kippari eli toimitusjohtaja Aatu Pulkkinen.</Prose>
      <Prose large>Tehtäväni on varmistaa, että laivamme selviää markkinoiden myrskyjen läpi kunnollisella riskienhallinalla sekä toimintamme ottaa kaiken niin osakkaistamme, kuin myös markkinoiden piilevistä mahdollisuuksista.</Prose>
      <Prose large>Evon on enemmän kuin omistajiensa yksinkertainen summa, me olemme yhteisö! Tavoitteemme on luoda sinulle omistajana arvoa niin sijoitustoiminnallamme kuin muulla tekemisellämme. Hyppää siis mukaan eeppisiin sijoituspositioihin ja nuorten  opportunistien täyttämiin osakasjuhliimme.&quot;</Prose>
      <div className="text-right"><Prose large>Aatu Pulkkinen, toimitusjohtaja</Prose></div>
    </Section>
  )
}

function Values() {
  return (
    <Section>
      <Title>Yhtiön arvot</Title>
      <Value title="Eeppisyys">Kyseessä ei ole vain pelkkä sijoitus. Rakennamme päivästä toiseen meistä legendaarista tarinaa siitä kuinka uskalsimme yrittää ja menestyä. - Ei se päämäärä vaan se matka</Value>
      <Value title="Tuloksellisuus">Kaikessa tekemisemme ytimessä on osakkeen arvon nostaminen. Pyrimme minimoimaan kulut ja verot. Panostamme kuitenkin jatkuvasti toiminnan kehittämiseen.</Value>
      <Value title="Yhteisöllisyys">Yhtiömme on sen omistajien summa. Jokainen henkilöstömme jäsen on osakas ja jokaiselle osakkaalle taataan mahdollisuudet osallistua operatiiviseen toimintaan.</Value>
    </Section>
  )
}

function Value({ title, children }) {
  return (
    <div className="my-5 bg-neutral-800 p-8 rounded">
      <div className="text-xl">{title}</div>
      <Prose large>
        {children}
      </Prose>
    </div>
  )
}

function BecomeAnOwner() {
  return (
    <Section>
      <Title>Omistajaksi</Title>
      <Prose large>Sijoitusyhtiömme tarkoitus on tarjota tuoton lisäksi huikeita kokemuksia omistajillemme. Emme ole välttämättä tuottavin, vaan myös eeppisin. 
Mukaan Evonin toimintaan pääsee helposti ja pienikin osakas pääsee tuomaan näkökulmiaan esille. Pyrimme antamaan alustan oppiaa ja hankkia kokemusta monelta sektorilta. Toisille se voi olla samanhenkisten ihmisten yhteisö, jossa voi rennosti keskustella sijoittamisesta ja verkostoitua tulevaisuutta varten. Lopuille se voi olla kaikkea tätä ja lisäksi aktiivista osallistumista yrityksen sijoitustoimintaan, projekteihin, hankkeisiin tai yrityksen pyörittämiseen.
</Prose>
      <Prose large>Tärkeää tietenkin on myös yhteisöllisyytemme: järjestämme osakkaille monenlaisia tapahtumia, joissa pääset tutustumaan laajaan omistajakuntaamme. Tapahtumatiimimme takaa säännöllisesti eeppisiä kokemuksia eri puolilla maata.
Sijoitustoiminnassa pyrimme katsomaan laatikon ulkopuolelta, esimerkiksi etsimällä listaamattomia vaihtoehtoja. Indeksit voivat olla lyömättömiä, mutta koetamme silti löytää vaihtoehtoja. Sijoituspuolemme ottaa riskienhallinnan huomioon, sillä vaikka olemme nuorekkaita, tällä puolella ei sekoilla.
</Prose>
      <Prose large></Prose>
    </Section>
  )
}

function Teams() {
  return (
    <Section>
      <Title>Tiimit</Title>
      <div className="text-xl mt-10">Markkinointitiimi</div>
      <Prose large>Markkinointitiimin vastuulla on vastata yhtiön markkinoinnista ja viestinnästä. Tehtävänä on myös ylläpitää yhtiön some-tilejä sekä ulkoista imagoa. Lisäksi markkinointitiimi suunnittelee ja luo oheistuotteita markkinointitarkoituksiin.</Prose>
      <div className="text-xl mt-10">FAB</div>
      <Prose large>FAB eli financial advisor board on yhtiön sijoitusideoita tuottava toimielin. Sen tarkoituksena on tuottaa merkittävää lisäarvoa yhtiölle, mutta myös sen jäsenille. Monet ovatkin FAB:n ansiosta kuitanneet merkittäviä sijoitustuottoja myös omaan salkkuunsa.</Prose>
      <div className="text-xl mt-10">Tapahtumatiimi</div>
      <Prose large>Tapahtumatiimin päävastuulla on Evon Capitalin tapahtumien ja vierailujen mahdollistaminen sekä järjestäminen. Tiimi järjestää monenlaisia tapahtumia, kuten kvartaalikatsauksia, yritysvierailuja sekä kokousten iltaohjelmia.</Prose>
    </Section>
  )
}

function FAQ() {
  return (
    <Section>
      <Title>Usein kysytyt kysymykset</Title>
      <FAQitem question="Kaverini toi minut tänne, mitä nyt?"></FAQitem>
      <FAQitem question="Mikä ihmeen Evon Capital?"></FAQitem>
      <FAQitem question="Mihin Evon Capital sijoittaa?">Pääasiassa pörssilistattuihin tuotteisiin, mutta myös litaamattomiin tuotteisiin.</FAQitem>
      <FAQitem question="Mistä yritysjohto koostuu?"></FAQitem>
      <FAQitem question="Miten yritysjohtoa palkitaan?">Yhtiöjohtoa palkitaan yhtiökokouksen päättämällä oikeudella ostaa vuosittain rajoitettu määrä yhtiön C-sarjan osakkeita alennettuun hintaan.</FAQitem>
      <FAQitem question="Pääseekö toimintaan mukaan?"></FAQitem>
      <FAQitem question="Mitä riskejä sijoitustoiminnassa on?"></FAQitem>
      <FAQitem question="Miksi keräätte jatkuvasti uutta pääomaa?"></FAQitem>
    </Section>
  )
}

function FAQitem({ question, children}) {
  return (
    <details className="mt-10">
      <summary className="text-xl">{question}</summary>
      <Prose large>{children}</Prose>
    </details>
  )
}