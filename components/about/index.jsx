import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";

export default function About() {
  return (
    <Section>
      <Title>Tietoa yrityksestä</Title>
      <Prose large>
        Evon Capital Oy Ab on nuorista ja innokkaista sijoittajista koostuva
        yhteisö. Niin yhtiön johdosta kuin toimijoista löytyy monipuolista
        osaamista monelta eri osa-alueelta. Yhteisömme on alati kasvava ja
        kehittyvä kokonaisuus. Ja tämä kokonaisuus koostuu omistajista.
      </Prose>
    </Section>
  );
}
