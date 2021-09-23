module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/qr",
        destination: "/osakeanti",
        permanent: true,
      }
    ]
  }
}
