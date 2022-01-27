import { useState } from "react";

import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Subtitle, Prose } from "@components/text";
import OpenNewTabButton from "@components/opennewtabbutton";
import { Button } from "@components/button";

import { parseEmailString } from "@lib/stringUtils";

export default function Page({}) {
  return (
    <Layout title="Waitlist - Evon Capital">
      <Section>
        <div className="">
          <Subtitle>Osakeannit</Subtitle>
          <Title>Odotuslista</Title>
          <Prose large>
            Meillä ei tällä hetkellä ole käynnissä osakeantia. Mikäli olet
            kuitenkin kiinnostunut osallistumaan, kannattaa liittyä meidän
            odotuslistalle! Saat tiedon ensimmäisenä seuraavasta osakeannista
            sähköpostitse.
          </Prose>
          <Form />
        </div>
      </Section>
    </Layout>
  );
}

function Form() {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState(true);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value === "") return;

    setIsSubmitting(true);

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
    <div className="max-w-lg mt-10">
      {!didSubmit ? (
        <form onSubmit={handleSubmit}>
          <div className="grid">
            <Input
              value={value}
              setValue={setValue}
              error={error}
              setError={setError}
            />
            <Button
              type="submit"
              disabled={error || isSubmitting}
              loading={isSubmitting}
            >
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
      <OpenNewTabButton href="/tietosuoja">Tietosuojaseloste</OpenNewTabButton>
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
