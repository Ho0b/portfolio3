import { useEffect, useRef, useState } from 'react'
import './App.css'
import RenderCanvas from './components/3DCanvas'
import { AnimatePresence, motion } from 'motion/react'
import { anticip_1s, anticip_250ms, anticip_2s, anticip_3s, anticip_500ms, cubicBez_1s, cubicBez_2s, cubicBez_3s, smooth1, smooth2 } from './components/transitionTypes'
import { closeSvg, sendSvg } from './components/svgs'
import { Showcase } from './components/Showcase'


function App() {
  let isDark = useRef(true)

  let dialogElement = useRef()
  let [isModalOpen, setModal] = useState(false)

  function EmailButton() {
    return (
      <button className='emailLink' onClick={() => { modalToggler(); dialogElement.current.showModal() }}>
        Email
        {sendSvg}
      </button>
    )
  }

  function modalToggler() {
    setModal(!isModalOpen);
  }


  return (
    <>
      <AnimatePresence>
          <motion.dialog
            ref={dialogElement}
            id='modal'
            key={0}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onKeyDown={(e) => {
              if (e.key == "Escape") {
                modalToggler()
              }
            }
            }>
            <button id='modalCloseButton' aria-label='close modal' onClick={()=>{modalToggler(); dialogElement.current.close()}}>
              {closeSvg}
            </button>

            <form action="submit" id='contactForm'>
              <label id='form_heading'>
                Have an idea?
              </label>

              <div>
                <label name="name">
                  Name
                  <input type="text" id="form_name" autoComplete='off' required />
                </label>

                <label name="email">
                  Email
                  <input type="text" id="form_email" autoComplete='off' required />
                </label>

                <label name="message">
                  Message
                  <textarea aria-label='message' name='message' required autoComplete='off'></textarea>
                </label>
              </div>

              <div id='socialLinks'>
                <a href='mailto:business.netrahun@gmail.com' aria-label='email'>business.netrahun@gmail.com</a>
                <a href='https://www.linkedin.com/in/nhun/' target='_blank'>Linkedin</a>
                <a href='https://www.instagram.com/netra.hun/' target='_blank'>Instagram</a>
                <a href='https://www.youtube.com/@netrahun' target='_blank'>Youtube</a>
              </div>

              <button aria-label='submit form' type='submit'>
                Send
              </button>

            </form>
          </motion.dialog>
      </AnimatePresence>

      <motion.header id='titleBar' initial={{ opacity: 0, y: -128 }} animate={{ opacity: 1, y: 0}} transition={anticip_500ms}>
        <button id='logo' onClick={() => { isDark.current == false ? document.body.classList.remove("light") : document.body.classList.add("light"); isDark.current = !isDark.current }}>
          <svg id="svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 520.57">
            <path d="M512.11,0v520.57h-111.55v-30.76c0-3.94-1.57-7.73-4.36-10.52L136.94,220.03c-9.37-9.37-25.39-2.73-25.39,10.52v290.03H0V0h111.55v30.73c0,3.94,1.57,7.73,4.36,10.52l259.26,259.26c9.37,9.37,25.39,2.73,25.39-10.52V0h111.55Z" />
            <path d="M567.89,0v520.57s111.55,0,111.55,0v-30.76c0-3.94,1.57-7.73,4.36-10.52l259.26-259.26c9.37-9.37,25.39-2.73,25.39,10.52v290.03s111.55,0,111.55,0V0s-111.55,0-111.55,0v30.73c0,3.94-1.57,7.73-4.36,10.52l-259.26,259.26c-9.37,9.37-25.39,2.73-25.39-10.52V0s-111.55,0-111.55,0Z" />
          </svg>
        </button>

        <nav id='horizontalBar' className='rounded8 color_sec'>
          <EmailButton />
        </nav>
      </motion.header>

      <main>
        <RenderCanvas />
          
        <motion.section id='showcase' className='flexCol' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={cubicBez_1s}>
          <Showcase />
        </motion.section>

        <section id='about' className='flexRow'>
            <div id='skills'>
            <h2>Skills</h2>
            <ul>
              <li>Graphic Design</li>
              <li>Video Editing</li>
              <li>Web Development</li>
              <li>Game Development</li>
              <li>3D Modeling</li>
              <li>UI/UX</li>
            </ul>
          </div>

          <div id='tools'>
            <h2>Tools</h2>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Premiere Pro</li>
              <li>VS Code</li>
              <li>Blender</li>
              <li>Unity Engine</li>
              <li>Figma / Framer</li>
              <li>n8n</li>
            </ul>
          </div>
          
          <div id='biography'>
            <h2>Hi! my name is Netra Hun!</h2>
            <p>I am a new UX Designer & Programmer passionate about delivering creative designs and code backed behind effective design strategies and methods</p>
            <p>I've done work as a social media manager for my University's E-Sports team: creating social media content and brand imagery that best represents the team, I was also a Teacher Assistant: helping new students learn to program by using Python</p>
            <p>Outside of school, I've done social media consulting for friends and family and have been building my own personal brand</p>
            <p>The projects that I've done aren't just social media and branding, I've made Websites, Unity Games, 3D models, Videos/Edits, Graphics and Animations</p>
          </div>

        </section>

      </main>

      <footer>
        <div className='flex_spaceBetween'>
          <svg id="footerIcon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 520.57">
            <path d="M512.11,0v520.57h-111.55v-30.76c0-3.94-1.57-7.73-4.36-10.52L136.94,220.03c-9.37-9.37-25.39-2.73-25.39,10.52v290.03H0V0h111.55v30.73c0,3.94,1.57,7.73,4.36,10.52l259.26,259.26c9.37,9.37,25.39,2.73,25.39-10.52V0h111.55Z" />
            <path d="M567.89,0v520.57s111.55,0,111.55,0v-30.76c0-3.94,1.57-7.73,4.36-10.52l259.26-259.26c9.37-9.37,25.39-2.73,25.39,10.52v290.03s111.55,0,111.55,0V0s-111.55,0-111.55,0v30.73c0,3.94-1.57,7.73-4.36,10.52l-259.26,259.26c-9.37,9.37-25.39,2.73-25.39-10.52V0s-111.55,0-111.55,0Z" />
          </svg>

          <EmailButton />
        </div>

        <ul>
          <li>
            <a href='https://www.linkedin.com/in/nhun/' target='_blank'>
              LINKEDIN
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/netra.hun/' target='_blank'>
              INSTAGRAM
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/@netrahun' target='_blank'>
              YOUTUBE
            </a>
          </li>

        </ul>
      </footer>
    </>
  )
}

export default App
