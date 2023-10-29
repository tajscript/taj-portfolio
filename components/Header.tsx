import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png"
import { PrismicRichText } from "@prismicio/react";

export default async function Header() {
    const client = createClient();

  const nav = await client.getSingle("nav");

    return (
        <header>
            <nav>
                <div>
                    <Link href="/">
                        <Image 
                        src={Logo}
                        alt="Logo"
                        width={100}
                        height={100}
                        />
                    </Link>
                </div>
                <ul>
                    <li>
                        <>{nav.data.about}</>
                    </li>
                    <li><>{nav.data.projects}</></li>
                    <li><>{nav.data.contact}</></li>
                </ul>

                <Link href="/freelance">
                <PrismicRichText field={nav.data.freelance} />
                </Link>
            </nav>
        </header>
    )
}