module.exports = {
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_SHEETS_ID: process.env.GOOGLE_SHEETS_ID,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_USERNAME: process.env.NEXTAUTH_USERNAME,
    NEXTAUTH_PASSWORD: process.env.NEXTAUTH_PASSWORD,
    MAILGUN_API: process.env.MAILGUN_API,
    MAILGUN_URL: process.env.MAILGUN_URL,
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
