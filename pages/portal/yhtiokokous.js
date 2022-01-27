import Head from "next/head";

import Layout from "@components/layout";
import FormComponent from "@components/portal/form";

import { supabase } from "@lib/supabase";
import { getNumberSold } from "@lib/fetchdata";

export default function Yhtiokokous({ number_sold }) {
  return (
    <Layout title="Yhtiökokous - Evon Capital" portal>
      <FormComponent
        content={{
          title: "Yhtiökokousilmoitautuminen",
          subtitle: "Yhtiökokous",
          content: `
                Tree2u Oy:n varsinainen yhtiökokous järjestetään tiistaina 8.2.2022 klo 15 alkaen. Kokouspaikkana toimii yhtiön kotipaikka, Hämeenlinna. Kokoustilaksi on varattu kaunis Aulangon suuri huvila suurine edustussaunoineen.

                Ilmoitauttuminen yhtiökokoukseen tapahtuu oheisen verkkolomakkeen avulla.
                
                Yhtiökokouksen jälkeen järjestetään eeppinen osakasjuhla, jossa ohjelmaan kuuluu mm. 10 000 euron tikanheitto. Osakasjuhlaan jääville osakkaille on järjestetty mahdollisuus majoittumiseen huvilassa. Yöpymislippu maksaa 23 euroa (sis. alv. 10 %).
                
                Yhtiökokoukseen sekä osakasjuhlaan osallistuminen ovat luonnollisesti maksuttomia. Ainoastaan yöpymismahdollisuus maksaa.

                Yöpymislippuja saatavilla ${30 - number_sold} / 30 kpl

                Tl;dr: 
                ❓\u00A0\u00A0\u00A0 Mitä: varsinainen yhtiökokous
                🏢\u00A0\u00A0\u00A0 Missä: Aulangon suuri huvila, Aulangon-heikkilän tie 168, 13900 Hämeenlinna
                📅\u00A0\u00A0\u00A0 Milloin: tiistai 8.2.2022 klo 15 alkaen
                💶\u00A0\u00A0\u00A0 Mitä maksaa: ei mitään, yöpyminen 23,– EUR
                🍕\u00A0\u00A0\u00A0 Onko ruokaa: yhtiö tarjoaa pientä purtavaa ja juotavaa, omia eväitä suositellaan
              `,
        }}
        fields={{
          Nimi: {
            default: "",
            placeholder: "Mikko Matti Matias Mallikas",
            help: "",
            type: "text",
          },
          Sähköposti: {
            default: "",
            placeholder: "mikko.mallikas@evon.fi",
            help: "Saat vahvistuksen ja lisätietoja tänne.",
            type: "email",
          },
          Puhelin: {
            default: "",
            placeholder: "+358 01 2345678",
            help: "",
            type: "tel",
          },
          Majoitus: {
            default: "false",
            placeholder: null,
            help: `Haluan majoituksen 8. - 9.2. väliseksi yöksi. Hinta 23,00 EUR (${
              30 - number_sold
            } / 30 saatavilla)`,
            type: "checkbox",
          },
          Ruokavalio: {
            default: "-",
            placeholder: "Pähkinäallergia, vegaani...",
            help: "Mahdolliset erikoisruokavaliot tai allergiat, vastaa ” - ” jos ei mitään.",
            type: "text",
          },
        }}
        submitCode="6554"
      />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const number_sold = await getNumberSold();

  return {
    props: { number_sold },
  };
}
