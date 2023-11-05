import './App.css';

import About from "./Components/AboutComponent/About";
import Contact from './Components/ContactComponent/Contact';
import Header from './Components/HeaderComponent/Header';
import Projects from './Components/ProjectsComponent/Projects';
import Games from './Components/GamesComponent/Games';


function App() {
  
  return (
    <div className='App'>
      <Header/>
      <About/>
      <Projects/>
      <Games/>
      <Contact/>
    </div>
  )
  
}

export default App;
