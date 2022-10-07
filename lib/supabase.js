import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  { multiTab: false } // https://github.com/supabase/supabase-js/issues/442
);

export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export const bucket = `${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL}/storage/v1/object/public/public`;

export async function createLog({ service, message, json, _source, _meta }) {
  const { data, error } = await supabaseServer
    .from(`${process.env.NODE_ENV === "production" ? "logs-v2" : "dev-logs"}`)
    .insert([
      {
        service: service,
        message: message,
        json: json,
        _source: _source,
        _meta: _meta,
      },
    ]);

  return { data, error };
}
