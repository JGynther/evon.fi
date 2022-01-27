import Link from "next/link";
import Image from "next/image";
import Spinner from "@components/spinner";
import { bucket } from "@lib/supabase";

const Arrow = () => (
  <Image
    src={`${bucket}/arrow.svg`}
    alt=""
    className="transition transform group-hover:translate-x-1 text-white"
    width={24}
    height={24}
  />
);

export function LinkButton({ href, children }) {
  return (
    <Link href={href} passHref>
      <button
        className="
        bg-indigo-500 py-3 px-5 my-2 rounded tracking-wider text-lg my-8 font-normal
        transition hover:bg-indigo-700 focus:ring group text-center
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

export function Button({ onClick, loading, children, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-indigo-500 py-3 px-5 my-2 rounded tracking-wider text-lg my-8 font-normal
        transition text-center
        ${
          props.disabled
            ? "opacity-50 cursor-not-allowed"
            : props.text
            ? "group bg-transparent hover:underline my-0"
            : "focus:ring group hover:bg-indigo-700"
        }
      `}
      {...props}
    >
      <span className="flex justify-center items-center">
        {loading && <Spinner classProps="mr-3" />}
        {children}
        <Arrow />
      </span>
    </button>
  );
}
