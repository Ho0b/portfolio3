import { motion } from "motion/react"
import { emailIcon, githubIcon, linkedinIcon, youtubeIcon } from "../components/svgs"
import { container_variants, item_fadeIn_1s, item_popIn_1s } from "../components/motion_variants"

export default function Contact(){

    function formHandler(e){
        e.preventDefault()
    }

    return(
        <motion.section id="contact" variants={container_variants} initial="hide" whileInView="show" viewport={{once: true}}>

            <motion.div id="contact_cta" variants={container_variants} initial="hide" whileInView="show" viewport={{once: true}}>
                <motion.span variants={item_fadeIn_1s}>Let's</motion.span>
                <motion.span variants={item_fadeIn_1s}>Start</motion.span>
                <motion.span variants={item_fadeIn_1s}>Something!</motion.span>
            </motion.div>

            <motion.form id="formContainer" onSubmit={e=>formHandler(e)} variants={container_variants} initial="hide" whileInView="show" viewport={{once: true}}>
                <motion.div className="form_group" variants={item_fadeIn_1s}>
                    <label htmlFor="form_name">
                    Name
                    </label>
                    <input type="text" name="name" id="form_name" required autoComplete="off"/>
                </motion.div>
                
                <motion.div className="form_group" variants={item_fadeIn_1s}>
                    <label htmlFor="form_email">
                    Email
                    </label>
                    <input type="email" name="email" id="form_email" required autoComplete="off"/>
                </motion.div>

                <motion.div className="form_group" variants={item_fadeIn_1s}>
                    <label htmlFor="form_message">
                    Message
                    </label>
                    <textarea type="message" name="message" id="form_message" required autoComplete="off"></textarea>
                </motion.div>

                <motion.div className="form_group flex_row" variants={item_fadeIn_1s}>
                    <motion.ul id="form_socials" variants={container_variants} initial="hide" whileInView="show" viewport={{once: true}}>
                        <motion.li variants={item_fadeIn_1s}><a href="https://www.linkedin.com/in/nhun/" target="_blank">{linkedinIcon}Indeed</a></motion.li>
                        <motion.li variants={item_fadeIn_1s}><a href="https://github.com/Ho0b" target="_blank">{githubIcon}Github</a></motion.li>
                        <motion.li variants={item_fadeIn_1s}><a href="https://www.youtube.com/@netrahun" target="_blank">{youtubeIcon}Youtube</a></motion.li>
                        <motion.li variants={item_fadeIn_1s}><a href="mailto:">{emailIcon}Email</a></motion.li>
                    </motion.ul>
                    
                    <motion.div id="buttonContainer" variants={container_variants} initial="hide" whileInView="show" viewport={{once: true}}>
                        <motion.button type="submit" variants={item_fadeIn_1s}>Send</motion.button>
                    </motion.div>
                </motion.div>
                
            </motion.form>

        </motion.section>
    )
}