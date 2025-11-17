import { stagger } from "motion"

export const container_variants = {
    hide:{
        opacity: 0,
        y: 32
    },
    show:{
        opacity: 1,
        y: 0,
        transition:{
            delayChildren: stagger(.25)
        }
    }
}

export const item_variants = {
    hide:{
        opacity: 0,
        y: 32
    },
    show:{
        opacity: 1,
        y: 0
    }
}

