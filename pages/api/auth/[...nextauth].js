import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const isCorrectCredentials = (credentials) =>
  credentials.username === process.env.NEXTAUTH_USERNAME &&
  credentials.password === process.env.NEXTAUTH_PASSWORD;

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (isCorrectCredentials(credentials)) {
          const user = { id: 1, name: "Admin" };
          return Promise.resolve(user);
        } else {
          throw `/login?error=invalidCredentials&callbackUrl=${req.body.callbackUrl}`;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
