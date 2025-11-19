import { motion } from "motion/react"
import { emailIcon, githubIcon, linkedinIcon, youtubeIcon } from "../components/svgs"

export default function Contact(){

    function formHandler(e){
        e.preventDefault()
    }

    return(
        <motion.section id="contact">

            <motion.div id="contact_cta">
                <span>Let's</span>
                <span>Start</span>
                <span>Something!</span>
            </motion.div>

            <motion.div id="formContainer">
                <form onSubmit={e=>formHandler(e)}>
                    <div className="form_group">
                        <label htmlFor="form_name">
                        Name
                        </label>
                        <input type="text" name="name" id="form_name" autoComplete="off"/>
                    </div>
                    
                    <div className="form_group">
                        <label htmlFor="form_email">
                        Email
                        </label>
                        <input type="email" name="email" id="form_email" autoComplete="off"/>
                    </div>

                    <div className="form_group">
                        <label htmlFor="form_message">
                        Message
                        </label>
                        <textarea type="message" name="message" id="form_message" autoComplete="off"></textarea>
                    </div>

                    <div className="form_group flex_row">
                        <ul id="form_socials">
                            <li>{linkedinIcon}Indeed</li>
                            <li>{githubIcon}Github</li>
                            <li>{youtubeIcon}Youtube</li>
                            <li>{emailIcon}Email</li>
                        </ul>
                        <div id="buttonContainer">
                        <button type="submit">Send</button>
                        </div>
                    </div>
                    
                </form>
            </motion.div>

        </motion.section>
    )
}