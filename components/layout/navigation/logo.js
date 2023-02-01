import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Image
      src="/logo.webp"
      alt="Logo. Monkey smoking a cigar and wearing a top hat."
      width={60}
      height={45}
      className="object-cover cursor-pointer"
    />
  );
}

export function LogoComponent() {
  return (
    <Link href="/" passHref>
      <span className="flex items-center gap-4">
        <Logo />
        <p className="tracking-widest text-xl md:text-2xl cursor-pointer font-serif">
          EVON CAPITAL
        </p>
      </span>
    </Link>
  );
}
