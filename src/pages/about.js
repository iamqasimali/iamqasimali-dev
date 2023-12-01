import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import profilepic2 from "../../public/images/profile/developer-pic.jpeg"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000})
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]) 

    useEffect(() => {
        springValue.on("change", (latest) => {
            if( ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        }, [springValue, value])

    })

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Qasim Ali Zahid | About Page</title>
                <meta name="discription" content="any description" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16"/>
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                            <p className="font-medium">
                                Hi, I'm Qasim Ali Zahid, a passionate developer who loves working with Ruby on Rails.
                                 I've spent the last 5 years honing my skills and gaining experience in this amazing framework. 
                                 I am always looking for new and innovative ways to bring my clients' visions to life.
                            </p>
                            <p className="font-medium my-4">
                                I believe that design is about more than just making things look pretty – it's about solving problems and 
                                creating intuitive, enjoyable experiences for users.
                                During my time as a Rails developer, I've worked on a variety of projects, from small startups to large enterprises.
                                I've built custom web applications, created RESTful APIs, integrated third-party services, and optimized database performance.
                            </p>
                            <p className="font-medium my-4">
                            I'm a problem solver at heart, and I love tackling complex challenges.
                            I'm constantly learning and keeping up-to-date with the latest technologies, including Rails 6 and beyond.
                            I'm also experienced in working with front-end technologies like JavaScript, HTML, and CSS, TailwindCSS, ReactJS, NextJS, NodeJS, .
                            </p>
                            <p className="font-medium">
                                In addition to my technical skills, I'm a team player who values communication, collaboration, and transparency.
                                I believe that great software is built by great teams, and I'm always willing to lend a helping hand and share my expertise.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"></div>
                            <Image src={profilepic2} alt="Qasim Ali Zahid" className="w-full h-auto rounded-2xl" />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold ">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">satisfied clients</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold ">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">projects completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold ">
                                <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>   
            </main>
        </>
    )
}

export default about