import Spinner from "@components/spinner";
import { supabase } from "@lib/supabase";
import { useState, useEffect } from "react";
import { Title } from "@components/text";
import Row from "./row";
import Section from "@components/layout/section";

export default function Transactions() {
  const [data, setData] = useState(null);
  useEffect(() => {
    supabase
      .from("config")
      .select()
      .eq("id", "transactions")
      .then((r) => {
        setData(r.data[0]);
      });
  }, []);
  return (
    <Section>
      <div className="flex flex-col">
        <div className="space-y-5">
          <Title>Viimeisimmät kaupat</Title>
          <div className="max-w-min text-white text-opacity-80">
            {data ? (
              data.data.map((item, index) => <Row key={index} data={item} />)
            ) : (
              <Spinner />
            )}
            <div className="text-sm text-white text-opacity-80 mt-2 text-right">
              Päivitetty:{" "}
              {data ? new Date(data.updated).toLocaleString() : <Spinner />}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
