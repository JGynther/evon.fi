import FooterItem from "./footeritem";

export default function Footer() {
  return (
    <footer className="py-7 border-t border-neutral-700">
      <div className="container mx-auto flex flex-wrap gap-5 md:gap-10 justify-center items-center">
        <span className="text-white text-opacity-80 tarcking-wide cursor-default ">
          © {new Date().getFullYear()} Evon Capital Oy Ab
        </span>
        <FooterItem href="/">Etusivu</FooterItem>
        <FooterItem href="/portal">Omistajaportaali</FooterItem>
        <FooterItem href="/blog">Blogi</FooterItem>
        <FooterItem href="/tietosuoja">Tietosuojaseloste</FooterItem>
        <FooterItem href="/contact">Yhteystiedot</FooterItem>
      </div>
    </footer>
  );
}
