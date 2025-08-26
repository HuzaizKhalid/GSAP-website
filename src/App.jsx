import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className='h-[100vh]'></div>
    </main>
  )
}

export default App
