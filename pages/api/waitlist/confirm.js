import { supabaseServer, createLog } from "lib/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { token } = req.body;

    if (!token) {
      res.status(400).json({ error: "Invalid token" });
      return;
    }

    const { data, error } = await supabaseServer
      .from("waitlist")
      .update({ status: "confirmed" })
      .match({ token: token, status: "pending" });

    if (error) {
      res.status(400).json({ error: "Invalid token" });
      return;
    }

    createLog({
      event: "waitlist_confirm",
      content: { email: data[0].email, token: token },
    });

    res.status(200).json();
  }
}
