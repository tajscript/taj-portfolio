import { createClient } from "@/prismicio";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png"
import { PrismicRichText } from "@prismicio/react";

import Styles from "@/styles/header.module.css"

export default async function Header() {
    const client = createClient();

  const nav = await client.getSingle("nav");

    return (
        <header className={Styles.header}>
            <nav className={Styles.nav}>
                <div className={Styles.logo}>
                    <Link href="/">
                        <Image 
                        src={Logo}
                        alt="Logo"
                        />
                    </Link>
                </div>

                <div className={Styles.nav__menu}>
                <ul>
                    <li>
                        <Link href="/#about">
                        <>{nav.data.about}</>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        <>{nav.data.projects}</>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        <>{nav.data.contact}</>
                        </Link>
                    </li>
                </ul>
                </div>

                <div className={Styles.button}>
                    <Link href="/freelance">
                    <PrismicRichText field={nav.data.freelance} />
                    </Link>
                </div>

            </nav>
        </header>
    )
}