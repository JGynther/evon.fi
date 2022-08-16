import { supabaseServer, createLog } from "lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  const { token } = req.body;

  if (!token) return res.status(400).json({ error: "Invalid token" });

  const { data, error } = await supabaseServer
    .from("waitlist")
    .update({ status: "confirmed" })
    .match({ token: token, status: "pending" });

  if (error) {
    await createLog({
      service: "waitlist",
      message: "waitlist confirmation failed",
      json: {
        status: 400,
        error: "invalid token",
        token: token,
      },
      _source: "lambda",
    });

    return res.status(400).json({ error: "Invalid token" });
  }

  await createLog({
    service: "waitlist",
    message: "waitlist confirmation",
    json: {
      status: 200,
      email: data[0].email,
      token: token,
    },
    _source: "lambda",
  });

  res.status(200).json();
}
