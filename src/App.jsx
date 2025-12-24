import { useState } from 'react';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-50 text-slate-900">
      <main className="max-w-5xl mx-auto">
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
