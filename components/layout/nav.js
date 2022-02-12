import { useState } from "react";
import Link from "next/link";
import { Arrow } from "@components/button";
import Logo from "@components/logo";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div className="sticky top-0 z-10">
      <nav>
        <div className="bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center py-4">
            <LogoComponent />
            <span
              className="pl-10 text-xl md:hidden text-white cursor-pointer"
              onClick={handleClick}
            >
              {open ? "-" : "+"}
            </span>
            <div
              className={`${
                open ? "grid justify-start" : "hidden"
              } md:flex flex-wrap pt-8 pb-4 md:py-0 gap-8 md:gap-14 items-center`}
            >
              <NavItem href="/blog">Blogi</NavItem>
              <NavItem href="/contact">Yhteystiedot</NavItem>
              <NavButton href="/portal">Omistajille</NavButton>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavButton({ href, children }) {
  return (
    <Link href={href} passHref>
      <button
        className="
        border-2 border-indigo-500 py-2 px-5 rounded tracking-wider text-lg font-normal
        transition hover:bg-indigo-500 focus:ring group text-center
      "
      >
        <span className="flex items-center justify-center">
          {children}
          <Arrow />
        </span>
      </button>
    </Link>
  );
}

function LogoComponent() {
  return (
    <Link href="/" passHref>
      <a className="flex items-center gap-4">
        <Logo />
        <p className="tracking-widest text-xl md:text-2xl cursor-pointer font-semibold">
          EVON CAPITAL
        </p>
      </a>
    </Link>
  );
}

function NavItem({ href, children }) {
  return (
    <Link href={href} passHref>
      <a className="transition hover:text-indigo-500 text-lg tracking-wider">
        {children}
      </a>
    </Link>
  );
}
