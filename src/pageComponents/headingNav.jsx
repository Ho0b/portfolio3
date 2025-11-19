import { Link } from "react-router";
import { motion } from "motion/react";
import "../App.css";
import { container_variants, item_variants } from "../components/motion_variants";

export function Heading(){
    return(
        <motion.header
            variants={container_variants}
            initial="hide"
            animate="show"
        >
            <motion.div variants={item_variants}>
                <Link to="/">Home</Link>
            </motion.div>
            <motion.div variants={item_variants}>
                <Link to="/info">Info</Link>
            </motion.div>
            <motion.div variants={item_variants}>
                <a  onClick={()=>{document.getElementById("contact").scrollIntoView()}}>Contact</a>
            </motion.div>
        </motion.header>

    )
}