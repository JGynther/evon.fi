import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";

export default function Welcome() {
  return (
    <Section>
      <Title>Toimitusjohtajan tervehdys</Title>
      <Prose large>
        &quot;Tervetuloa mukaan Evon Capitalin eeppiselle ja legendaariselle
        matkalle. Olen tämän nuorilla opportunisteilla täytetyn jahdin kippari
        eli toimitusjohtaja Aatu Pulkkinen.
      </Prose>
      <Prose large>
        Tehtäväni on varmistaa, että laivamme selviää markkinoiden myrskyjen
        läpi kunnollisella riskienhallinalla sekä toimintamme ottaa kaiken niin
        osakkaistamme, kuin myös markkinoiden piilevistä mahdollisuuksista.
      </Prose>
      <Prose large>
        Evon on enemmän kuin omistajiensa yksinkertainen summa, me olemme
        yhteisö! Tavoitteemme on luoda sinulle omistajana arvoa niin
        sijoitustoiminnallamme kuin muulla tekemisellämme. Hyppää siis mukaan
        eeppisiin sijoituspositioihin ja nuorten opportunistien täyttämiin
        osakasjuhliimme.&quot;
      </Prose>
      <div className="text-right">
        <Prose large>Aatu Pulkkinen, toimitusjohtaja</Prose>
      </div>
    </Section>
  );
}
