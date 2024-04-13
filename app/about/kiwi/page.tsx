export const dynamic = 'force-static'
import { Metadata } from "next"
import CallToAction from "./cta/page"
import Hero from "./hero/page"
import Iternary from "./iternary/page"

export const metadata: Metadata = {
    title: 'About',
    description: 'This is the about page',
}

export default async function About() {
    
    return (
        <main className="bg-hero-pattern h-screen fixed ">
            <Hero />
            <Iternary />
            <CallToAction />
        </main>
    )
}