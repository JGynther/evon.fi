import Image from "next/image";
import Link from "next/link";
import { bucket } from "@lib/supabase";

export default function Logo() {
  return (
    <Image
      src={`${bucket}/logo.png`}
      alt="Logo. Monkey smoking a cigar while wearing a top hat."
      width={60}
      height={45}
      className="object-cover cursor-pointer"
    />
  );
}

export function LogoComponent() {
  return (
    <Link href="/" passHref>
      <a className="flex items-center gap-4">
        <Logo />
        <p className="tracking-widest text-xl md:text-2xl cursor-pointer font-serif">
          EVON CAPITAL
        </p>
      </a>
    </Link>
  );
}
