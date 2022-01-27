import Image from "next/image";
import { bucket } from "@lib/supabase";

export default function Logo() {
  return (
    <Image
      src={`${bucket}/logo.png`}
      alt="Monkey logo"
      width={75}
      height={60}
      className="object-cover cursor-pointer"
    />
  );
}
