import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";

export default function About() {
	return (
		<Section>
			<Title>Tietoa yrityksestä</Title>
			<Prose large>
				Evon Capital Oy Ab on suomalainen listaamattomiin osakkeisiin keskittyvä
				sijoitusyhtiö. Yhtiö on perustettu 2019 ja meitä osakkaita on jo yli
				160. Toimimme yhteistyössä Ostaja-Investin kanssa ja olemme Suomen
				markkinoilla erittäin vahvassa asemassa hankkimaan kustannustehokkaasti
				listaamattomia osakkeita ostammeosakkeita.fi –sivuston kautta.
			</Prose>
		</Section>
	);
}
