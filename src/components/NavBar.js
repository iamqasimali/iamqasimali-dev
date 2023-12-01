import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
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

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }
    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [Isopen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!Isopen);
    }

    return (
        <header className="w-full px-32 py-8 font-medium flex justify-between items-center dark:text-light relative">
            <button className="flex-col justify-center items-center flex lg:hidden" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${ Isopen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${ Isopen ? 'opacity-0' : 'opacity-100' }`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ Isopen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="w-full hidden justify-between items-center lg:flex">
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
            </div>

            {
                Isopen ?  
                
                <motion.div 
                    initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
                    animate={{scale: 1, opacity: 1}}

                    className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                    {/* Application Pages Links */}
                    <nav className="flex flex-col justify-center items-center">
                        <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                        <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
                        <CustomMobileLink href="/projects" title="Projects" className=""toggle={handleClick} />
                        <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick} />
                    </nav>

                    {/* Social Media Icons  */}
                
                    <nav className="flex items-center justify-center flex-wrap mt-2">
                        <motion.a href='https://twitter.com/qasima6' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-1 sm:mx-3"><TwitterIcon /></motion.a>
                        <motion.a href='https://github.com/iamqasimali' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-1 sm:mx-3 bg-light rounded-full dark:bg-dark"><GithubIcon/></motion.a>
                        <motion.a href='https://www.linkedin.com/in/qasim-zahid-a69326a7/' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-1 sm:mx-3"><LinkedInIcon /></motion.a>
                        <motion.a href='https://www.pinterest.com/qasimali7566675/' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-1 sm:mx-3"><PinterestIcon /></motion.a>
                        <motion.a href='https://www.pinterest.com/qasimali7566675/' target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 ml-1 sm:mx-3"><DribbbleIcon /></motion.a>
                    
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
                </motion.div>
                : null
            }

            {/* Logo */}

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
           
        </header>
    )
}

export default NavBar