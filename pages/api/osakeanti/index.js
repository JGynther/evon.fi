import { supabaseServer, createLog } from "@lib/supabase";
import { sendMail } from "@lib/mail";
import { randomUUID } from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let {
      email,
      first_name,
      middle_names,
      last_name,
      phone,
      street,
      postal_code,
      city,
      stock,
      birthdate,
    } = req.body;

    if (
      !email ||
      !first_name ||
      !last_name ||
      !phone ||
      !street ||
      !postal_code ||
      !city ||
      !stock ||
      !birthdate
    ) {
      return res.status(400).json({ error: "Invalid form" });
    }

    stock = Number(stock);

    if (stock < 250) return res.status(400).json({ error: "Invalid stock" });

    const sum = Math.round(stock * 0.4 * 100) / 100;

    const token = randomUUID();

    const { data, error } = await supabaseServer
      .from("osakeanti_portal")
      .insert({
        email: email,
        first_name: first_name,
        middle_names: middle_names,
        last_name: last_name,
        phone: phone,
        street: street,
        postal_code: postal_code,
        city: city,
        stock: stock,
        birthdate: birthdate,
        sum: sum,
        token: token,
      });

    if (error) {
      return res.status(400).send();
    }

    await sendMail({
      from: "Evon Capital <osakeanti@evon.fi>",
      to: user.email,
      subject: "Osakeannin merkintä - Evon Capital",
      "o:tag": "osakeanti",
      template: "osakeanti",
      "h:reply-to": "Evon Capital <info@evon.fi>",
      "v:first_name": first_name,
      "v:middle_names": middle_names,
      "v:last_name": last_name,
      "v:email": email,
      "v:phone": phone,
      "v:street": street,
      "v:postal_code": postal_code,
      "v:city": city,
      "v:stock": stock,
      "v:birthdate": birthdate,
      "v:sum": sum,
      "v:link": `${process.env.NEXT_PUBLIC_BASE_URL}/osakeanti/confirm?token=${token}`,
      "v:date": new Date(Date.now() + 6.048e8).toLocaleDateString("fi-FI"), // hacky date in a week
    });

    createLog({
      event: "merkinta",
      email: email,
      content: {
        stock: stock,
        sum: sum,
      },
    });

    return res.status(200).send();
  } else {
    return res.status(400).send("Invalid request");
  }
}
