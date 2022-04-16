import { useState } from "react";

import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Subtitle, Prose } from "@components/text";
import { Input } from "@components/formcontrol";
import Spinner from "@components/spinner";

export default function Page() {
  return (
    <Layout title="Waitlist - Evon Capital">
      <Section>
        <Title>Odotuslista</Title>
        <Prose>
          Meillä ei tällä hetkellä ole käynnissä osakeantia. Mikäli olet
          kuitenkin kiinnostunut osallistumaan, kannattaa liittyä meidän
          odotuslistalle! Saat tiedon ensimmäisenä seuraavasta osakeannista
          sähköpostitse.
        </Prose>
        <Form />
      </Section>
    </Layout>
  );
}

function Form() {
  const [email, setEmail] = useState();
  const onChange = (event) => setEmail(event.target.value);
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setLoading(true);
        fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }).then(() => setLoading(false));
      }}
    >
      <div className="flex flex-col gap-5 mt-10">
        <Input label="Sähköpostiosoite" type="email" onChange={onChange} />
        <button
          type="submit"
          disabled={loading}
          className={`flex justify-center bg-indigo-700 hover:bg-indigo-800 transition py-2 px-6 rounded tracking-wide disabled:opacity-80 disabled:bg-indigo-700`}
        >
          {loading ? <Spinner /> : "Liity odostuslistalle"}
        </button>
        <p className="text-white text-opacity-60 text-sm">
          Liitymällä listalle hyväksyt tietosuojaselosteemme mukaisen tietojesi
          käsittelyn.
        </p>
      </div>
    </form>
  );
}
