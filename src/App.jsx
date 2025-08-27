import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Home/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  )
}

export default App
