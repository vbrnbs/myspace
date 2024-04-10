export const dynamic = 'force-static'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About',
    description: 'This is the about page',
}

export default async function About() {
    
    return (
        <main className="h-screen p-24">
            <h1 className="text-4xl">About</h1>
            <p className="text-lg">This is the about page</p>
        </main>
    )
}