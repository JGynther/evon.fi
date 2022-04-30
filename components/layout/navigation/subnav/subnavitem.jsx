import Link from "next/link";

export default function SubNavItem({ children, href }) {
  return (
    <Link href={href} passHref>
      <a className="transition text-white text-opacity-80 hover:bg-neutral-800 py-2 px-10">
        {children}
      </a>
    </Link>
  );
}
