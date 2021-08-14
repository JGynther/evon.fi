import Link from "next/link"

import Arrow from "../../public/arrow.svg"

import PageWrapper from "@components/pageWrapper"
import Section from "@components/section"
import Title from "@components/title"
import Subtitle from "@components/subtitle"
import Prose from "@components/prose"

import Navigation from "@components/nav"
import Footer from "@components/footer"

export default function Contact() {
    return (
        <PageWrapper>
            <Navigation />
                <Section>
                    <Link href="/" passHref>
                      <button className="flex items-center text-indigo-500 hover:text-indigo-700 transition my-5 text-lg tracking-wider">
                        <Arrow className="fill-current transform rotate-180"/>
                        Takaisin etusivulle
                      </button>
                    </Link>
                    <Title>Sitoumus lähetetty onnistuneesti!</Title>
                    <Prose large>Saat pian sähköpostiisti vahvistuksen merkinnästä. Mikäli merkintästi suhteen ilmenee jotain ongelmia, olemme sinuun yhteydessä henkilökohtaisesti.</Prose>
                    <Prose large>Tervetuloa omistajaksi!</Prose>
                </Section>
            <Footer />
        </PageWrapper>
    )
}