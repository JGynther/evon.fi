const { GoogleSpreadsheet } = require("google-spreadsheet");
const axios = require("axios").default;

export default async function handler(req, res) {
  const data = req.body;
  if (
    !data.Nimi ||
    !data.Sähköposti ||
    !data.Puhelin ||
    !data.Majoitus ||
    !data.Ruokavalio
  ) {
    res.status(400).json();
  } else {
    try {
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_6554_ID);

      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      });

      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];

      await sheet.addRow({
        Nimi: data.Nimi,
        Sähköposti: data.Sähköposti,
        Puhelin: data.Puhelin,
        Majoitus: data.Majoitus,
        Ruokavalio: data.Ruokavalio,
      });

      const html = `
        <body>
          <div>
            <p>Hei ${data.Nimi.split(" ")[0]}!</p>
            <p>Ilmoitautumisesi on onnistuneesti vastaanotettu. Tervetuloa!</p>
            <p>Tässä vielä ilmoitautumisesi tiedot:</p>
            <ul>
              <li>Nimi: ${data.Nimi}</li>
              <li>Sähköposti: ${data.Sähköposti}</li>
              <li>Puhelin: ${data.Puhelin}</li>
              <li>
                Majoitus: ${
                  data.Majoitus === true ? "kyllä (lasku liitteenä)" : "ei"
                }
              </li>
              <li>Ruokavalio: ${data.Ruokavalio}</li>
            </ul>
          </div>
          <br>
          <div>
            <h3>Yleistä yhtiökokouksesta</h3>
            <ul>
              <li>Tree2u Oy:n varsinainen yhtiökokous</li>
              <li>8.2.2022 klo 15 alkaen (saapuminen klo 14 alkaen)</li>
              <li>Aulangon suuri huvila, Aulangon-heikkilän tie 168, 13900 Hämeenlinna</li>
            </ul>
            <p>
              Varsinainen yhtiökokous järjestetään 8.2.2022 klo 15 alkaen. 
              Muista merkitä se kalenteriisi!
              Yhtiökokoukseen voi saapua klo 14 alkaen osoitteseen Aulangon-heikkilän tie 168, 13900 Hämeenlinna.
              Kokouspaikka ei ole julkisten kulkuvälineiden saavutettavissa, joten suosittelemme sopimaan yhteiskyytejä muiden osakkaiden kanssa.
              Varsinainen kokouskutsu lähetetään myöhemmin yhdessä esityslistan kanssa.
            </p>
            <p>
              Yhtiökokouksen jälkeen järjestetään eeppinen osakasjuhla joka koostuu syömisestä, 
              juomisesta sekä tietenkin erinomaisesta ohjelmasta. 
              Ohjelmassa on mm. 10 000 euron tikanheitto sekä tietenkin saunomista! Oma pyyhe mukaan!
              Syötävää ja juotavaa on yhtiön puolesta varattu hieman, 
              mutta suosittelemme vahvasti tuomaan omia eväitä ja juomia mukana.
            </p>
            <p>
              Yhtiökokoukseen sekä osakasjuhlaan osallistuminen ovat luonnollisesti maksuttomia. 
              Ainoastaan yöpymismahdollisuus maksaa.
            </p>
            <p>
              Mikäli varasit itsellesi yöpymislipun voit osakasjuhlan jälkeen jäädä kokouspaikalle yöpymään.
              Mukaan tarvitset kuitenkin vähintään omat lakanat. 
              Kokouspaikalta TULEE poistua keskiviikkona viimeistään klo 10:30 mennessä.
            </p>
            <p>
              Mikäli et varannut yöpymislippua, mutta haluaisit sen vielä tehdä niin ota asap yhteyttä. 
              Lippuja saatavilla rajoitetusti.
            </p>
            <p>
              Yhtiöjohto seuraa koronatilannetta aktiivisesti ja tiedottaa ensisijaisesti whatsappin kautta mahdollisista varotoimenpiteistä.
            </p>
          </div>
          ${
            data.Majoitus === true
              ? `
            <br>
            <div>
              <h3>Lasku majoituksesta</h3>
              <div>
                <p>Hinta: 20,70 EUR</p>
                <p>Arvonlisävero 10 %: 2,30 EUR</p>
              </div>
              <div>
                <p>Maksettava: 23,00 EUR</p>
                <p>Saaja: Tree2u Oy</p>
                <p>IBAN: FI16 7997 7995 3487 16</p>
                <p>Eräpäivä: 21.2.2022</p>
                <p>Viesti: ${data.Nimi}</p>
              </div>
            </div>
          `
              : ""
          }
        </body>
      `;

      try {
        await axios({
          method: "post",
          url: `${process.env.MAILGUN_URL}/messages`,
          auth: {
            username: "api",
            password: `${process.env.MAILGUN_API}`,
          },
          params: {
            from: "Evon Group <info@evon.fi>",
            to: data.Sähköposti,
            subject: `Ilmoitautumisesi Tree2u Oy:n varsinaiseen yhtiökokoukseen`,
            html: html,
          },
        });
        res.status(200).json();
      } catch (e) {
        res.status(500).json(e);
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
