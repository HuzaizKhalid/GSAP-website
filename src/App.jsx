import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const App = () => {
  return (
    <div>
      <h1>Hello World GSAP</h1>
    </div>
  )
}

export default App
