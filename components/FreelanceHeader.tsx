import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png"

import Styles from "@/styles/header.module.css"

export default async function Header() {
    const client = createClient();

  const nav = await client.getSingle("freelance_nav");

    return (
        <header className={Styles.header}>
            <nav className={Styles.nav}>
                
                <div className={Styles.logo}>
                    <Link href="/">
                        <Image 
                        src={Logo}
                        alt="Logo"
                        width={100}
                        height={100}
                        />
                    </Link>
                </div>

                <div className={Styles.title}>
                <>{nav.data.text}</>
                </div>
                
                <div className={Styles.button}>
                <Link href="/">
                <>{nav.data.label}</>
                </Link>
                </div>

            </nav>
        </header>
    )
}