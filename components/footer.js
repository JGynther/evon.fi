import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-10 flex justify-center text-base text-center bg-gray-900 text-white">
            <div className="opacity-80">
                <p>©2021 - Evon Group</p>
                <div className="flex gap-5 my-2">
                    <Link href="/tietosuojaseloste.pdf" passHref>
                        <a target="_blank" className="transition hover:text-indigo-500">
                        Tietosuojaseloste
                        </a>
                    </Link>
                    <Link href="/contact" passHref>
                        <a className="transition hover:text-indigo-500">
                            Yhteystiedot
                        </a>
                    </Link>
                    <Link href="/portal" passHref>
                        <a className="transition hover:text-indigo-500">
                            Omistajaportaali
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
