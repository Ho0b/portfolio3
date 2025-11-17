import { useEffect, useRef, useState } from "react";
import { leftArrow, rightArrow } from "../components/svgs";
import { motion } from "motion/react"

export default function Showcase(){

    let [activeCard, setActiveCard]= useState(0)

    let projectList = useRef()

    let projectCardOffset = useRef()
    let listLength = useRef()

    useEffect(()=>{
        listLength.current = projectList.current.children.length
        projectList.current.children.active.scrollIntoView()
        console.log(activeCard)
    }, [activeCard])

    function cardLeft(){
      projectCardOffset.current = projectList.current.children.active.offsetLeft
        if (activeCard <= 0){
          setActiveCard(listLength.current)
          return
        }
        setActiveCard(activeCard--)
        
    }
    function cardRight(){
      projectCardOffset.current = projectList.current.children.active.offsetLeft
        if (activeCard >= listLength.current){
          setActiveCard(0)
        }
      setActiveCard(activeCard++)
    }

    return(
        <motion.div
          id="showcaseContainer"
        >
        <ul id="projectsSelector">
          <li>
            Websites
          </li>
          <li>
            Games
          </li>
          <li>
            3D
          </li>
          <li>
            Films
          </li>
          <li>
            Photography
          </li>
        </ul>

        <motion.div id="projectsDisplay" className="flex_row" ref={projectList}>
            {Array.from({length: 10}).map(
                (_, index)=>
                    (
                        <div key={index} className="projectCard" id={index == activeCard ? "active" : ""}>
                        {index + 1}
                        <h1>title</h1>
                        <p>this is section {index + 1}</p>
                        </div>
                    )
                )
            }
        </motion.div>

        <motion.div id="projectScroller">
          <button id="backScroll" aria-label="scroll back" onClick={cardLeft}>{leftArrow}</button>
          <button id="nextScroll" aria-label="scroll next" onClick={cardRight}>{rightArrow}</button>
        </motion.div>
        
      </motion.div>
    )
}