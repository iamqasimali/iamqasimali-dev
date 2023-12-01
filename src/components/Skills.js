import React from "react";
import {motion} from 'framer-motion';

const Skill = ({name, x, y}) => {
    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
        dark:bg-light dark:text-dark "
        whileHover={{scale:1.05}}
        initial={{ x:0, y: 0}}
        whileInView= {{ x:x, y:y, trasition: {duration: 1.5 } }}
        viewport={{once: true}}
        >
        {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer  dark:bg-light dark:text-dark"
                    whileHover={{scale:1.05}}>Web
                </motion.div>
                <Skill name="CSS" x="1vw" y="-10vw" />
                <Skill name="Javascript" x="5vw" y="10vw" />
                <Skill name="Ruby" x="-10vw" y="3vw" />
                <Skill name="ReactJS" x="8vw" y="-20vw" />
                <Skill name="Rails" x="-15vw" y="-11vw" />
                <Skill name="NodeJS" x="29vw" y="-3vw" />
                <Skill name="GitHub" x="-24vw" y="-15vw" />
                <Skill name="Heroku" x="-25vw" y="8vw" />
                <Skill name="RestAPI" x="-27vw" y="-6vw" />
                <Skill name="Webhooks" x="-35vw" y="-1vw" />
                <Skill name="JQuery" x="-15vw" y="-5vw" />
                <Skill name="PostgresQL" x="-18vw" y="17vw" />
                <Skill name="GraphQL" x="-5vw" y="17vw" />
                <Skill name="AWS" x="10vw" y="22vw" />
                <Skill name="Docker" x="-8vw" y="-17vw" />
                <Skill name="SendGrid" x="15vw" y="15vw" />
                <Skill name="Twilio" x="35vw" y="-12vw" />
                <Skill name="TailwindCSS" x="35vw" y="5vw" />
                <Skill name="Stripe" x="25vw" y="-10vw" />
                <Skill name="Devise" x="15vw" y="-10vw" />
                <Skill name="Python" x="15vw" y="-10vw" />
                <Skill name="Web Design" x="17vw" y="1vw" />
                <Skill name="NextJS" x="20vw" y="7vw" />
                <Skill name="Express" x="35vw" y="13vw" />
            </div>
        </>
    )
}

export default Skills