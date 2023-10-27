import type { Metadata } from 'next'
import { Lato, Montserrat, Cormorant } from 'next/font/google';
import '@/styles/globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
})

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mont',
})

const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${mont.variable} ${cormorant.variable}`}>
        {children}
        </body>
    </html>
  )
}
