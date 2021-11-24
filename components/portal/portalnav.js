import Link from "next/link";
import Image from "next/image";
import BackArrowButton from "../backarrowbutton";
import Logo from "../../public/logo.png";

export default function PortalNav() {
  return (
    <nav className="mx-5 md:mx-24 pt-8 md:py-8">
      <BackArrowButton>Takaisin etusivulle</BackArrowButton>
      <Link href="/portal" passHref>
        <a className="flex flex-wrap justify-center md:justify-start items-center gap-4 my-4">
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
          <span className="text-white bg-indigo-500 py-1 px-3 rounded tracking-widest">
            BETA
          </span>
        </a>
      </Link>
    </nav>
  );
}
