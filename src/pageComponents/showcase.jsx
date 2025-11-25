import { useEffect, useRef, useState } from "react";
import { leftArrow, rightArrow } from "../components/svgs";
import { motion } from "motion/react"
import { container_variants, item_fadeIn_1s, item_popIn_1s, item_variants } from "../components/motion_variants";
import { inView } from "motion";

export default function Showcase() {

  let [activeCard, setActiveCard] = useState(0)
  let projectList = useRef()
  let activeItem = useRef()

  const projectTypes = ["Websites", "Games", "3D", "Films", "Photography"]

  inView("#active", (ele)=>{console.log(ele)})

  return (
    <motion.section
      id="showcaseContainer"
    >
      <motion.ul
        id="projectsSelector"
        variants={container_variants}
        initial="hide"
        animate="show"
      >
        {projectTypes.map((item, index) => (
          <motion.li key={index} variants={item_popIn_1s}>
            {item}
          </motion.li>
        ))

        }
      </motion.ul>

      <motion.div
        id="projectsDisplay"
        ref={projectList}
        variants={container_variants}
        initial="hide"
        animate="show"
      >
        {Array.from({ length: 10 }).map(
          (_, index) =>
          (
            <motion.div
              key={index}
              ref={activeItem}
              className="projectCard"
              variants={item_fadeIn_1s}
            >
              <motion.h1 variants={item_variants} >title</motion.h1>
              <motion.p variants={item_variants} >this is section {index + 1}</motion.p>
            </motion.div>
          )
        )
        }
      </motion.div>

    </motion.section>
  )
}