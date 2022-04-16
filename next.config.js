module.exports = {
  env: {
    MAILGUN_API: process.env.MAILGUN_API,
    MAILGUN_URL: process.env.MAILGUN_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_BUCKET_URL:
      process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL,
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  reactStrictMode: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL.replace("https://", ""),
    ],
  },
  async redirects() {
    return [
      {
        source: "/qr",
        destination: "/",
        permanent: true,
      },
      {
        source: "/osakeanti",
        destination: "/",
        permanent: true,
      },
      {
        source: "/osakeanti/sitoumus",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
