import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/artiove.png"
import project2 from "../../public/images/projects/agencyPic.png"
import project3 from "../../public/images/projects/badminton.png"
import project4 from "../../public/images/projects/carshare.png"
import project5 from "../../public/images/projects/diamond.png"
import project6 from "../../public/images/projects/intimeGDT.png"
import {motion} from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summery, img, link, github}) =>{
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light  shadow-2xl p-12 
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-r-3xl" />
            <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg ">
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration: 0.2}}/>
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
               <span className="text-primary font-medium text-xl">{type}</span>
               <Link href={link} target="_blank" className="hover:underline underline-offset-2"><h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2></Link>
               <p className="my-2 font-medium text-dark">{summery}</p>

               <div className="my-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 font-semibold">Vist Project</Link>
                </div>
            </div>        

        </article>
    )

}

const Project = ({type, title, img, link, github}) =>{
    return(
        <article className="w-full flex flex-col items-center justify-between
        rounded-2xl border border-solid border-dark bg-light p-6 relative
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-r-3xl" />
            <Link href={link} target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg ">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration: 0.2}} />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4 ">
               <span className="text-primary font-medium text-xl">{type}</span>
               <Link href={link} target="_blank" className="hover:underline underline-offset-2"><h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2></Link>

               <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className=" text-lg font-semibold underline">Vist</Link>
                    <Link href={github} target="_blank" className="w-8"><GithubIcon /></Link>
                </div>
            </div>        

        </article>
    )

}

const projects = () => {
    return (
        <>
            <Head>
                <title>Qasim Ali Zahid | Projects Page</title>
                <meta name="discription" content="any description" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Tumps Knowledge!" className="mb-16"></AnimatedText>

                    <div className="grid grid-cols-12 gap-24 gap-y-32">
                        <div className="col-span-12">
                        <FeaturedProject
                            title="Agency Pics"
                            summery="Agency.pics is a platform designed for connecting models, influencers, and creatives. It provides a space for users to showcase their portfolios and network with industry professionals.
                             The site aims to streamline the process of finding and collaborating with talent for various creative projects."
                            link="https://www.agency.pics/"
                            github={"https://github.com/iamqasimali"}
                            type="Featured Project"
                            img={project2}
                        />
                        </div>
                        <div className="col-span-6">
                        <Project
                            title="Artio"
                            summery="This project leverages Hugging Face's pretrained 'artio' model to generate images from textual descriptions, 
                            transforming written content into visually compelling imagery using advanced AI techniques."
                            link="/"
                            github={"https://github.com/iamqasimali"}
                            type="Featured Project"
                            img={project1}
                        />
                        </div>
                        <div className="col-span-6">
                        <Project
                            title="Badminton"
                            summery="The project is a comprehensive badminton tournament organization and management system featuring three distinct portals: Player, Tournament Management, and Admin. Built using the MERN stack,
                            this system leverages React for a dynamic front-end experience, Express.js for the backend API, and PostgreSQL for robust data management."
                            link="/"
                            github={"https://github.com/iamqasimali"}
                            type="Featured Project"
                            img={project3} 
                        />
                        </div>

                        <div className="col-span-12">
                        <FeaturedProject
                            title="Carshare"
                            summery="Carshare is a model of car rental where people rent cars for short periods of time, often by the hour. It differs from traditional car rental in that the owners of the cars are often private individuals themselves,
                            and the car sharing facilitator is generally distinct from the car owner. Car sharing is part of a larger trend of shared mobility."
                            link="/"
                            github={"https://github.com/iamqasimali"}
                            type="Featured Project"
                            img={project4}
                        />
                        </div>
                        <div className="col-span-6">
                        <Project
                            title="Diamond Chauffeur Limousine"
                            summery="Diamond Chauffeur Limousine offers premium car rental services, ensuring luxury and comfort for all your travel needs, built with PERN(PostgreSQL, Express, React, and Node) stack
                            built to provide superior and luxurious rental services that cater to the unique needs of every client."
                            link="/"
                            github={"https://github.com/iamqasimali"}
                            type="Featured Project"
                            img={project5}
                        />
                        </div>
                        <div className="col-span-6">
                        <Project
                            title="intimeGDT"
                            summery="The IntimeGDT provides access to a wide variety of datasets, allowing users to discover, evaluate, and access data in real-time. It offers data products from multiple providers, which can be seamlessly integrated into users' data ecosystems for various use cases, including analytics, machine learning, and business intelligence.
                            The marketplace includes datasets across different industries and domains, helping organizations make data-driven decisions."
                            link="/"
                            github={"https://github.com/iamqasimali"}
                            type="Featured Project"
                            img={project6}
                        />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}


export default projects