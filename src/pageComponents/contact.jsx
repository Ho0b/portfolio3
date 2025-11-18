import { motion } from "motion/react"

export default function Contact(){

    function formHandler(e){
        e.preventDefaults()
    }

    return(
        <motion.section id="contact">

            <motion.div>
                <span>Let's</span>
                <span>Start</span>
                <span>Something!</span>
            </motion.div>

            <motion.div id="formContainer">
                <form onSubmit={e=>formHandler(e)}>
                    <div>
                        <label htmlFor="form_name">
                        Name
                        </label>
                        <input type="text" name="name" id="form_name" autoComplete="off"/>
                    </div>
                    
                    <div>
                        <label htmlFor="form_email">
                        Email
                        </label>
                        <input type="email" name="email" id="form_email" autoComplete="off"/>
                    </div>

                    <div>
                        <label htmlFor="form_message">
                        Message
                        </label>
                        <textarea type="message" name="message" id="form_message" autoComplete="off"></textarea>
                    </div>

                    <div>
                        <div id="socials"></div>
                        <button type="submit"></button>
                    </div>
                    
                </form>
            </motion.div>

        </motion.section>
    )
}