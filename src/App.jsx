import { useEffect, useRef, useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "motion/react";
import { Heading } from "./pageComponents/headingNav";
import { leftArrow, myIcon, rightArrow, upArrow } from "./components/svgs";
import LoadingAnimation from "./components/loadingAnimation"
import Showcase from "./pageComponents/showcase";
import Contact from "./pageComponents/contact";

function App() {

  let isDark = useRef(true)

  let [loadingScreen, setLoading] = useState(true)

  let sceneSwitcher = useRef(<LoadingAnimation duration={2} />)

  function PortfolioContent(){
    return(
      <motion.div key={2}>
        <Heading />

        <Showcase />

        <Contact />

        <button type="button" className="goBackUp" onClick={() => { scrollTo(0, 0) }}>{upArrow}</button>

        <footer>
          {myIcon}
          <div>Created By Netra Hun</div>
        </footer>
      </motion.div>
    )
  }

  setTimeout(() => {
    setLoading(false)
    console.log("loading animation finished")
  }, 2000);

  if (loadingScreen == true) {
    sceneSwitcher.current
  } else{
    sceneSwitcher.current = <PortfolioContent/>
  }

  return <AnimatePresence>{sceneSwitcher.current}</AnimatePresence>

}

export default App;
