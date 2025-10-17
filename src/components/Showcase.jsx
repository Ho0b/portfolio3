import { Link } from "react-router";
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from "react";
import { projects } from "../json/showcaseItems.json"
import { anticip_1s, anticip_2s, anticip_3s, anticip_500ms, cubicBez_1s } from "./transitionTypes";
import { computerSvg, movieSvg } from "./svgs";


export function Showcase() {
    let [isHovering, setHovering] = useState(false)

    let variants = {
        start:{
            opacity:0,
            y: 32
        },
        appear: (index)=>({
            opacity: 1,
            y: 0,
            transition:{
                delay: .25 * index
            }
        }),
        disappear:{
            opacity: 0,
            y: -32
        }
    }

    const showcaseItems = projects.map((item, index)=>(
        <motion.div 
            variants={variants} 
            key={index} 
            initial="start"
            whileInView="appear"
            exit="disappear"
            viewport={{ once: true }}
            transition={anticip_1s}
            custom={index}
            
        >
            <Link
                className='showcaseItem'
                to={item.project_path}
            >
                <span>{item.project_type}</span>
                {item.project_name}
            </Link>
        </motion.div>
        )
    )

    return (
        <AnimatePresence>
            <motion.h2 initial={{opacity: 0, y: 32}} animate={{opacity: 1, y:0}} transition={anticip_1s}>Projects</motion.h2>
            {showcaseItems}
        </AnimatePresence>
    )
}