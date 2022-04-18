import { supabase } from "@lib/supabase";
import { useEffect, useState } from "react";

import { Portal } from "@components/layout";
import Section from "@components/layout/section";
import Spinner from "@components/spinner";
import { Title, Prose } from "@components/text";

export default function Documents() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getFolders("documents").then((data) => setData(data));
  }, []);

  return (
    <Portal title="Documents - Evon Capital">
      <Section>
        <div className="mb-10">
          <Title>Dokumentit</Title>
          <Prose>
            Tästä löydät kaikki yhtiön viralliset jaossa olevat dokumentit.
            Dokumentit eivät ole linkkejä vaan avatessasi dokumentin kyseinen
            blob-tiedosto latautuu palvelimelta ja avataan automaattisesti uuten
            välilehteen. Jos tiedosto ei avaudu, tarkista, että sallit sivulla
            ponnahdusikkunat.
          </Prose>
        </div>
        {data ? (
          data.map((folder) => <Folder folder={folder} key={folder.name} />)
        ) : (
          <Spinner />
        )}
      </Section>
    </Portal>
  );
}

function Folder({ folder }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    getObjectsByFolder("documents", folder.name).then((data) => setData(data));
  });

  return (
    <div className="bg-neutral-800 rounded mb-5 p-5 divide-y divide-neutral-700">
      <h2 className="uppercase text-lg py-2 tracking-wider">{folder.name}</h2>
      <div className="flex flex-col divide-y divide-neutral-700">
        {data ? (
          data.map((object) => (
            <Object
              foldername={folder.name}
              object={object}
              key={object.name}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

function Object({ foldername, object }) {
  return (
    <a
      className="hover:bg-neutral-700 transition py-2 px-4 text-white text-opacity-80 cursor-pointer "
      onClick={() => {
        supabase.storage
          .from("documents")
          .download(`${foldername}/${object.name}`)
          .then((response) => {
            window.open(URL.createObjectURL(response.data));
          });
      }}
    >
      {object.name}
    </a>
  );
}

async function getObjectsByFolder(bucket, folder) {
  const { data, error } = await supabase.storage.from(bucket).list(folder);
  return data;
}

async function getFolders(bucket) {
  const { data, error } = await supabase.storage.from(bucket).list();
  return data;
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
