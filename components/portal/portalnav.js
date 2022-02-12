import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { bucket } from "@lib/supabase";
import Logo from "@components/logo";
import { Arrow } from "@components/button";

export default function PortalNav({ user }) {
  return (
    <nav>
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between py-4">
        <LogoComponent />
        <div className="flex flex-wrap mt-8 md:mt-0 gap-10 items-center justify-center md:justify-start">
          <ProfileButton user={user} />
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}

function ProfileButton({ user }) {
  return (
    <>
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
    </>
  );
}

function LogoutButton() {
  const router = useRouter();
  const signOut = () => {
    router.push("/signout");
  };
  return (
    <button
      className="
        border-2 border-indigo-500 py-2 px-5 rounded tracking-wider text-lg font-normal
        transition hover:bg-indigo-500 focus:ring group text-center
      "
      onClick={signOut}
    >
      <span className="flex items-center justify-center">
        Kirjaudu ulos
        <Arrow />
      </span>
    </button>
  );
}

function LogoComponent() {
  return (
    <Link href="/portal" passHref>
      <a className="flex flex-wrap justify-center md:justify-start items-center gap-4">
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
