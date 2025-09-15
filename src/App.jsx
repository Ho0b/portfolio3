import { useState } from 'react'
import './App.css'

function App() {

  let [isDark, setIsDark] = useState(true)

  function themeHandler() {
    if (isDark == true) {
      document.getElementById("themeButton").classList.replace("moon", "sun")
      document.body.classList.add("light")
      setIsDark(false)
    } 
    if (isDark == false) {
      document.getElementById("themeButton").classList.replace("sun", "moon")
      document.body.classList.remove("light")
      setIsDark(true)
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
    </main>
  )
}

export default App
