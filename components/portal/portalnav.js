import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { bucket } from "@lib/supabase";
import Logo from "@components/logo";
import { Button } from "@components/button";

export default function PortalNav({ user, noSignout }) {
  const router = useRouter();

  const signOut = () => {
    router.push("/signout");
  };

  return (
    <nav>
      <div className="flex flex-wrap justify-between items-center mx-5 md:mx-24 pt-8 md:py-8">
        <LogoComponent />
        <div className="flex flex-wrap mt-5 md:mt-0 md:gap-10 items-center justify-center md:justify-start">
          {user && (
            <Link href="/portal/profile" passHref>
              <a className="group hover:bg-gray-800 transition rounded py-1 px-3 text-white text-opacity-80 tracking-widest flex items-center gap-3">
                <span className="flex items-center justify-center bg-gray-800 group-hover:bg-gray-900 transition rounded-full h-9 w-9">
                  <Image
                    src={`${bucket}/usericon.svg`}
                    alt=""
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                </span>
                {user.email}
              </a>
            </Link>
          )}
          {!noSignout && <Button onClick={signOut}>Kirjaudu ulos</Button>}
        </div>
      </div>
    </nav>
  );
}

function LogoComponent() {
  return (
    <Link href="/portal" passHref>
      <a className="flex flex-wrap justify-center md:justify-start items-center gap-4 my-4">
        <Logo />
        <div className="flex items-center gap-4">
          <p className="tracking-widest text-2xl cursor-pointer font-semibold">
            OMISTAJAPORTAALI
          </p>
        </div>
      </a>
    </Link>
  );
}
