import { supabaseServer, createLog } from "@lib/supabase";
import { sendMail } from "@lib/mail";

async function checkValues(email, a, b) {
  const { data, error } = await supabaseServer
    .from("osakeanti_portal")
    .select("a,b,max_b")
    .eq("email", email);

  if (error) return false;

  if (data.length === 0) return true;

  if (data[0].a === a && data[0].b === b) return false;
  if ((data[0].a || 0) > a) return false;
  if ((data[0].b || 0) > b) return false;

  if (b >= data[0].b_max) return false;

  return true;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user } = await supabaseServer.auth.api.getUserByCookie(req);

    if (!user) {
      return res.status(401).send();
    }

    let { a, b } = req.body;
    a = Number(a);
    b = Number(b);
    const sum = Math.round((a * 0.4 + b * 0.41) * 100) / 100;

    const check = await checkValues(user.email, a, b);

    if (!check) {
      return res.status(400).send();
    }

    const { data, error } = await supabaseServer
      .from("osakeanti_portal")
      .update({
        updated_at: new Date().toISOString(),
        a: a,
        b: b,
        sum: sum,
      })
      .eq("email", user.email);

    if (error) {
      return res.status(500).send();
    }

    await sendMail({
      from: "Evon Capital <osakeanti@evon.fi>",
      to: user.email,
      subject: "Osakeannin merkintä - Evon Capital",
      "o:tag": "osakeanti",
      template: "osakeanti_portal",
      "h:reply-to": "Evon Capital <info@evon.fi>",
      "v:a": a,
      "v:b": b,
      "v:sum": sum,
      "v:a_sum": a * 0.4,
      "v:b_sum": b * 0.41,
      "v:date": new Date(Date.now() + 6.048e8).toLocaleDateString("fi-FI"), // hacky date in a week
    });

    await createLog({
      event: "merkinta_portal",
      userid: user.id,
      email: user.email,
      content: {
        a: a,
        b: b,
        sum: sum,
      },
    });

    return res.status(200).send();
  } else {
    return res.status(400).send("Invalid request");
  }
}
