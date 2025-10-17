import { Link } from "react-router";
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from "react";
import { projects } from "../json/showcaseItems.json"
import { anticip_1s, anticip_2s, anticip_3s, anticip_500ms, cubicBez_1s } from "./transitionTypes";
import { computerSvg, movieSvg } from "./svgs";


export function Showcase() {
    let [isHovering, setHovering] = useState(false)

    let variants = {
        appear:{
            opacity: 1,
            y: 0
        },
        disappear:{
            opacity: 0,
            y: -128
        }
    }

    const showcaseItems = projects.map((item, index)=>(
        <motion.div 
            variants={variants} 
            key={index} 
            initial={{opacity:0, y: 128}} 
            animate={"appear"} exit={"disappear"} 
            transition={anticip_2s}
        >
            <Link
                className='showcaseItem'
                to={item.project_path}
            >
                {item.project_type == 1 ? computerSvg : movieSvg}
                {item.project_name}
            </Link>
        </motion.div>
        )
    )

    return (
        <AnimatePresence>
            {showcaseItems}
        </AnimatePresence>
    )
}