import { Link } from "react-router";
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from "react";
import { projects } from "../json/showcaseItems.json"
import { anticip_1s, anticip_2s, anticip_3s, anticip_500ms, cubicBez_1s } from "./transitionTypes";
import { varients } from './motion_variants'


export function Showcase() {
    let [isHovering, setHovering] = useState(false)

    const showcaseItems = projects.map((item, index) => (
        <motion.div
            variants={varients}
            key={index}
            initial="start"
            whileInView="delay_appear"
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
            <motion.h2
                variants={varients}
                initial={"start"}
                whileInView={{ opacity: 1, y: 0 }}
                transition={anticip_1s}
                viewport={{ once: true }}
            >Projects
            </motion.h2>
            {showcaseItems}
        </AnimatePresence>
    )
}