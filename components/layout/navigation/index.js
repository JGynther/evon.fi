import { useState } from "react";
import { LogoComponent } from "./logo";
import NavItem from "./navitem";
import Button from "@components/button";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div className="sticky top-0 z-10 mb-10">
      <nav>
        <div className="bg-neutral-900 border-b border-neutral-700">
          <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center py-5">
            <LogoComponent />
            <button
              className="ml-10 text-xl md:hidden text-white cursor-pointer"
              onClick={handleClick}
            >
              {open ? "-" : "+"}
            </button>
            <div
              className={`${
                open ? "grid justify-start" : "hidden"
              } md:flex flex-wrap pt-8 pb-4 md:py-0 gap-8 md:gap-14 items-center`}
            >
              <NavItem href="/blog">Blogi</NavItem>
              <Button type="link" href="/portal">
                Omistajaportaali
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
