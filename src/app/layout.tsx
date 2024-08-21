import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faHouse, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import NavLink from "@/components/NavLink";
config.autoAddCss = false;

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="font-sans">
        <header className="bg-transparent w-full text-white border-b border-b-zinc-800">
            <nav className="flex items-center justify-center gap-5 p-5 ">
                <div>
                    <a href="/">                    <FontAwesomeIcon icon={faHouse} />
                    </a>
                </div>
                <div className="flex items-center justify-between gap-5 text-2xl">
                    <NavLink>
                        About
                    </NavLink>
                    <NavLink>
                        Projects
                    </NavLink>
                    <NavLink>
                        Contact
                    </NavLink>

                </div>
            </nav>
        </header>
        {children}
        </body>
        </html>
    );
}
