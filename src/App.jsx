import { useEffect, useRef, useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "motion/react";
import { Heading } from "./pageComponents/headingNav";
import { leftArrow, myIcon, rightArrow, upArrow } from "./components/svgs";
import Showcase from "./pageComponents/showcase";
import Contact from "./pageComponents/contact";

function App() {
  let isDark = useRef(true);

  return (
    <>
      <Heading/>
      
      <Showcase/>

      <Contact/>

      <button type="button" className="goBackUp" onClick={()=>{scrollTo(0,0)}}>{upArrow}</button>

      <footer>
        {myIcon}
        <div>Created By Netra Hun</div>
      </footer>

    </>
  );
}

export default App;
