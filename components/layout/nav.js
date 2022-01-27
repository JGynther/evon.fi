import Link from "next/link";
import { LinkButton } from "@components/button";
import Logo from "@components/logo";

export default function Navigation() {
  return (
    <nav className="flex flex-wrap items-center justify-center md:justify-between mx-5 md:mx-24 mb-8 md:mb-0 py-8 text-lg">
      <Link href="/" passHref>
        <a className="flex items-center gap-4">
          <Logo />
          <p className="tracking-widest text-2xl cursor-pointer font-semibold">
            EVON CAPITAL
          </p>
        </a>
      </Link>

      <div className="hidden md:flex md:flex-wrap md:gap-10 md:items-center md:tracking-wider">
        <a className="transition flex items-center cursor-not-allowed" disabled>
          Merch
          <span className="text-white bg-indigo-500 text-xs py-1 px-2 rounded ml-2">
            Tulossa pian!
          </span>
        </a>

        <Link href="/blog" passHref>
          <a className="transition hover:text-indigo-500">Blogi</a>
        </Link>

        <Link href="/" passHref>
          <a className="transition hover:text-indigo-500">Yritys</a>
        </Link>

        <Link href="/contact" passHref>
          <a className="transition hover:text-indigo-500">Yhteystiedot</a>
        </Link>

        <LinkButton href="/portal">Omistajille</LinkButton>
      </div>
    </nav>
  );
}
