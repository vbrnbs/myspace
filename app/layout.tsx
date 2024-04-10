import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brainspace',
  description: 'Created to stop mental health problems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
