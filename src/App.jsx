import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-primary-900 text-white py-8 text-center">
        <p className="text-primary-200">© 2026 Ericka Tresenio Brudo. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
