import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Subtitle, Prose } from "@components/text";

export default function Contact() {
  return (
    <Layout title="Yhteystiedot - Evon Capital">
      <Section>
        <Title>Evon Capital Oy Ab</Title>
        <Prose large>Y-tunnus: 3094125-8</Prose>
        <Prose large>Rauhankatu 2F 69, 13100 Hämeenlinna</Prose>
        <Prose large>
          <a href="mailto:listaamattomat@evon.fi">listaamattomat@evon.fi</a>
        </Prose>
        <Prose large>
          <i>&quot;Ole opportunisti.&quot;</i>
        </Prose>
      </Section>
    </Layout>
  );
}
