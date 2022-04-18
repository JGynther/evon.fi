import { sendMail } from "@lib/mail";
import { supabaseServer, createLog } from "@lib/supabase";
import { randomUUID } from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      if (!req.body.email) {
        res.status(400).send("Email is required");
        return;
      }

      const token = randomUUID();

      const { data, error } = await supabaseServer.from("waitlist").insert([
        {
          email: req.body.email,
          token: token,
        },
      ]);

      if (error) {
        res.status(400).json({ error: "Invalid email" });
        return;
      }

      const text = `Tervetuloa Evon Capitalin odotuslistalle!\n\nVahvista sähköpostiosoitteesi oheisella linkillä:\n${process.env.NEXT_PUBLIC_BASE_URL}/waitlist/confirm?token=${token}`;

      await sendMail({
        from: "Evon Capital <no-reply@evon.fi>",
        to: req.body.email,
        subject: "Vahvistus liittymisestä odotuslistalle",
        text: text,
        "o:tag": "waitlist",
      });

      createLog({
        event: "waitlist_join",
        content: { email: req.body.email },
      });

      res.status(200).json();
    } catch (e) {
      res.status(500).json();
    }
  }
}
