export const dynamic = 'force-static'
import { Metadata } from "next"
import CallToAction from "../cta/page"
import Image from "next/image"

export const metadata: Metadata = {
    title: 'Hero',
    description: 'This is the about page',
}

export default async function Hero() {
    
    return (
        <main className="flex flex-col items-center justify-around">
            <h3 className="text-4xl">kia ora Fedezze fel Új-Zéland vad szépségét!</h3>
            <div className="px-24">
            <h6 className="text-2xl">Kalandra fel! Izgalmas két hetes túrák szakértő magyar nyelvű idegenvezetőkkel.</h6>
            <CallToAction />
            </div>
            
        </main>
    )
}