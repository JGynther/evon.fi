import { supabaseServer, createLog } from "lib/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: "Invalid token" });
    }

    const { data, error } = await supabaseServer
      .from("osakeanti")
      .update({ status: "confirmed" })
      .match({ token: token, status: "pending" });

    if (error) {
      return res.status(400).json({ error: "Invalid token" });
    }

    await createLog({
      event: "osakeanti_confirm",
      content: { email: data[0].email, token: token },
    });

    res.status(200).json();
  }
}
