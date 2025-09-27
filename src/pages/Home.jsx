import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Education from '../sections/Education'
import Certificates from '../sections/Certificates'
import CompetitiveProgramming from '../sections/CompetitiveProgramming'
import Resume from '../sections/Resume'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <CompetitiveProgramming />
      <Resume />
      <Contact />
    </main>
  )
}

export default Home