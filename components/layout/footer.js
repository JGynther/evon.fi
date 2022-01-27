import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 flex justify-center text-lg md:text-base text-center bg-gray-900 text-white">
      <div className="opacity-80">
        <p>©{new Date().getFullYear()} - Evon Group</p>
        <div className="flex flex-col md:flex-row gap-5 mb-10 mt-5">
          <FooterItem href="/">Etusivu</FooterItem>
          <FooterItem href="/portal">Omistajaportaali</FooterItem>
          <FooterItem href="/blog">Blogi</FooterItem>
          <FooterItem href="/tietosuoja">Tietosuojaseloste</FooterItem>
          <FooterItem href="/contact">Yhteystiedot</FooterItem>
        </div>
      </div>
    </footer>
  );
}

function FooterItem({ href, children }) {
  return (
    <Link href={href} passHref>
      <a className="transition hover:text-indigo-500">{children}</a>
    </Link>
  );
}
