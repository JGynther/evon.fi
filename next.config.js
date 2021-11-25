module.exports = {
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_SHEETS_ID: process.env.GOOGLE_SHEETS_ID,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/qr",
        destination: "/osakeanti",
        permanent: true,
      },
    ];
  },
};
