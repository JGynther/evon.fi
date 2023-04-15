import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";

export default function Teams() {
	return (
		<Section>
			<Title>Toimielimet</Title>
			<div className="text-xl mt-10">FAB – Financial Advisory Board</div>
			<Prose large>
				Evonin osakkaista muodostuu aktiivinen keskustelualusta, jolla on
				mahdollisuus vaikuttaa yhtiön päätöksentekoon. Tämän lisäksi FAB:n
				sisällä keskustellaan uusimmista sijoituskentän tuulista ja moni osakas
				on kokenut lisäarvoa itse keskusteluiden tuomasta näkökulmasta.
			</Prose>
			<div className="text-xl mt-10">Tapahtumatoiminta</div>
			<Prose large>
				Yhtiö järjestää voittoa tavoittelevia osakas- sekä
				markkinointitilaisuuksia. Järjestämme lisäksi vuotuinen osakasjuhlan,
				jossa on odotettavissa arvojemme mukaista eeppistä menoa. Rennommissa
				merkeissä tiimimme järjestää after work -tilaisuuksia, joiden tavoite on
				rento illanvietto ja verkostoituminen.
			</Prose>
		</Section>
	);
}
