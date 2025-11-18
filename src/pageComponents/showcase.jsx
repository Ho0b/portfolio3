import { useEffect, useRef, useState } from "react";
import { leftArrow, rightArrow } from "../components/svgs";
import { motion } from "motion/react"
import { container_variants, item_fadeIn_1s, item_popIn_1s, item_variants } from "../components/motion_variants";

export default function Showcase() {

  let [activeCard, setActiveCard] = useState(0)
  let projectList = useRef()
  let projectCardOffset = useRef()
  let listLength = useRef()

  const projectTypes = ["Websites", "Games", "3D", "Films", "Photography"]

  useEffect(() => {
    listLength.current = projectList.current.children.length
    projectList.current.children.active.scrollIntoView()
  }, [])

  function cardLeft() {
    if (activeCard <= 0) {
      setActiveCard(listLength.current)
      return
    }
    setActiveCard(activeCard--)
    projectList.current.children.active.scrollIntoView()
    
    console.log(activeCard)
  }
  function cardRight() {
    if (activeCard >= listLength.current) {
      setActiveCard(0)
    }
    setActiveCard(activeCard++)
    projectList.current.children.active.scrollIntoView()
    console.log(activeCard)
  }

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
        className="flex_row"
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
              className="projectCard"
              id={index == activeCard ? "active" : ""}
              variants={item_fadeIn_1s}
            >
              {index + 1}
              <motion.h1 variants={item_variants} >title</motion.h1>
              <motion.p variants={item_variants} >this is section {index + 1}</motion.p>
            </motion.div>
          )
        )
        }
      </motion.div>

      <motion.div id="projectScroller">
        <motion.button id="backScroll" aria-label="scroll back" onClick={cardLeft} >{leftArrow}</motion.button>
        <motion.button id="nextScroll" aria-label="scroll next" onClick={cardRight} >{rightArrow}</motion.button>
      </motion.div>

    </motion.section>
  )
}