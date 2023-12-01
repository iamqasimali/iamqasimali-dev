import React from "react";
import {motion, useScroll} from "framer-motion";



const LiIcon = ({reference}) => {
 
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    );

    return (
        <div>
            <figure className="absolute left-0 stroke-dark dark:stroke-light">
                <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                    <circle cx="75" cy="50" r="20" className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none" />
                    <motion.circle cx="75" cy="50" r="20" className="fill-light dark:fill-dark stroke-[5px]" 
                    style={{
                       pathLength: scrollYProgress 
                    }}/>
                    <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark" />
                </svg>
            </figure> 
        </div>
    )
}


export default LiIcon