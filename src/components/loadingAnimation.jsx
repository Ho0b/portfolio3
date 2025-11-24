import { animate, color, motion, scale, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function LoadingAnimation({ duration }) {
    const count = useMotionValue(0)
    const rounder = useTransform(() => Math.round(count.get()))

    const countContainer = {
        hide:{
            opacity: 0,
            y: -32
        },
        show:{
            opacity: 1,
            y: 0
        }
    }

    const item_animation = {
        hide:{
            opacity: 0,
            scale: 0,
            color: "#EEEEEE"
        },
        show:{
            opacity: 1,
            scale: 10,
            color: "#C5E50C"
        }
    }


    useEffect(() => {
        const controls = animate(count, 100, { duration: duration })
        return () => controls.stop()
    }, [])

    return (
        <motion.div key={1} id="loadAnimation" variants={countContainer} initial="hide" animate="show" exit={{opacity: 0, y: -32, backgroundColor: "#ffffff"}}>
            <motion.p
                variants={item_animation}
                transition={{ duration: duration, ease: "easeInOut" }}
            >{rounder}
            </motion.p>
        </motion.div>
    )
}