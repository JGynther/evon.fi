import Link from "next/link";
import Arrow from "../public/arrow.svg";

export default function BackArrowButton({ children }) {
  return (
    <Link href="/" passHref>
      <div className="group transition">
        <button className="flex items-center text-indigo-500 group-hover:text-indigo-700 mt-5 text-lg tracking-wider">
          <Arrow className="fill-current transform rotate-180 group-hover:-translate-x-1 transition" />
          {children}
        </button>
      </div>
    </Link>
  );
}
