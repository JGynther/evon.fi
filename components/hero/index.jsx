import Section from "@components/layout/section";
import { Title } from "@components/text";
import Button from "@components/button";

export default function Hero() {
  return (
    <Section>
      <div className="text-center space-y-8 my-14">
        <Title>
          <span className="text-4xl md:text-6xl">
            Ole opportunisti, älä pelkkä sijoittaja
          </span>
        </Title>
        <div className="text-white text-opacity-80 text-lg">
          Evon Capital on tuottohakuisten piensijoittajien yritys, joka
          sijoittaa varojaan pitkällä aikahorisontilla. Yhtiö yhdistää niin
          osakkaidensa varat kuin osaamisen — ja hakee markkinoihin nähden
          tuottoa tällä synergialla.
        </div>
        <div className="text-white text-opacity-80 text-lg">
          Kiinnostaako lähteä mukaan? 👇
        </div>
        <div className="">
          <Button type="link" href="/waitlist">
            Liity odotuslistalle
          </Button>
        </div>
      </div>
    </Section>
  );
}
