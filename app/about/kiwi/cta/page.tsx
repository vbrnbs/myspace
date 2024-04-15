export const dynamic = 'force-static'
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Book your New Zealand adventure',
    description: 'Book your New Zealand adventure',
}

export default async function CallToAction() {
    
    return (
        <main className="">
            <Button>Foglalja le kalandját most!</Button>
        </main>
    )
}
