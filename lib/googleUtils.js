const { GoogleSpreadsheet } = require("google-spreadsheet");

export async function getGoogleSheet(googleSheetID, sheetIndex) {
  const doc = new GoogleSpreadsheet(googleSheetID);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    // Unescape escaped backslashes in the key
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[sheetIndex];

  return sheet;
}
