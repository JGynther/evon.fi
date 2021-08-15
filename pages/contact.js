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
                    <Subtitle>Ota yhteyttä!</Subtitle>
                    <Title>Yhteystiedot</Title>
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="bg-gray-800 rounded shadow px-10 pt-5 pb-8">
                            <Subtitle>Yhtiön tiedot</Subtitle>
                            <Prose large>
                                Evon Group (Tree2u Oy) <br/> <br/> 
                                Y-tunnus: 3094125-8 <br/><br/> 
                                Rauhankatu 2F 69, 13100 Hämeenlinna
                            </Prose>
                        </div>
                        <div className="rounded shadow px-10 py-5">
                            <Prose large>
                                <b>Yleiset tiedustelut</b><br/>
                                <a href="mailto:info@evon.fi" className="text-indigo-500 hover:text-indigo-700 transition">info@evon.fi</a>
                            </Prose>
                            <Prose large> 
                                <b>Aatu Pulkkinen</b><br/>
                                Toimitusjohtaja <br/>
                                <a href="mailto:aatu.pulkkinen@evon.fi" className="text-indigo-500 hover:text-indigo-700 transition">aatu.pulkkinen@evon.fi</a>
                            </Prose>
                            <Prose large>
                                <b>Joona Gynther</b><br/> 
                                Hallituksen puheenjohtaja<br/>
                                <a href="mailto:joona.gynther@evon.fi" className="text-indigo-500 hover:text-indigo-700 transition">joona.gynther@evon.fi</a>
                            </Prose>
                        </div>
                    </div>
                    
                    <Prose large></Prose>
                </Section>
            <Footer />
        </PageWrapper>
    )
}