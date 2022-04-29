import Section from "@components/layout/section";
import { Title } from "@components/text";
import Value from "@components/values/value";

export default function Values() {
  return (
    <Section>
      <Title>Yhtiön arvot</Title>
      <Value title="Eeppisyys">
        Kyseessä ei ole vain pelkkä sijoitus. Rakennamme päivästä toiseen meistä
        legendaarista tarinaa siitä kuinka uskalsimme yrittää ja menestyä. - Ei
        se päämäärä vaan se matka
      </Value>
      <Value title="Tuloksellisuus">
        Kaikessa tekemisemme ytimessä on osakkeen arvon nostaminen. Pyrimme
        minimoimaan kulut ja verot. Panostamme kuitenkin jatkuvasti toiminnan
        kehittämiseen.
      </Value>
      <Value title="Yhteisöllisyys">
        Yhtiömme on sen omistajien summa. Jokainen henkilöstömme jäsen on osakas
        ja jokaiselle osakkaalle taataan mahdollisuudet osallistua
        operatiiviseen toimintaan.
      </Value>
    </Section>
  );
}
