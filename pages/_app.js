import 'tailwindcss/tailwind.css'
import CookieConsent, { Cookies, getCookieConsentValue} from "react-cookie-consent"
import Head from "next/head"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const handleAccept = () => router.reload(window.location.pathname);
  const cookieConsentValue = getCookieConsentValue("evon-cookie-consent");
  const consent = cookieConsentValue === "true" ? true : false;
  return (
    <>
      <Head>
      { consent &&
        /* Global site tag (gtag.js) - Google Analytics */
        <>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FHBK6REK3E" />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FHBK6REK3E');
          `}} />
        </>
      }
      </Head>
      <CookiesElement handleAccept={handleAccept} />
      <Component {...pageProps} />
    </>
  )
}

function CookiesElement({ handleAccept }) {
  return (
    <CookieConsent
        enableDeclineButton
        flipButtons
        location="none"
        buttonText="Juu, kaikki käy"
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
          <p className="text-5xl">🍪</p>
          <p>Käytetään kaiken maailman keksejä sun vakoilemiseen. Sopiiko?</p>
        </span>
        <p className="text-sm text-white text-opacity-60 text-center my-4">(Oikeasti kyllä myös sivujen parantamiseen)</p>
    </CookieConsent>
  )
}

export default MyApp
