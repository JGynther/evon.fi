import Link from "next/link"

import Arrow from "../public/arrow.svg"

import PageWrapper from "@components/pageWrapper"
import Section from "@components/section"
import Title from "@components/title"
import Subtitle from "@components/subtitle"
import Prose from "@components/prose"

import Navigation from "@components/nav"
import Footer from "@components/footer"

export default function Portal() {
  return (
      <PageWrapper>
          <Navigation />
          <Section>
            <Subtitle>Omistajaportaali</Subtitle>
            <Title>⛔️ Seis! Työmaa alue! ⛔️</Title>
            <Prose large>
              Evon Capitalin omistajaportaali on vielä kovaa tahtia rakenteilla.
              Ilmoitamme kaikille omistajille, kun portaaliin on mahdollista kirjautua. 
              Mikäli sinulla on sillä välin kysyttävää yhtiön sijoituksista, ota suoraan yhteyttä yhtiön johtoon.
            </Prose>

            <Link href="/" passHref>
              <button className="flex items-center text-indigo-500 hover:text-indigo-700 transition mt-5 text-lg tracking-wider">
                <Arrow className="fill-current transform rotate-180"/>
                Takaisin etusivulle
              </button>
            </Link>

          </Section>
          <Footer />
      </PageWrapper>
  )
}