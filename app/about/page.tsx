export const dynamic = 'force-static'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'About',
    description: 'This is the about page',
}

export default async function About() {
    
    return (
        <main className="p-24">
            <Link href="/about/kiwi">Ujzeland</Link>
        </main>
    )
}