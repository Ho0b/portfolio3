import { scale, stagger } from "motion"

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

export const item_fadeIn_1s = {
    hide:{
        opacity: 0,
        x: 32
    },
    show:{
        opacity: 1,
        x: 0
    }
}

export const item_popIn_1s = {
    hide:{
        opacity: 0,
        scale: 0
    },
    show:{
        opacity: 1,
        scale: 1
    }
}

