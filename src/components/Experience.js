import React, { useRef } from "react";
import {motion, useScroll} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work})=> {
    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div className="details"
            initial= {{y: 50}}
            whileInView= {{y: 0}}
            transition= {{duration: 0.5, type: "spring"}}
            >
                <h3 className="capitalize font-bold text-2xl">{position}&nbsp;<a href={companyLink} target={'_blank'} 
                className="text-primary capitalize">@{company}</a></h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {address}
                </span>
                <p className="font-medium w-full">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null) 
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Experiences
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                style={{scaleY: scrollYProgress}}
                className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"/>
                <ul>
                    <Details position="Team Lead | Senior Software Engineer"
                    company="Healthwire"
                    companyLink="https://www.linkedin.com/company/healthwirepk/mycompany/"
                    time="Nov 2022 - Present"
                    address="Lahore Punjabe, Pakistan"
                    work="As a Senior Software Engineer and Team Lead at Healthwire, I was responsible for leading a team of software engineers and managing project timelines and deliverables. I ensured the quality and scalability of software products by conducting code reviews,
                     mentoring junior team members, and staying up-to-date with emerging technologies and industry best practices. I also collaborated with other departments to ensure cross-functional alignment and supported company-wide initiatives. My responsibilities also included ensuring the team's skills
                      and knowledge remained current, and working with stakeholders to identify areas for improvement and implement process changes where necessary." />
                    
                    <Details position="Senior Software Engineer"
                    company="Techcreatix"
                    companyLink="https://www.linkedin.com/company/techcreatix/"
                    time="Dec 2021 - Nov 2022"
                    address="Lahore Punjabe, Pakistan"
                    work="As a Senior Software Engineer at Techcreatix, my responsibilities include designing, developing, and maintaining software applications to meet customer requirements.
                     I work closely with cross-functional teams to identify technical challenges and develop innovative solutions that meet business objectives. I also ensure that software products are scalable,
                    maintainable, and meet industry standards by conducting code reviews and implementing best practices. In addition, I stay up-to-date with emerging technologies and industry trends,
                    and provide technical guidance and mentorship to junior team members. My responsibilities also involve contributing to the company's knowledge base and participating in the continuous improvement of software development processes." />
                
                    <Details position="Senior Software Engineer"
                    company="SouthVille Solutions"
                    companyLink="https://www.linkedin.com/company/southville-solutions/"
                    time="Aug 2022 - Dec 2021"
                    address="Lahore Punjabe, Pakistan"
                    work="As a Senior Software Engineer at SouthVille Solutions, my responsibilities include developing and implementing high-quality software solutions that meet customer requirements.
                    I work collaboratively with cross-functional teams to identify technical challenges and propose innovative solutions. Additionally, I ensure that the software products are scalable, maintainable, and meet industry standards." />
                    
                    <Details position="Software Engineer"
                    company="Techcreatix"
                    companyLink="https://www.linkedin.com/company/techcreatix/"
                    time="Jun 2019 - Aug 2021"
                    address="Lahore Punjabe, Pakistan"
                    work="As a Software Engineer at Techcreatix, my responsibilities include fixing bugs and implementing new integrations to improve the functionality and user experience of software products.
                    I work collaboratively with cross-functional teams to identify technical challenges and propose solutions that meet business objectives. Additionally, I contribute to the development of software products by implementing best practices,
                    ensuring code quality, and staying up-to-date with emerging technologies and industry trends." />
                
                </ul>
            </div>
        </div>
    )
}


export default Experience