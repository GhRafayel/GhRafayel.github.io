import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import ParticleField from "./components/three/ParticleField"

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      AOS.init( {duration: 1000, once: false, offset: 100} );
      document.documentElement.classList.add('dark');
  },[]);

 useEffect(()=> { AOS.refresh(); },[darkMode])

  const toggleDarkMode = () => {
    //document.documentElement.classList.toggle('dark');
    
    setDarkMode(!darkMode);
  };

  return (
    <div className={`overflow-x-hidden ${darkMode ? 'bg-linear-to-r from-gray-900 fia-[#0d182e] to-gray-900 min-h-screen' :
      'bg-linear-to-br from-gray-200 to-blue-100 min-h-screen'}`}
    >
        <ParticleField darkMode={darkMode} />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
       
        <About darkMode={darkMode} />
         <Hero darkMode={darkMode} />
        <Projects darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
