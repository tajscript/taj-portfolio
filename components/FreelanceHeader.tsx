import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png"

export default async function Header() {
    const client = createClient();

  const nav = await client.getSingle("freelance_nav");

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

                <>{nav.data.text}</>
                
                <PrismicNextLink field={nav.data.email_link}>
                <>{nav.data.email_text}</>
                </PrismicNextLink>
                
                <Link href="/">
                <>{nav.data.label}</>
                </Link>

            </nav>
        </header>
    )
}