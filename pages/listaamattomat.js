import Layout from "@components/layout";
import Section from "@components/layout/section";
import Link from "next/link";

export default function Listaamattomat() {
  return (
    <Layout title="Listaamattomat - Evon Capital">
      <Section>
        <article className="prose prose-lg prose-invert">
          <h1>Ostamme listaamattomia osakkeita!</h1>
          <p>
            Osana yhtiömme stategiaa ostamme listaamattomien yhtiöiden
            osakkeita. Mikäli sinulla tai hoitamallasi kuolipesällä on
            listaamattomasta yhtiöstä omistusta, otathan yhteyttä osoitteeseen{" "}
            <Link href="mailto:listaamattomat@evon.fi" passHref>
              listaamattomat@evon.fi
            </Link>
            !
          </p>
          <p>
            Lähtökohtaisesti pyrimme antamaan tarjouksen kaikista
            listaamattomista osakkeista, joita meille tarjotaan. Kaupat
            kanssamme hoituvat helposti. Teemme tarvittavat asiakirjat,
            ilmoitamme ja maksamme varainsiirtoveron sekä maksamme itse
            kauppasumman nopeasti.
          </p>
          <p>
            Lista osakkeista, joita etusijassa olisimme kiinnostuneita ostamaan:
            <ul>
              <li>G.W. Sohlberg</li>
              <li>Nokian Panimo</li>
              <li>Finlandia Group</li>
              <li>Finda</li>
              <li>KPY</li>
              <li>St1 Nordic</li>
              <li>Coinmotion</li>
              <li>Sato</li>
              <li>Ingman Group</li>
              <li>Pohjanmaan Arvo Sijoitusosuuskunta</li>
              <li>Cityvarasto</li>
              <li>Yleisesti kaikki sähköosakkeet</li>
              <li>Yleisesti kaikki puhelinosakkeet</li>
            </ul>
          </p>
          <p>
            Vaikka kyseessä olisi vähemmän tunnettu tai vain pienen piirin
            omistama yhtiö, keskustelemme kanssanne mieluusti.
          </p>
          <p>
            Ota yhteyttä{" "}
            <Link href="mailto:listaamattomat@evon.fi" passHref>
              listaamattomat@evon.fi
            </Link>
            !
          </p>
        </article>
      </Section>
    </Layout>
  );
}
