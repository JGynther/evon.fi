import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Subtitle, Prose } from "@components/text";

export default function Tietosuoja() {
  return (
    <Layout title="Tietosuoja - Evon Capital">
      <Section>
        <Title>Rekisteri- ja tietosuojaseloste Evon Group</Title>
        <Prose large whitespacepreline>
          Tämä on Tree2u Oy:n ja Evon Groupin EU:n yleisen tietosuoja-asetuksen
          (GDPR) mukainen rekisteri- ja tietosuojaseloste. Rekisteri- ja
          tietosuojaselosteessa kuvatut ehdot ja toiminta tavat pätevät
          yleisesti kaikessa Tree2u Oy:n liiketoiminnassa ja www.evon.fi
          verkkosivuilla. Laadittu 8.8.2021. Viimeisin muutos 8.8.2021.
        </Prose>

        <Subtitle>1. Rekisterinpitäjä </Subtitle>
        <Prose large whitespacepreline>
          {`Tree2u Oy 
          Osoite: Rauhankatu 2, F 69, 13100, Hämeenlinna, Suomi
          Y-tunnus 3094125-8.
          LEI-tunnus 984500509DB365878B43
          `}
        </Prose>

        <Subtitle>2. Rekisteristä vastaava yhteyshenkilö</Subtitle>
        <Prose large whitespacepreline>
          {`Kaarlo Tiili 
          Puh. +358 44 0501009
          Sähköposti: kaarlotiili@gmail.com`}
        </Prose>

        <Subtitle>3. Rekisterin nimi</Subtitle>
        <Prose large whitespacepreline>
          Tree2u Oy:n asiakas-, omistaja-, työntekijä-, luottamushenkilö-,
          markkinointi- ja verkkopalvelun käyttäjärekisteri.
        </Prose>

        <Subtitle>
          4. Oikeusperuste ja henkilötietojen käsittelyn tarkoitus
        </Subtitle>
        <Prose large whitespacepreline>
          {`EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen käsittelylle on 
          - henkilön suostumus (dokumentoitu,vapaaehtoinen, yksilöity, tietoinen ja yksiselitteinen) 
          - sopimus,jossa rekisteröity on osapuolena 
          - laki (Laki rahanpesun ja terrorismin rahoittamisen estämisestä) 
          - rekisterinpitäjän oikeutettu etu (esim. asiakassuhde ennen sopimusta, työsuhde, jäsenyys).
          
          Henkilötietojen käsittelyn tarkoitus on yhteydenpito asiakkaisiin, asiakassuhteen ylläpito, markkinointi, omistajien tunnistaminen, palvelun turvallinen käyttö ja rahanpesun estäminen sekä muut yhtiön tarpeelliseksi katsoma toiminta. 
          
          Tietoja voidaan lain sallimissa rajoissa käyttää automatisoituun päätöksentekoon ja profilointiin.`}
        </Prose>

        <Subtitle>5. Rekisterin tietosisältö</Subtitle>
        <Prose large whitespacepreline>
          Rekisteriin tallennettavia tietoja voivat olla esimerkiksi: henkilön
          nimi, asema, yritys/organisaatio, yhteystiedot (puhelinnumero,
          sähköpostiosoite, osoite), wwwsivustojen osoitteet, verkkoyhteyden
          IP-osoite, tunnukset/profiilit sosiaalisen median palveluissa, tiedot
          tilatuista palveluista ja niiden muutoksista, laskutustiedot, muut
          asiakassuhteeseen, omistajuuteen ja tilattuihin palveluihin liittyvät
          tiedot. Tämän lisäksi yhtiö voi liittää rekisteriin henkilötietoja
          esim. henkilötunnuksen. Yhtiö säilyttää tietoja tarpeelliseksi
          katsomansa ajan. Verkkosivuston vierailijoiden IP-osoitteita ja
          palvelun toiminnoille välttämättömiä evästeitä käsitellään oikeutetun
          edun perusteella mm. tietoturvasta huolehtimiseksi ja sivuston
          vierailijoiden tilastotietojen keruuta varten niissä tapauksissa, kun
          niiden voidaan katsoa olevan henkilötietoja. Kolmansien osapuolten
          evästeille pyydetään tarvittaessa suostumus erikseen, jos ne eivät
          kiinteästi koske yhtiömme toimintaa.
        </Prose>

        <Subtitle>6. Säännönmukaiset tietolähteet</Subtitle>
        <Prose large whitespacepreline>
          Rekisteriin tallennettavat tiedot saadaan asiakkaalta mm.
          www-lomakkeilla lähetetyistä viesteistä, sähköpostitse, puhelimitse,
          sosiaalisen median palvelujen kautta, sopimuksista,
          asiakastapaamisista ja muista tilanteista, joissa asiakas luovuttaa
          tietojaan. Yritysten ja muiden organisaatioiden yhteyshenkilöiden
          tietoja voidaan kerätä myös julkisista lähteistä kuten verkkosivuilta,
          hakemistopalveluista ja muilta yrityksiltä.
        </Prose>

        <Subtitle>
          7. Tietojen säännönmukaiset luovutukset ja tietojen siirto EU:n tai
          ETA:n ulkopuolelle
        </Subtitle>
        <Prose large whitespacepreline>
          Tietoja ei luovuteta säännönmukaisesti muille tahoille. Tietoja
          voidaan julkaista siltä osin kuin se on yhtiön tarpeiden mukaista.
          Tietoja voidaan siirtää rekisterinpitäjän toimesta lain sallimissa
          rajoissa myös EU:n tai ETA:n ulkopuolelle tai Yhdysvaltoihin ilman
          rekisteröityjen nimenomaista suostumusta. Käyttäessäsi palveluitamme
          luotavat tietoja esimerkiksi maksujen välittäjille (esim. pankit,
          rahoituslaitokset ja Stripe)
        </Prose>

        <Subtitle>8. Rekisterin suojauksen periaatteet</Subtitle>
        <Prose large whitespacepreline>
          Rekisterin käsittelyssä noudatetaan huolellisuutta ja
          tietojärjestelmien avulla käsiteltävät tiedot suojataan
          asianmukaisesti. Kun rekisteritietoja säilytetään
          Internet-palvelimilla, niiden laitteiston fyysisestä ja digitaalisesta
          tietoturvasta huolehditaan asiaankuuluvasti. Rekisterinpitäjä
          huolehtii siitä, että tallennettuja tietoja sekä palvelimien
          käyttöoikeuksia ja muita henkilötietojen turvallisuuden kannalta
          kriittisiä tietoja käsitellään luottamuksellisesti ja vain niiden
          työntekijöiden ja yhteistyökumppanien toimesta, joiden työnkuvaan se
          kuuluu.
        </Prose>

        <Subtitle>
          9. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista
        </Subtitle>
        <Prose large whitespacepreline>
          Jokaisella rekisterissä olevalla henkilöllä on oikeus tarkistaa
          rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen
          tiedon korjaamista tai puutteellisen tiedon täydentämistä. 3 Mikäli
          henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin
          oikaisua, pyyntö tulee lähettää kirjallisesti rekisterinpitäjälle.
          Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan
          henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n
          tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden
          kuluessa).
        </Prose>

        <Subtitle>
          10. Muut henkilötietojen käsittelyyn liittyvät oikeudet
        </Subtitle>
        <Prose large whitespacepreline>
          Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien
          henkilötietojen poistamiseen rekisteristä (&quot;oikeus tulla
          unohdetuksi&quot;). Niin ikään rekisteröidyillä on muut EU:n yleisen
          tietosuoja-asetuksen mukaiset oikeudet kuten henkilötietojen
          käsittelyn rajoittaminen tietyissä tilanteissa. Pyynnöt tulee lähettää
          kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää
          tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä.
          Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa
          säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).
        </Prose>
      </Section>
    </Layout>
  );
}
