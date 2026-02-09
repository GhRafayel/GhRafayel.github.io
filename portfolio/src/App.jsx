import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      AOS.init( {duration: 1000, once: false, offset: 100} );
      document.documentElement.classList.add('dark');
  },[]);

  useEffect(()=> { AOS.refresh(); },[darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'bg-linear-to-r from-gray-900 fia-[#0d182e] to-gray-900 min-h-screen' : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'}
    >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Hero darkMode={darkMode} />
        <Skills darkMode={darkMode}/>
        <Projects darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
