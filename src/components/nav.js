import Link from "next/link"
import Image from "next/image"
import Arrow from "../../public/arrow.svg"

export default function Navigation() {
    return (
        <nav className="flex items-center justify-between mx-24 py-8 text-lg">

        <Link href="/" passHref>
          <a className="tracking-widest">
            EVON CAPITAL
          </a>
        </Link>

        <div className="flex gap-10 items-center tracking-wider ">

            <Link href="https://merch.evon.fi" passHref>
                <a className="transition hover:text-indigo-500">
                    Merch
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