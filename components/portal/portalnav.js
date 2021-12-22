import Link from "next/link";
import Image from "next/image";
import BackArrowButton from "../backarrowbutton";
import { Button } from "@components/button";
import Logo from "../../public/logo.png";

import { signOut } from "next-auth/client";

export default function PortalNav({ noSignout }) {
  return (
    <nav>
      <div className="flex flex-wrap justify-between items-center mx-5 md:mx-24 pt-8 md:py-8">
        <div>
          <BackArrowButton>Takaisin etusivulle</BackArrowButton>
          <Link href="/portal" passHref>
            <a className="flex flex-wrap justify-center md:justify-start items-center gap-4 my-4">
              <div className="flex items-center gap-4">
                <Image
                  src={Logo}
                  alt=""
                  width={75}
                  height={60}
                  className="object-cover cursor-pointer"
                />
                <p className="tracking-widest text-2xl cursor-pointer font-semibold">
                  OMISTAJAPORTAALI
                </p>
              </div>
              <span className="text-white bg-indigo-500 py-1 px-3 rounded tracking-widest">
                BETA
              </span>
            </a>
          </Link>
        </div>
        {!noSignout && (
          <div>
            <Button onClick={signOut}>Kirjaudu ulos</Button>
          </div>
        )}
      </div>
    </nav>
  );
}
