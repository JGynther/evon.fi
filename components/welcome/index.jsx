import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";

export default function Welcome() {
	return (
		<Section>
			<Title>Toimitusjohtajan tervehdys</Title>
			<Prose large>
				&quot;Evon Capital on omassa luokassaan ainutlaatuinen opportunistien
				yhteisö. Tarjoamme erilaisen otteen sijoittamiseen ja omistamiseen,
				jossa tavoitteenamme rakentaa yhtiöstä Suomen listaamattomalla
				markkinalla merkittävä toimija.
			</Prose>
			<Prose large>
				Yhtiön vahvuus on sen laaja omistajapohja, joka tuo mukaan osaamista ja
				pääomaa ympäri Suomea. Tavoitteemme on luoda sinulle omistajana arvoa
				niin sijoitustoiminnallamme kuin muulla tekemisellämme. Omistajat ovat
				lämpimästi tervetulleita mukaan toimintaan ja ottamaan enemmän tai
				vähemmän roolia. Matalan tason osallisuudesta sijoitusten suunnittelussa
				vastaa Financial advisory board eli FAB, jonka jäseneksi kaikki osakkaat
				pääsevät.
			</Prose>
			<Prose large>
				Tämä on vasta alkua! Hyppää siis mukaan rakentamaan eeppisempää
				tulevaisuutta!” &quot;
			</Prose>
			<div className="text-right">
				<Prose large>Aatu Pulkkinen, toimitusjohtaja</Prose>
			</div>
		</Section>
	);
}
