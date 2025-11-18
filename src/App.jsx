import { useEffect, useRef, useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "motion/react";
import {
  anticip_1s,
  anticip_250ms,
  anticip_2s,
  anticip_3s,
  anticip_500ms,
  cubicBez_1s,
  cubicBez_2s,
  cubicBez_3s,
  smooth1,
  smooth2,
} from "./components/transitionTypes";
import { Heading } from "./pageComponents/headingNav";
import { leftArrow, rightArrow } from "./components/svgs";
import Showcase from "./pageComponents/showcase";
import Contact from "./pageComponents/contact";

function App() {
  let isDark = useRef(true);

  return (
    <>
      <Heading/>
      
      <Showcase/>

      <Contact/>
    </>
  );
}

export default App;
