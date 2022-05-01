import Section from "@components/layout/section";
import { Title } from "@components/text";
import FAQitem from "./faqitem";

export default function FAQ() {
  return (
    <Section>
      <Title>Usein kysytyt kysymykset</Title>
      <FAQitem question="Kaverini toi minut tänne, mitä nyt?">
        Tervetuloa Evonin sivuille! Kaverisi varmasti ohjasi sinut tänne syystä.
        Voit tutustua käynnissä olevaan osakeantiimme sivun yläosasta tai lukea
        lisätietoja yrityksestä tältä sivulta.
      </FAQitem>
      <FAQitem question="Mikä ihmeen Evon Capital?">
        Nuorten ja sijoitusmielisten yhteisö. Sijoitamme monipuolisesti eri
        kohteisiin ja meillä on parhaillaan käynnissä osakeanti. Järjestämme
        myös osakastapahtumia monipuolisesti sijoitusteeman ympärillä.
      </FAQitem>
      <FAQitem question="Mihin Evon Capital sijoittaa?">
        Sijoitamme pääasiassa pörssilistattuihin tuotteisiin, mutta myös
        listaamattomiin yhtiöihin ja lainakirjoihin. Lähitulevaisuuden
        horisontissa siintää myös asuntosijoittamiseen osallistumen ja
        kryptovaluutat.
      </FAQitem>
      <FAQitem question="Mistä yritysjohto koostuu?">
        Yhtiöjohto koostuu omistajistamme. Evon Capital on yhteisö ja tämä
        yhteisö pyörittää itseään. Katso johdon esittely tästä.
      </FAQitem>
      <FAQitem question="Miten yritysjohtoa palkitaan?">
        Yhtiöjohtoa palkitaan yhtiökokouksen päättämällä oikeudella ostaa
        vuosittain rajoitettu määrä yhtiön C-sarjan osakkeita alennettuun
        hintaan.
      </FAQitem>
      <FAQitem question="Pääseekö toimintaan mukaan?">
        Osakkaat ovat tervetulleita vaikuttamaan yrityksen toimintaan. Meillä on
        osakasryhmä, josta pääsee monipuolisesti mukaan. Evon on yhteisö ja
        tarvitsemme aina tekijöitä!
      </FAQitem>
      <FAQitem question="Mitä riskejä yhtiössä on?">
        Tärkeimmät liikkeeseenlaskijaan ja sen toimintaan liittyvät keskeiset
        riskit:
        <ul className="list-disc list-inside mt-4 text-base space-y-1">
          <li>Avainhenkilöiden menetys</li>
          <li>Markkinan merkittävät vaihtelut</li>
          <li>Epäonnistuneet sijoitukset</li>
          <li>
            Liiketoiminta- ja strategiariskit (kasvustrategia voi jäädä
            toteutumatta osin tai kokonaan)
          </li>
          <li>Lainsäädännölliset riskit</li>
        </ul>
        <br></br>
        Tärkeimmät arvopaperiin liittyvät riskit:
        <ul className="list-disc list-inside mt-4 text-base space-y-1">
          <li>Mahdollisuus menettää sijoitettu pääoma kokonaan tai osittain</li>
          <li>Et välttämättä saa sijoituksellesi yhtään tuottoa</li>
          <li>Osakemerkintä on peruuttamaton</li>
          <li>
            Likviditeettiriski (et saa välttämättä myytyä osakkeitasi pois)
          </li>
          <li>Yhtiöllä ei ole jatkuvaa tiedottamisvelvollisuutta</li>
          <li>Osingonjakoon liittyvät riskit</li>
          <li>
            Mahdolliset tulevat osakeannit ja/tai optio-oikeuksien tai muiden
            osakkeisiin oikeuttavien erityisten oikeuksien perusteella
            laimentavat osakkeenomistajan suhteellista omistusosuutta
          </li>
          <li>Tuotto-odotuksen epävarmuus</li>
          <li>
            Yhtiön tulevaisuudessa mahdollisesti maksamat palkat ja palkkiot
            yksittäisille avainhenkilöille
          </li>
        </ul>
      </FAQitem>
      <FAQitem question="Miksi keräätte jatkuvasti uutta pääomaa?">
        Vaikka pääoman määrä ei ole itseisarvo, niin sen kerääminen on kuitenkin
        meille oleellista, sillä se luo uusia mahdollisuuksia. Esimerkiksi
        lainan hakeminen ja sen mahdolliset ehdot paranevat. Yksittäisten
        transaktioiden suhteelliset kulut laskevat ja kiinteiden kulujen suhde
        pääomaan paranee.
      </FAQitem>
    </Section>
  );
}
