import { useState, useEffect } from "react";
import { supabase } from "@lib/supabase";
import { useRouter } from "next/router";
import Head from "next/head";

import PageWrapper from "@components/pagewrapper";
import PortalNav from "@components/portal/portalnav";
import Footer from "@components/footer";
import { Button } from "@components/button";

export default function Profile({ user }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [didChange, setDidChange] = useState(false);

  const router = useRouter();

  const handleEditing = async () => {
    if (editing === true && didChange) {
      const { data, error } = await supabase
        .from("userdata")
        .update([userData]);
      router.reload();
    }
    setEditing(!editing);
  };

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const { data, error } = await supabase.from("userdata").select();
    if (data[0] && !error) {
      setUserData(data[0]);
      setLoading(false);
    } else {
      createDataForUser();
      router.reload();
    }
  }

  async function createDataForUser() {
    const { data, error } = await supabase
      .from("userdata")
      .insert([{ id: user.id, email: user.email }]);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <PageWrapper>
      <Head>
        <title>Profile - {userData.email}</title>
      </Head>
      <PortalNav />
      <section className="container mx-auto">
        <div className="flex justify-center mx-4">
          <div className="flex-grow max-w-screen-md">
            <div className="flex justify-between items-center">
              <p className="text-xl">Profiili</p>
              <Button text="true" onClick={handleEditing}>
                {editing ? "Tallenna tiedot" : "Muokkaa tietoja"}
              </Button>
            </div>

            <div className="bg-indigo-500 bg-opacity-50 my-5 py-2 rounded text-center text-xl tracking-wider">
              {editing
                ? 'Tallentaaksesi, klikkaa "Tallenna tiedot"'
                : 'Muokataksesi tietoja, klikkaa "Muokkaa tietoja"'}
            </div>

            <form className="grid gap-5">
              <Field name="email" data={userData} label="Sähköpostiosoite" />
              {[
                { type: "tel", name: "phone", label: "Puhelinnumero" },
                { name: "firstname", label: "Etunimi" },
                { name: "middlenames", label: "Toiset nimet" },
                { name: "lastname", label: "Sukunimi" },
                { name: "address", label: "Lähiosoite" },
                { name: "postalcode", label: "Postinumero" },
                { name: "city", label: "Kaupunki" },
                { name: "country", label: "Maa" },
              ].map((obj) => (
                <Field
                  key={obj.name}
                  type={obj.type || "text"}
                  name={obj.name}
                  didChange={setDidChange}
                  data={userData}
                  label={obj.label}
                  editing={editing}
                />
              ))}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
}

function Field({ data, didChange, name, editing, label, type }) {
  const handleChange = (e) => {
    data[name] = e.target.value;
    didChange(true);
  };
  return (
    <div className="grid md:flex flex-grow flex-wrap items-center md:justify-between">
      <label className="text-lg">{label}</label>
      <input
        type={type || "text"}
        disabled={!editing}
        defaultValue={data[name]}
        onChange={handleChange}
        className={`py-1 px-4 rounded bg-gray-800 text-xl text-white ${
          editing ? "" : "cursor-not-allowed text-opacity-50"
        }`}
      />
    </div>
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
