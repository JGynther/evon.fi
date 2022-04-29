import { supabaseServer, createLog } from "@lib/supabase";

async function checkValues(email, a, b) {
  const { data, error } = await supabaseServer
    .from("osakeanti_portal")
    .select("a,b,b_max")
    .eq(email, "email");

  if (error) return false;

  if (data.length === 0) return true;

  if (data[0].a <= a && data[0].b <= b) return false;

  if (b > data[0].b_max) return false;

  return true;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user } = await supabaseServer.auth.api.getUserByCookie(req);

    if (!user) {
      return res.status(401);
    }

    const { a, b } = req.body;
    const sum = a * 0.4 + b * 0.41;

    const check = await checkValues(user.email, a, b);

    if (!check) {
      return res.status(400);
    }

    const { data, error } = await supabaseServer
      .from("osakeanti_portal")
      .upsert({
        email: user.email,
        a: a,
        b: b,
        sum: sum,
      });

    if (error) {
      return res.status(500);
    }

    createLog({
      event: "merkinta_portal",
      userid: user.id,
      email: user.email,
      content: {
        a: a,
        b: b,
        sum: sum,
      },
    });

    return res.status(200);
  } else {
    return res.status(400).send("Invalid request");
  }
}
