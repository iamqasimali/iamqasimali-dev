import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useRef } from 'react'
import {motion, useMotionValue} from "framer-motion"

import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import article3 from '../../public/images/articles/create modal component in react using react portals.png'
import article4 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import article5 from '../../public/images/articles/smooth scrolling in reactjs.png'




const FramerImage = motion(Image);


const FeaturedArticle = ({img, title, time, summery, link}) => {
    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl  relative'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-r-3xl" />
            <Link href={link} target="_blank" 
            className='w-full cursor-pointer inline-block overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration: 0.2}}/>
            </Link>

            <Link href={link} target="_blank" >
                <h2 className='captilize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
                <p className='text-sm mb-2'>{summery}</p>
                <span className='text-primary font-semibold'>{time}</span>
            </Link>

        </li>
    )
}

const MovingImg = ({title, img, link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (

        <Link href={link} target="_blank"
            onMouseMove = {handleMouse}
            onMouseLeave= {handleMouseLeave}
        >
            <h2 className='titleize text-lg font-semibold hover:underline'>
                {title}
            </h2>
            <FramerImage
            style={{x:x,y:y}}
            initial= {{opacity:0}}
            whileInView={{opacity: 1, transition: {duration: 0.2}}}
            src={img} alt={title} className="w-96 h-auto hidden absolute rounded-lg z-10" ref={imgRef} />
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition: {duration: 0.5, ease: "easeInOut" }}}
        viewport={{once: true}}
        className='w-full relative p-4 py-4 my-4 rounded-xl flex items-center justify-between bg-light text-dark
           first:mt-0  border border-solid border-dark 
           border-r-4 border-b-4'>
            
            <MovingImg  title={title} img={img} link={link}/>
            <span className='text-primary font-semibold pl-4'>{date}</span>
        </motion.li>
    )
}


const articles = () => {
  return (
    <>
        <Head>
            <title>Qasim Ali Zahid | Articles Page</title>
            <meta name="discription" content="any description" />
        </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!" className='mb-16'></AnimatedText>
            <ul className='grid grid-cols-2 gap-16'>
                
                <FeaturedArticle  
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                img={article1}
                summery= "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/" />

                <FeaturedArticle  
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                img={article2}
                summery= "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/" />

                

            </ul>

            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Articles</h2>
            
            <ul className=''>
                <Article 
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                img={article4}
                date="March 20, 2023"
                link="/"
                />

                <Article 
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                img={article3}
                date="March 21, 2023"
                link="/"
                />

                <Article 
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                img={article5}
                date="March 21, 2023"
                link="/"
                />
            </ul>


        </Layout>
      </main>
    </>
  )
}

export default articles
