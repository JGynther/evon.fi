import { useState } from "react";

export default function NavMenu({ children }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <>
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
        {children}
      </div>
    </>
  );
}
