import Section from "@components/section"
import Title from "@components/title"
import Subtitle from "@components/subtitle"
import Prose from "@components/prose"

import Navigation from "@components/nav"
import Footer from "@components/footer"

export default function Contact() {
    return (
        <div className="text-white bg-gray-900 grid gap-10 min-h-screen">
            <Navigation />
            <Footer />
        </div>
    )
}