export const varients = {
    "start":{
        opacity: 0,
        y: 32
    },
    "disappear":{
        opacity: 0,
        y: -32
    },
    "fade_in":{
        opacity: 1,
        y: 0
    },
    delay_appear: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: .5 * index
            }
    }),
}