import { getGoogleSheet } from "@lib/googleUtils";
import { parseEmailString } from "@lib/stringUtils";
import { sendMail } from "@lib/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.email === "" || !parseEmailString(req.body.email)) {
      res.status(400).send("Invalid email.");
    } else {
      try {
        await sendMail({
          from: "Evon Group <no-reply@evon.fi>",
          to: req.body.email,
          subject: "Tervetuloa odotuslistalle!",
          text: "Tämä on vahvistus liittymisestäsi osakeannin odotuslistalle.\n\nTerveisin,\nEvon Groupin tiimi",
          "h:Reply-To": "Evon Group <info@evon.fi>",
        });
        const sheet = await getGoogleSheet(process.env.GOOGLE_SHEETS_ID, 1);
        await sheet.addRow({ email: req.body.email });
        res.status(200).json();
      } catch (e) {
        res.status(500).json(e);
      }
    }
  } else {
    res.status(400).json();
  }
}
