import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Subtitle, Prose } from "@components/text";

export default function Contact() {
  return (
    <Layout title="Yhteystiedot - Evon Capital">
      <Section>
        <Subtitle>Ota yhteyttä!</Subtitle>
        <Title>Yhteystiedot</Title>
        <div className="flex flex-wrap justify-between items-center">
          <div className="bg-gray-800 rounded shadow px-10 pt-5 pb-8">
            <Subtitle>Yhtiön tiedot</Subtitle>
            <Prose large>Evon Group (Tree2u Oy)</Prose>
            <Prose large>Y-tunnus: 3094125-8</Prose>
            <Prose large>Rauhankatu 2F 69, 13100 Hämeenlinna</Prose>
          </div>
          <div className="rounded shadow px-10 py-5">
            <Prose large>
              <b>Yleiset tiedustelut</b>
              <br />
              <a
                href="mailto:info@evon.fi"
                className="text-indigo-500 hover:text-indigo-700 transition"
              >
                info@evon.fi
              </a>
            </Prose>
            <Prose large>
              <b>Aatu Pulkkinen</b>
              <br />
              Toimitusjohtaja <br />
              <a
                href="mailto:aatu.pulkkinen@evon.fi"
                className="text-indigo-500 hover:text-indigo-700 transition"
              >
                aatu.pulkkinen@evon.fi
              </a>
            </Prose>
            <Prose large>
              <b>Joona Gynther</b>
              <br />
              Hallituksen puheenjohtaja
              <br />
              <a
                href="mailto:joona.gynther@evon.fi"
                className="text-indigo-500 hover:text-indigo-700 transition"
              >
                joona.gynther@evon.fi
              </a>
            </Prose>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
