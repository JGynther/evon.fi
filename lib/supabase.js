import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const bucket = `${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL}/storage/v1/object/public/public`;
