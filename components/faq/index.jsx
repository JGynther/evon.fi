import Section from "@components/layout/section";
import { Title } from "@components/text";
import FAQitem from "./faqitem";

export default function FAQ() {
  return (
    <Section>
      <Title>Usein kysytyt kysymykset</Title>
      <FAQitem question="Kaverini toi minut tänne, mitä nyt?"></FAQitem>
      <FAQitem question="Mikä ihmeen Evon Capital?"></FAQitem>
      <FAQitem question="Mihin Evon Capital sijoittaa?">
        Pääasiassa pörssilistattuihin tuotteisiin, mutta myös litaamattomiin
        tuotteisiin.
      </FAQitem>
      <FAQitem question="Mistä yritysjohto koostuu?"></FAQitem>
      <FAQitem question="Miten yritysjohtoa palkitaan?">
        Yhtiöjohtoa palkitaan yhtiökokouksen päättämällä oikeudella ostaa
        vuosittain rajoitettu määrä yhtiön C-sarjan osakkeita alennettuun
        hintaan.
      </FAQitem>
      <FAQitem question="Pääseekö toimintaan mukaan?"></FAQitem>
      <FAQitem question="Mitä riskejä sijoitustoiminnassa on?"></FAQitem>
      <FAQitem question="Miksi keräätte jatkuvasti uutta pääomaa?"></FAQitem>
    </Section>
  );
}
