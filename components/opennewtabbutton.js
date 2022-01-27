import Link from "next/link";
import Image from "next/image";
import { bucket } from "@lib/supabase";

export default function OpenNewTabButton({ href, children }) {
  return (
    <div className="flex">
      <Link href={href} passHref>
        <a
          target="_blank"
          className="flex items-center group text-white text-opacity-80 hover:text-opacity-100 tracking-wider transition bg-gray-800 rounded py-2 px-4 gap-2 mt-4"
        >
          {children}
          <Image
            src={`${bucket}/openNewTab.svg`}
            alt=""
            width={22}
            height={22}
            className="opacity-80 group-hover:opacity-100 transition"
          />
        </a>
      </Link>
    </div>
  );
}
