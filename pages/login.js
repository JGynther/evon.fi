import Head from "next/head";
import { useRouter } from "next/router";

import { supabase } from "@lib/supabase";
import { parseEmailString } from "@lib/stringUtils";

import { useState } from "react";

import PageWrapper from "@components/pagewrapper";
import PortalNav from "@components/portal/portalnav";
import Footer from "@components/footer";
import { Button } from "@components/button";

export default function Login() {
  const router = useRouter();
  const { callbackUrl } = router.query;

  const [email, setEmail] = useState("");
  const [error, setError] = useState(true);
  const [didSubmit, setDidSubmit] = useState(false);

  async function supabaseSignIn({ email }) {
    const { data, error } = await supabase.auth.signIn({ email });
    console.log(data, error);
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    supabaseSignIn({ email });
    setDidSubmit(true);
  };

  if (didSubmit) {
    return (
      <PageWrapper>
        <Head>
          <title>Login - Evon Capital</title>
        </Head>
        <PortalNav noSignout />
        <div className="flex justify-center tracking-wider text-xl">
          Sähköpostiisi on lähetetty kirjautumislinkki. Voit sulkea tämän sivun.
        </div>
        <Footer />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Head>
        <title>Login - Evon Capital</title>
      </Head>
      <div>
        <PortalNav noSignout />
        <div className="flex justify-center">
          <form
            onSubmit={handleSignIn}
            className="grid flex-grow max-w-xs md:max-w-md"
          >
            {error === "invalidCredentials" && (
              <div className="bg-indigo-500 bg-opacity-50 text-white text-center text-opacity-80 tracking-wider rounded p-5 my-10">
                Virheellinen käyttäjätunnus tai salasana.
              </div>
            )}
            <Input
              label="Sähköpostiosoite"
              value={email}
              setValue={setEmail}
              error={error}
              setError={setError}
            />
            <Button type="submit" disabled={error}>
              Kirjaudu sisään
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
}

function Input({ label, htmlFor, value, setValue, error, setError }) {
  const [visited, setVisited] = useState(false);

  const handleBlur = () => setVisited(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    setError(parseEmailString(e.target.value) === null);
  };

  return (
    <>
      <label htmlFor={htmlFor} className="text-lg tracking-wider">
        {label}
      </label>
      <input
        type="email"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        autoFocus
        id="email"
        className={`py-2 px-3 my-1 rounded bg-gray-800 shadow tracking-wider outline-none transition focus:ring-2 focus:ring-indigo-500 ${
          visited
            ? error
              ? "ring-2 ring-red-700"
              : "ring-2 ring-green-700"
            : ""
        }`}
      />
      {visited && error && (
        <p className="text-red-700 tracking-wider">
          Virheellinen sähköpostiosoite.
        </p>
      )}
    </>
  );
}
