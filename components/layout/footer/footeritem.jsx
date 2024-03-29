import Link from "next/link";

export default function FooterItem({ href, children }) {
  return (
    <Link
      href={href}
      passHref
      className="transition text-white text-opacity-80 hover:text-indigo-500"
    >
      {children}
    </Link>
  );
}
