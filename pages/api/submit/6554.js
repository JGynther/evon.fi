const { GoogleSpreadsheet } = require("google-spreadsheet");

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
      res.status(200).json();
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
