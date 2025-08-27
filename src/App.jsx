import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
    </main>
  )
}

export default App
