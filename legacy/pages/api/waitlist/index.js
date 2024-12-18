import { sendMail } from "@lib/mail";
import { supabaseServer, createLog } from "@lib/supabase";
import { randomUUID } from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      if (!req.body.email) return res.status(400).send("Email is required");

      const token = randomUUID();

      const { data, error } = await supabaseServer.from("waitlist").insert([
        {
          email: req.body.email,
          token: token,
        },
      ]);

      if (error) {
        await createLog({
          service: "waitlist",
          message: "waitlist join failed",
          json: {
            status: 400,
            error: "invalid email",
            email: req.body.email,
          },
          _source: "lambda",
        });

        return res.status(400).json({ error: "Invalid email" });
      }

      const text = `Tervetuloa Evon Capitalin odotuslistalle!\n\nVahvista sähköpostiosoitteesi oheisella linkillä:\n${process.env.NEXT_PUBLIC_BASE_URL}/waitlist/join/${token}`;

      await sendMail({
        from: "Evon Capital <no-reply@evon.fi>",
        to: req.body.email,
        subject: "Vahvistus liittymisestä odotuslistalle",
        text: text,
        "o:tag": "waitlist",
      });

      await createLog({
        service: "waitlist",
        message: "waitlist join",
        json: {
          status: 200,
          email: req.body.email,
          token: token,
        },
        _source: "lambda",
      });

      res.status(200).json();
    } catch (e) {
      res.status(500).json();
    }
  }
}
