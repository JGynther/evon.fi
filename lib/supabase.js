import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export const bucket = `${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL}/storage/v1/object/public/public`;

export async function createLog({
  event,
  userid,
  email,
  content,
  errorstatus = false,
}) {
  const { data, error } = await supabaseServer.from("admin_logs").insert([
    {
      event: event,
      userid: userid,
      email: email,
      content: content,
      error: errorstatus,
    },
  ]);
  return { data, error };
}
