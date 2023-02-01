import Link from "next/link";

export default function NavItem({ href, children }) {
  return (
    <Link
      href={href}
      className="transition text-white text-opacity-80 hover:text-indigo-500"
    >
      {children}
    </Link>
  );
}
