import Link from "next/link";

export default function LinkButton({ href, children }) {
  return (
    <Link href={href} passHref>
      <a
        role="button"
        className="bg-indigo-800 hover:bg-indigo-900 transition py-2 px-6 rounded tracking-wide"
      >
        {children}
      </a>
    </Link>
  );
}
