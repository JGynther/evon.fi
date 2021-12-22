import Head from "next/head";
import { useRouter } from "next/router";

import { signIn } from "next-auth/client";

import { useState } from "react";

import PageWrapper from "@components/pagewrapper";
import PortalNav from "@components/portal/portalnav";

import Arrow from "../public/arrow.svg";

export default function Login() {
  const router = useRouter();
  const { callbackUrl, error } = router.query;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signIn("credentials", {
      callbackUrl: callbackUrl || `${process.env.NEXTAUTH_URL}/portal`,
      username: username,
      password: password,
    });
  };

  return (
    <PageWrapper>
      <Head>
        <title>Login - Evon Capital</title>
      </Head>
      <div>
        <PortalNav noSignout />
        <div className="flex justify-center">
          <div className="flex-grow max-w-xs md:max-w-md">
            {error === "invalidCredentials" && (
              <div className="bg-indigo-500 bg-opacity-50 text-white text-center text-opacity-80 tracking-wider rounded p-5 my-10">
                Error. Invalid username or password.
              </div>
            )}
            <Input label="Username" value={username} setValue={setUsername} />
            <Input
              label="Password"
              type="password"
              value={password}
              setValue={setPassword}
            />
            <div className="flex flex-grow justify-center">
              <button
                onClick={handleSignIn}
                className="
                  flex-grow bg-indigo-500 py-3 px-5 mt-2
                  rounded tracking-wider text-lg font-normal
                  transition hover:bg-indigo-700 focus:ring group text-center
                "
              >
                <span className="flex justify-center items-center">
                  Sign in{" "}
                  <Arrow className="transition transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

function Input({ label, type, value, setValue }) {
  return (
    <div className="grid my-2">
      <label className="text-lg tracking-wider">{label}</label>
      <input
        type={type || "text"}
        value={value}
        onInput={(e) => setValue(e.target.value)}
        className="flex-grow py-2 px-3 my-1 rounded bg-gray-800 shadow tracking-wider outline-none"
      />
    </div>
  );
}
