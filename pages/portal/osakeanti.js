import { supabase } from "@lib/supabase";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { Portal } from "@components/layout";
import Section from "@components/layout/section";
import Spinner from "@components/spinner";
import { Title, Prose } from "@components/text";
import { Input, Form } from "@components/formcontrol";
import Button from "@components/button";

export default function Osakeanti({ user }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [max, setMax] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    supabase
      .from("osakeanti_portal")
      .select("a,b,max_b")
      .eq("email", user.email)
      .then((r) => r.data[0])
      .then((data) => {
        setA(data.a || 0);
        setB(data.b || 0);
        setMax(data.max_b);
      });
  }, [user.email]);

  return (
    <Portal title="Osakeanti - Evon Capital">
      <Section>
        <div className="mb-8 text-white text-opacity-80">
          Kirjautuneena sisään: {user.email}
        </div>

        <Title>Osakeanti 1.5. - 16.8.</Title>

        <Prose large>
          Evon Capitalilla on käynnissä kaksi osakeantia. Osakkaalla on
          mahdollisuus osallistua näistä kumpaankin. Suunnatussa A-annissa on
          kenen tahansa mahdolista merkitä yhitön A-sarjan osakkeita.
          Merkintäoikeusannissa taas yhtiön aiemmat osakkaat saavat merkitä
          B-osakkeita rajallisen määrän.
        </Prose>

        <Form
          onSubmit={async (event) => {
            event.preventDefault();
            setIsSubmitting(true);

            const res = await fetch("/api/osakeanti/portal", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ a: a, b: b }),
            });

            if (!res.ok) {
              toast.error("Virheellinen merkintä");
              supabase
                .from("osakeanti_portal")
                .select("a,b,max_b")
                .eq("email", user.email)
                .then((r) => r.data[0])
                .then((data) => {
                  setA(data.a || 0);
                  setB(data.b || 0);
                  setMax(data.max_b);
                });
              setIsSubmitting(false);
              return;
            }

            setIsSubmitting(false);
            toast.success("Merkintä vastaanotettu!");
          }}
        >
          <div className="bg-neutral-800 p-5 rounded">
            <p>A-osake: 0,40 EUR kpl, minimimerkintä 250 kpl</p>
            <p>B-osake: 0,41 EUR kpl, maksimimerkintä {max} kpl</p>
            <div className="mt-4 text-sm">
              <p className="">Maksimimäärän laskentakaava</p>
              <div className="bg-neutral-700 rounded px-4 py-2 mt-1">
                <pre>x = B-osakkeiden lukumäärä</pre>
                <pre>maksimi = ⌈x / 3⌉</pre>
              </div>
            </div>
          </div>

          <Prose large> Haluan merkitä...</Prose>

          <Input
            label="A-osaketta"
            type="number"
            step={1}
            min={250}
            required
            value={a}
            onChange={(event) => {
              setA(event.target.value);
            }}
          />

          <Input
            label={`B-osaketta (max ${max ? max : "loading..."})`}
            type="number"
            step={1}
            required
            value={b}
            max={max}
            onChange={(event) => {
              setB(event.target.value);
            }}
          />

          <Prose large>
            Yhteensä {Math.round((a * 0.4 + b * 0.41) * 100) / 100} euroa.
          </Prose>

          <div className="bg-rose-500 bg-opacity-20 rounded p-5 my-4">
            <b>Huom!</b>
            <p className="mt-2">
              Myös merkintäoikeusannin merkinnät ovat <b>sitovia</b>. Voit siis
              myöhemmin vain <b>korottaa merkintääsi!</b>
            </p>
            <p className="mt-2">A-annin osalta, tutustu ehtoihin.</p>
            <div className="bg-rose-500 bg-opacity-30 rounded p-4 mt-4 space-x-4">
              <input
                type="checkbox"
                required
                className="accent-indigo-500 transform scale-150"
              />
              <label>
                Ymmärrän mitä olen tekemässä{" "}
                <span className="text-rose-500">*</span>
              </label>
            </div>
          </div>

          <Button type="submit" loading={isSubmitting}>
            Tee merkintä
          </Button>
        </Form>
      </Section>
    </Portal>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}