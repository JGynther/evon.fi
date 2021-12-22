const { google } = require("googleapis");

export default async function handler(req, res) {
  if (!req.body.Nimi || !req.body.Sähköposti || !req.body.Puhelin) {
    res.status(400).json();
  } else {
    try {
      const auth = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_6554_ID,
        range: "A2:C2",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[req.body.Nimi, req.body.Sähköposti, req.body.Puhelin]],
        },
      });

      res.status(200).json();
    } catch (e) {
      console.log(e);
      res.status(500).json();
    }
  }
}
