import { useState } from "react";

import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Subtitle, Prose } from "@components/text";
import { Input, Form } from "@components/formcontrol";
import Button from "@components/button";

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
        <FormComponent />
      </Section>
    </Layout>
  );
}

function FormComponent() {
  const [email, setEmail] = useState();
  const onChange = (event) => setEmail(event.target.value);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    }).then(() => setLoading(false));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input label="Sähköpostiosoite" type="email" onChange={onChange} />
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
