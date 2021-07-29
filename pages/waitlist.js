import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import Navigation from "../components/nav"
import Footer from "../components/footer"
import Arrow from "../public/arrow.svg"

export default function Waitlist() {
    return (
        <>
        <div className="text-white bg-gray-900 min-h-screen">

            <Head>
                <title>Odotuslista - Evon Capital</title>
            </Head>

            <Navigation/>

            <div className="flex justify-center mt-7">
                <main className="max-w-screen-lg grid grid-cols-2 gap-10 items-center">
                    
                    <div>
                        <h3 className="text-indigo-500 tracking-wider text-lg my-3">
                            Odotuslista
                        </h3>
                        <h1 className="text-4xl font-bold tracking-wide mb-8">
                            Heräsikö kiinnostuksesi?
                        </h1>
                        <p className="text-lg opacity-80 my-5">
                            Evon Capitalilla ei tällä hetkellä ole käynnissä rahoituskierrosta, mutta ei hätää! 
                            Täytä oheinen lomake liittyäksesi odotuslistallemme —
                            saat ensimmäisten joukossa tietoa uusista rahoituskierroksista.
                        </p>

                        <Link href="/" passHref>
                            <a>
                                <button className="text-indigo-500 group tracking-wider text-lg hover:bg-indigo-500 hover:bg-opacity-20 transition rounded-lg py-1 px-4">
                                    <span className="flex items-center">
                                        Evon Capital sijoituskohteena
                                        <Arrow className="transition transform group-hover:translate-x-1 fill-current"/>
                                    </span>
                                </button>
                            </a>
                        </Link>

                        <p className="text-sm opacity-60 mt-8">
                            Käsittelemme tietojasi <Link href=""><a className="text-indigo-500">tietosuojaselosteemme</a></Link> mukaisesti.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <form className="grid gap-5 p-12 mx-3 flex-grow rounded border-2 border-indigo-500">

                            <div className="grid gap-6 mb-5">
                                <p className="flex gap-5 items-center">
                                    <label>👉 Koko nimesi</label>
                                    <input type="text" className="bg-gray-800 px-4 py-1 rounded flex-grow"/>
                                </p>
                                <p className="flex gap-5 items-center">
                                    <label>✉️ Sähköposti</label>
                                    <input type="email" className="bg-gray-800 px-4 py-1 rounded flex-grow"/>
                                </p>
                                <p className="flex items-center gap-5">
                                    <label>📞 Puhelinnumero</label>
                                    <input type="tel" className="bg-gray-800 px-4 py-1 rounded flex-grow"/>
                                </p>
                            </div>

                            <p className="grid gap-3 items-center">
                                <label>📝 Referenssi koodi</label>
                                <input type="text" className="bg-gray-800 px-4 py-1 rounded"/>
                                <p className="text-xs opacity-60">Tämän olet voinut saada vaikka kaverilta. Ei pakollinen.</p>
                            </p>

                            <p className="flex items-center gap-3 mt-3">
                                <input type="checkbox" className="p-2 bg-gray-800 rounded"/>
                                <p className="text-sm">Olen lukenut, ymmärtänyt ja hyväksyn yleiset ehdot.</p>
                            </p>

                            <input type="submit" value="Lähetä" className="
                                bg-indigo-500 rounded py-2 hover:bg-indigo-700 cursor-pointer transition
                                text-lg tracking-wider mt-5
                            "/>
                        </form>
                    </div>

                </main>
            </div>
        </div>

        <Footer />

        </>
    )
}