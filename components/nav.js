import Link from "next/link"
import Image from "next/image"
import Arrow from "../public/arrow.svg"
import Logo from "../public/logo.png"

export default function Navigation() {
    return (
        <nav className="flex items-center justify-between mx-24 py-8 text-lg">

        <Link href="/" passHref>
            <div className="flex items-center gap-4">
                <Image src={Logo} alt="" width={75} height={60} className="object-cover cursor-pointer"/>
                <a className="tracking-widest text-2xl cursor-pointer font-semibold">
                    EVON CAPITAL
                </a>
            </div>
        </Link>

        <div className="flex gap-10 items-center tracking-wider ">

            <Link href="https://merch.evon.fi" passHref>
                <a className="transition hover:text-indigo-500 flex items-center cursor-not-allowed" disabled>
                    Merch
                    <span className="text-white bg-indigo-500 text-xs py-1 px-2 rounded ml-2">
                       Tulossa pian!
                    </span>
                </a>
            </Link>

            <Link href="/" passHref>
                <a className="transition hover:text-indigo-500">
                    Yritys
                </a>
            </Link>

            <Link href="/" passHref>
                <a className="transition hover:text-indigo-500">
                    Yhteystiedot
                </a>
            </Link>

            <Link href="/" passHref>
                <a>
                    <button className="border-2 transition hover:bg-indigo-500 border-indigo-500 rounded-lg py-2 px-5 group tracking-wider text-lg">
                        <span className="flex justify-center items-center">
                            Omistajille
                            <Arrow className="transition transform group-hover:translate-x-1 m-0"/>
                        </span>
                    </button>
                </a>
            </Link>
          
        </div>
      </nav>
    )
}