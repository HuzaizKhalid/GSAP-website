import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Home/>
      <Cocktails/>
      <About/>
     
      <Art/>
    </main>
  )
}

export default App
