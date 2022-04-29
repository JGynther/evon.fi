import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";

export default function Teams() {
  return (
    <Section>
      <Title>Tiimit</Title>
      <div className="text-xl mt-10">Markkinointitiimi</div>
      <Prose large>
        Markkinointitiimin vastuulla on vastata yhtiön markkinoinnista ja
        viestinnästä. Tehtävänä on myös ylläpitää yhtiön some-tilejä sekä
        ulkoista imagoa. Lisäksi markkinointitiimi suunnittelee ja luo
        oheistuotteita markkinointitarkoituksiin.
      </Prose>
      <div className="text-xl mt-10">FAB</div>
      <Prose large>
        FAB eli financial advisor board on yhtiön sijoitusideoita tuottava
        toimielin. Sen tarkoituksena on tuottaa merkittävää lisäarvoa yhtiölle,
        mutta myös sen jäsenille. Monet ovatkin FAB:n ansiosta kuitanneet
        merkittäviä sijoitustuottoja myös omaan salkkuunsa.
      </Prose>
      <div className="text-xl mt-10">Tapahtumatiimi</div>
      <Prose large>
        Tapahtumatiimin päävastuulla on Evon Capitalin tapahtumien ja
        vierailujen mahdollistaminen sekä järjestäminen. Tiimi järjestää
        monenlaisia tapahtumia, kuten kvartaalikatsauksia, yritysvierailuja sekä
        kokousten iltaohjelmia.
      </Prose>
    </Section>
  );
}
