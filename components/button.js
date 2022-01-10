import Link from "next/link";
import Arrow from "../public/arrow.svg";

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
          <Arrow className="transition transform group-hover:translate-x-1" />
        </span>
      </button>
    </Link>
  );
}

export function Button({ onClick, children, ...props }) {
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
        {children}
        <Arrow className="transition transform group-hover:translate-x-1" />
      </span>
    </button>
  );
}
