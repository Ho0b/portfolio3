import { useRef, useState } from 'react'
import './App.css'
import RenderCanvas from './components/3DCanvas'

function App() {

  let isDark = useRef(true)

  function themeHandler() {
    if (isDark.current == true) {
      // alert("turn to light")
      document.getElementById("themeButton").classList.replace("moon", "sun")
      document.body.classList.add("light")
      isDark.current = false
    } else if (isDark.current == false) {
      // alert("turn to dark")
      document.getElementById("themeButton").classList.replace("sun", "moon")
      document.body.classList.remove("light")
      isDark.current = true
    }
  }

  return (
    <main>
      <nav>
        <ul className='flexRow'>
          <li><h1>Netra Hun</h1></li>
          <li><button id='themeButton' className='moon' onClick={themeHandler}></button></li>
        </ul>
      </nav>

      <RenderCanvas/>
    </main>
  )
}

export default App
