import type { Metadata } from 'next';
import { Lato, Montserrat, Cormorant } from 'next/font/google';
import '@/styles/globals.css';
import { createClient, repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';

import Favicon from "@/public/assets/favicon.ico"

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

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");
 
  return {
    title: settings.data.site_title || "Taj Portfolio",
    description: settings.data.meta_description || "A portfolio website for a web developer",
    icons: [{ rel: "icon", url: Favicon.src }],
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${lato.variable} ${mont.variable} ${cormorant.variable}`}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        </body>
    </html>
  )
}
