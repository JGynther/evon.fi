import { useState } from "react";

import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";
import { Input, Form } from "@components/formcontrol";
import Button from "@components/button";
import toast from "react-hot-toast";

export default function Page() {
  return (
    <Layout title="Waitlist - Evon Capital">
      <Section>
        <Title>Odotuslista</Title>
        <Prose large>
          Meillä ei tällä hetkellä ole käynnissä osakeantia. Mikäli olet
          kuitenkin kiinnostunut osallistumaan, kannattaa liittyä meidän
          odotuslistalle! Saat tiedon ensimmäisenä seuraavasta osakeannista
          sähköpostitse.
        </Prose>
        <FormComponent />
      </Section>
    </Layout>
  );
}

function FormComponent() {
  const [email, setEmail] = useState(null);
  const onChange = (event) => setEmail(event.target.value);
  const [loading, setLoading] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    if (!res.ok) {
      setError(true);
      setLoading(false);
      toast.error("Sähköpostilistaan liittyminen ei onnistunut.");
      return;
    }

    setError(false);
    setDidSubmit(true);
    toast.success("Sähköpostilistaan liittyminen onnistui!");
  };

  if (didSubmit && !error) {
    return (
      <div className="mt-10">
        <Prose large>Kiitos! Saat pian sähköpostiisi ({email}) varmennuksen.</Prose>
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="Sähköpostiosoite"
        type="email"
        onChange={onChange}
        required
      />
      <Button type="submit" loading={loading}>
        Liity odotuslistalle
      </Button>
      <p className="text-white text-opacity-60 text-sm">
        Liitymällä listalle hyväksyt tietosuojaselosteemme mukaisen tietojesi
        käsittelyn.
      </p>
    </Form>
  );
}
