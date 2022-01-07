import { useState } from "react";

import Head from "next/head";

import PageWrapper from "@components/pagewrapper";
import { Title, Subtitle, Prose } from "@components/text";
import OpenNewTabButton from "@components/opennewtabbutton";
import { Button } from "@components/button";
import Navigation from "@components/nav";
import Footer from "@components/footer";

import { parseEmailString } from "@lib/stringUtils";

export default function Page({}) {
  return (
    <PageWrapper>
      <Head>
        <title>Evon Capital - Waitlist</title>
      </Head>
      <Navigation />
      <section className="container mx-auto my-10">
        <div className="flex flex-wrap md:flex-nowrap gap-10 mx-4 max-w-screen-lg">
          <div className="max-w-lg">
            <Subtitle>Osakeannit</Subtitle>
            <Title>Odotuslista</Title>
            <Prose large>
              Meillä ei tällä hetkellä ole käynnissä osakeantia. Mikäli olet
              kuitenkin kiinnostunut osallistumaan, kannattaa liittyä meidän
              odotuslistalle! Saat tiedon ensimmäisenä seuraavasta osakeannista
              sähköpostitse.
            </Prose>
          </div>
          <Form />
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
}

function Form() {
  const [value, setValue] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState(true);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value === "") return;

    const response = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email: value }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      setSubmitError({ status: true, message: response.status });
    }

    setDidSubmit(true);
  };

  return (
    <div className="flex flex-grow justify-center">
      <div className="flex-grow">
        {!didSubmit ? (
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <Input
                value={value}
                setValue={setValue}
                error={error}
                setError={setError}
              />
              <Button type="submit" disabled={error}>
                Liity odotuslistalle
              </Button>
            </div>
          </form>
        ) : (
          <Title>
            {submitError
              ? "Sähköpostilistaan liittymisessä tapahtui virhe. Kokeile uudestaan."
              : "Sähköpostilistaan liityminen onnistui!"}
          </Title>
        )}
        <Prose noMargin small>
          Liittymällä listalle hyväksyt tietosuojaselosteemme mukaisen tietojesi
          käsittelyn.
        </Prose>
        <OpenNewTabButton href="/tietosuojaseloste.pdf">
          Tietosuojaseloste
        </OpenNewTabButton>
      </div>
    </div>
  );
}

function Input({ value, setValue, error, setError }) {
  const [visited, setVisited] = useState(false);

  const handleBlur = () => setVisited(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    setError(parseEmailString(e.target.value) === null);
  };

  return (
    <>
      <label htmlFor="email" className="text-lg tracking-wider">
        Sähköposti
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
