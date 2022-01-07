import Link from "next/link";
import OpenNewTab from "../public/openNewTab.svg";

export default function OpenNewTabButton({ href, children }) {
  return (
    <Link href={href} passHref>
      <a
        target="_blank"
        className="flex justify-center items-center gap-1 bg-gray-800 px-6 py-2 mt-4 rounded shadow text-white text-opacity-80 hover:text-opacity-100 transition max-w-min whitespace-nowrap"
      >
        {children}
        <OpenNewTab className="fill-current transform scale-75" />
      </a>
    </Link>
  );
}
