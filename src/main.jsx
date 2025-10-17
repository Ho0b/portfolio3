import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import DragonIndex from './pages/DragonIndex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path='/projects/DragonIndex' element={<DragonIndex/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
