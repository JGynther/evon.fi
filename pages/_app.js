import "tailwindcss/tailwind.css";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabase } from "@lib/supabase";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const handleAccept = () => router.reload(window.location.pathname);
  const cookieConsentValue = getCookieConsentValue("evon-cookie-consent");
  const consent = cookieConsentValue === "true" ? true : false;

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        await updateSupabaseCookie(event, session);
        if (event === "SIGNED_IN") {
          router.push("/portal");
        }
      }
    );
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  async function updateSupabaseCookie(event, session) {
    await fetch("api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  return (
    <>
      <Head>
        {consent && (
          /* Global site tag (gtag.js) - Google Analytics */
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-FHBK6REK3E"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FHBK6REK3E');
          `,
              }}
            />
          </>
        )}
      </Head>
      <CookiesElement handleAccept={handleAccept} />
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

function CookiesElement({ handleAccept }) {
  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      location="none"
      buttonText="Juu, kaikki k??y"
      declineButtonText="Ei, kiitos paljon"
      cookieName="evon-cookie-consent"
      containerClasses="text-lg bg-gray-800 fixed z-50 mx-1 px-10 py-8 shadow-2xl rounded-lg inset-x-0 bottom-10 md:left-10 max-w-sm border-2 border-gray-700"
      contentClasses="text-white opacity-80"
      buttonWrapperClasses="grid gap-5 mt-7"
      buttonClasses="text-white tracking-wider bg-green-500 hover:bg-green-700 transition flex-grow px-4 py-2 rounded"
      declineButtonClasses="text-sm text-white tracking-wider bg-red-500 bg-opacity-60 hover:bg-opacity-80 transition px-4 py-1 mx-20 rounded whitespace-nowrap"
      disableStyles={true}
      onAccept={handleAccept}
    >
      <span className="flex gap-5 justify-center items-center">
        <p className="text-5xl">????</p>
        <p>K??ytet????n kaiken maailman keksej?? sun vakoilemiseen. Sopiiko?</p>
      </span>
      <p className="text-sm text-white text-opacity-60 text-center my-4">
        (Oikeasti kyll?? my??s sivujen parantamiseen)
      </p>
    </CookieConsent>
  );
}

export default MyApp;
