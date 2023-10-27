import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png"

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
                    {nav.data.navigation.map(({link, label}) => (
                        <li key={label}>
                            <PrismicNextLink field={link}>
                            <>{label}</>
                            </PrismicNextLink>
                        </li>
                    ))}
                </ul>

                <PrismicNextLink field={nav.data.link}>
                <>{nav.data.label}</>
                </PrismicNextLink>
            </nav>
        </header>
    )
}