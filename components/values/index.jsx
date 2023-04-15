import Section from "@components/layout/section";
import { Title } from "@components/text";
import Value from "@components/values/value";

export default function Values() {
	return (
		<Section>
			<Title>Yhtiön arvot</Title>
			<Value title="Eeppisyys">
				Kyseessä ei ole vain pelkkä sijoitus. Pyrimme rakentamaan päivästä
				toiseen legendaarista tarinaa siitä kuinka uskalsimme yrittää ja
				menestyä.
				<br />
				&quot;Ei se päämäärä vaan se matka&quot;
			</Value>
			<Value title="Tuloksellisuus">
				Kaikessa tekemisen ytimessä on osakkeen arvon nostaminen. Minimoimme
				kulut ja verot. Panostamme kuitenkin jatkuvasti toiminnan kehittämiseen.
			</Value>
			<Value title="Yhteisöllisyys">
				Yhtiömme on sen omistajien summa. Jokainen henkilöstömme jäsen on osakas
				ja jokaiselle osakkaalle taataan mahdollisuudet osallistua
				operatiiviseen toimintaan.
			</Value>
		</Section>
	);
}
