import { supabase } from "@lib/supabase";
import { useState, useEffect } from "react";
import Spinner from "@components/spinner";
import Row from "./row"
import { Title } from "@components/text";

export default function Portfolio() {
  const [data, setData] = useState(null);

  useEffect(() => {
    supabase
      .from("config")
      .select()
      .eq("id", "portfolio")
      .then((r) => {
        setData(r.data[0]);
      });
  }, []);

  return (
    <section className="flex flex-col items-center mb-10">
      <div className="space-y-5">
        <Title>Yhtiön osakesalkku</Title>
        <div className="max-w-min">
          {data ? data.data.map((item, index) => <Row key={index} data={item}/>) : <Spinner />}
        </div>
        <div className="flex flex-col items-end text-sm text-white text-opacity-80">
          Päivitetty: {data ? new Date(data.updated).toLocaleString() : <Spinner />}
          <p>* Kurssit päivittyvät noin 6 tunnin välein</p>
          <p>** USD ja SEK positiot arvioita euroina</p>
        </div>
      </div>
    </section>
  );
}