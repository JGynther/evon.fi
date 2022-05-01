import Layout from "@components/layout";
import Section from "@components/layout/section";
import { Title, Prose } from "@components/text";
import { Input, Form } from "@components/formcontrol";
import Button from "@components/button";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Merkinta() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [stock, setStock] = useState(250);
  return (
    <Layout title="Osakeanti - Evon Capital">
      <Section>
        <Title>Osallistu osakeantiin 1.5. - 16.8.</Title>
        <Prose large>
          Voit tehdä merkinnän osakeantiin täyttämällä oheisen lomakkeen. Täytä
          erityisesti tietosi hyvin huolellisesti. Epämääräiset tai virheelliset
          tiedot johtavat merkinnän hylkäämiseen. Merkintä on sitova, eikä sitä
          voi perua.
        </Prose>
        {didSubmit ? (
          <Prose large>
            Merkintä lähetetty onnistuneesti. Vahvista merkintä sähköpostiisi
            saapuvalla linkillä! Merkintä ei etene ilman vahvistusta. Jos
            sähköposti ei saavu, tarkista myös roskaposti.
          </Prose>
        ) : (
          <Form
            onSubmit={async (event) => {
              event.preventDefault();
              setIsSubmitting(true);
              const res = await fetch("/api/osakeanti", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  first_name: event.target[0].value,
                  middle_names: event.target[1].value,
                  last_name: event.target[2].value,
                  birthdate: event.target[3].value,
                  email: event.target[4].value,
                  phone: event.target[5].value,
                  street: event.target[6].value,
                  postal_code: event.target[7].value,
                  city: event.target[8].value,
                  stock: event.target[9].value,
                }),
              });
              if (res.ok) {
                toast.success("Merkintä lähetetty onnistuneesti!");
                setDidSubmit(true);
                return;
              }
              setIsSubmitting(false);
              toast.error("Merkintä on virheellinen.");
            }}
          >
            <Input label="Etunimi" placeholder="Matti" required />
            <Input label="Toiset nimet" placeholder="Mikko" />
            <Input label="Sukunimi" placeholder="Meikäläinen" required />
            <Input label="Syntymäaika" type="date" required />
            <Input
              label="Sähköposti (Huom! Tämä vahvistetaan)"
              placeholder="matti.meikalainen@evon.fi"
              type="email"
              required
            />
            <Input
              label="Puhelinnumero"
              placeholder="+358 50 1234567"
              type="tel"
              required
            />
            <Input
              label="Katuosoite"
              placeholder="Esimerkkikatu 4 A 2"
              required
            />
            <Input label="Postinumero" placeholder="00100" required />
            <Input label="Kaupunki" placeholder="Helsinki" required />
            <Input
              label="Osaketta (minimi 250 kpl)"
              type="number"
              placeholder="250"
              step={1}
              min={250}
              required
              onChange={(event) => setStock(event.target.value)}
            />
            <Prose large>
              Yhteensä {Math.round(stock * 0.4 * 100) / 100} EUR
            </Prose>
            <div className="bg-rose-500 bg-opacity-20 rounded p-5 my-4">
              <b>Huom!</b>
              <p className="mt-2">
                Merkintä on sitova eikä sitä voi perua. Tutustu annin ehtoihin.
                Ymmärrä sijoitukseen liittyvät riskit.
              </p>
              <div className="bg-rose-500 bg-opacity-30 rounded p-4 mt-4 space-x-4">
                <input
                  type="checkbox"
                  required
                  className="accent-indigo-500 transform scale-150"
                />
                <label>
                  Ymmärrän mitä olen tekemässä.
                  <span className="text-rose-500"> *</span>
                </label>
              </div>
            </div>
            <div className="space-x-3 text-white text-opacity-80 text-sm">
              <input type="checkbox" required className="accent-indigo-500 " />
              <label>
                Hyväksyn annin <TextLink href="/ehdot.pdf">ehdot</TextLink> ja{" "}
                <TextLink href="/tietosuoja">tietosuojaselosteen</TextLink>{" "}
                mukaisen tietojeni käsittelyn.
              </label>
            </div>
            <Button type="submit" loading={isSubmitting}>
              Tee merkintä
            </Button>
          </Form>
        )}
      </Section>
    </Layout>
  );
}

function TextLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <a
        target="_blank"
        className="underline text-white text-opacity-80 hover:text-opacity-100 transition"
      >
        {children}
      </a>
    </Link>
  );
}
