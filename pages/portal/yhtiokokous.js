import Head from "next/head";

import PageWrapper from "@components/pagewrapper";
import PortalNav from "@components/portal/portalnav";
import FormComponent from "components/portal/form";

import { getSession } from "next-auth/client";

export default function Yhtiokokous() {
  return (
    <PageWrapper>
      <Head>
        <title>Yhtiökokous - Evon Capital</title>
      </Head>
      <PortalNav />
      <FormComponent
        content={{
          title: "Yhtiökokousilmoitautuminen",
          subtitle: "Yhtiökokous",
          content: `
                Tree2u Oy:n varsinainen yhtiökokous järjestetään tiistaina 8.2.2022 klo 15 alkaen. Kokouspaikkana toimii yhtiön kotipaikka, Hämeenlinna. Kokoustilaksi on varattu kaunis Aulangon suuri huvila suurine edustussaunoineen.

                Ilmoitauttuminen yhtiökokoukseen tapahtuu oheisen verkkolomakkeen avulla.
                
                Yhtiökokouksen jälkeen järjestetään eeppinen osakasjuhla, jossa ohjelmaan kuuluu mm. 10 000 euron tikanheitto. Osakasjuhlaan jääville osakkaille on järjestetty mahdollisuus majoittumiseen huvilassa. Yöpymislippu maksaa 23 euroa (sis. alv. 10 %).
                
                Yhtiökokoukseen sekä osakasjuhlaan osallistuminen ovat luonnollisesti maksuttomia. Ainoastaan yöpymismahdollisuus maksaa.

                Tl;dr: 
                ❓\u00A0\u00A0\u00A0 Mitä: varsinainen yhtiökokous
                🏢\u00A0\u00A0\u00A0 Missä: Aulangon suuri huvila, Aulangon-heikkilän tie 168, 13900 Hämeenlinna
                📅\u00A0\u00A0\u00A0 Milloin: tiistai 8.2.2022 klo 15 alkaen
                💶\u00A0\u00A0\u00A0 Mitä maksaa: ei mitään, yöpyminen 23,– EUR
                🍕\u00A0\u00A0\u00A0 Onko ruokaa: yhtiö tarjoaa pientä purtavaa, omia eväitä suositellaan
              `,
        }}
        fields={{
          Nimi: {
            default: "",
            placeholder: "Mikko Matti Matias Mallikas",
            help: "",
            type: null,
          },
          Sähköposti: {
            default: "",
            placeholder: "mikko.mallikas@evon.fi",
            help: "",
            type: "",
          },
          Puhelin: {
            default: "",
            placeholder: "+358 01 2345678",
            help: "",
            type: "",
          },
        }}
        submitCode="6554"
      />
    </PageWrapper>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/login?callbackUrl=${process.env.NEXTAUTH_URL}/portal/yhtiokokous`,
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
