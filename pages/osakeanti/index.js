import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";
import Button from "@components/button";

export default function Osakeanti() {
  return (
    <Layout title="Osakeanti - Evon Capital">
      <Section>
        <Title>Evon Capital Oy Ab:n osakeanti 1.5. - 16.8.</Title>
        <Prose large>
          Evon Capital Oy Ab järjestää varsinaisen yhtiökokouksen päätöksen
          mukaisen suunnatun osakeannin yhtiön A-sarjan osakkeille 1.5. -
          16.8.2022. Merkinnät tapahtuvat sähköisesti tällä verkkosivulla.
        </Prose>
        <Prose large>
          Ennen merkintää on hyvin oleellista tutustua <b>huolellisesti</b>{" "}
          osakeannin materiaaleihin ja ehtoihin. Sijoitukseen sisältyy riskejä.
          Merkintä on sitova.
        </Prose>
        <div className="my-10 p-5 bg-neutral-800 rounded">
          <p className="text-lg text-white text-opacity-80">
            Tutustu annin ehtoihin ja materiaaleihin
          </p>
          <div className="flex flex-wrap gap-5 mt-3">
            <MaterialLink href="/informaatio_paketti.pdf">
              Markkinointimateriaali
            </MaterialLink>
            <MaterialLink href="/ehdot.pdf">Osakeannin ehdot</MaterialLink>
            <MaterialLink href="/tase.pdf">Yhtiön tase</MaterialLink>
            <MaterialLink href="/paatos.pdf">
              Yhtiökokouksen päätös
            </MaterialLink>
          </div>
        </div>
        <div className="mb-10">
          <Prose>Ohjeet onnistuneeseen merkintään</Prose>
          <ul className="list-disc list-inside text-white text-opacity-80 mt-2">
            <li>
              Tutustu ensin <b>huolellisesti</b> annin materiaaleihin ja
              ehtoihin
            </li>
            <li>Täytä kaikki tietosi erityisellä huolella!</li>
            <li>Lue tarkasti mitä kysytään!</li>
            <li>
              Merkintä on sitova. Sitä voi jättämisen jälkeen enää{" "}
              <b>korottaa!</b>
            </li>
            <li>
              Saat merkinnästä vahvistuksen sähköpostiin. Ennen vahvistamista
              merkintä ei etene.
            </li>
            <li>
              <b>Ymmärrä sijoituksen riskit ennen sijoituksen tekemistä!</b>
            </li>
          </ul>
        </div>
        <Button type="link" href="/osakeanti/merkinta">
          Siirry merkitsemään
        </Button>
      </Section>
    </Layout>
  );
}

import Link from "next/link";
function MaterialLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <a
        className="text-white text-opacity-80 hover:text-opacity-100 transition underline"
        target="_blank"
      >
        {children}
      </a>
    </Link>
  );
}
