import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "./Icons";
import {motion} from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    return (
        <header className="w-full px-32 py-8 font-medium flex justify-between items-center dark:text-light">
            
             {/* Application Pages Links */}
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mr-4" />
                <CustomLink href="/projects" title="Projects" className="mr-4"/>
                <CustomLink href="/articles" title="Articles" className="mr-4" />
            </nav>

            {/* Social Media Icons  */}
           
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href='https://twitter.com/qasima6' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3"><TwitterIcon /></motion.a>
                <motion.a href='https://github.com/iamqasimali' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3"><GithubIcon/></motion.a>
                <motion.a href='https://www.linkedin.com/in/qasim-zahid-a69326a7/' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3"><LinkedInIcon /></motion.a>
                <motion.a href='https://www.pinterest.com/qasimali7566675/' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3"><PinterestIcon /></motion.a>
                <motion.a href='https://www.pinterest.com/qasimali7566675/' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3"><DribbbleIcon /></motion.a>
            
                 {/* Them Switcher */}
                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light" )}
                    className={`ml-3 flex items-center justify-center rounded-full ${mode === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}`}
                >
                    {
                        mode === 'dark' ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                    }
                </button>

            </nav>

            {/* Logo */}

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
           
        </header>
    )
}

export default NavBar