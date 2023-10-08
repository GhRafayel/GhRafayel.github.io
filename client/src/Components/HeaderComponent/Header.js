import "./Header.css";
import {useState} from 'react';
import {Link} from 'react-router-dom';
function Header (){

const  [nav, usNav] = useState(true);

 function style(){
  const side_menu =  document.getElementById('side-menu');
  nav === true ? side_menu.style = "right: 0px;" : side_menu.style = "right: -200px;"
 }
  
  return (
    <div id="container">
       <header  className="header-container">
        <div  className="container-div-h4">
            <div  className="absolute">

                <Link to="/shopping"  className="absolute-a">
                    <span  className="h4-span">SHOPPING</span> LIST
                </Link>
           </div>
        </div>
        <div>
            <nav>
                <ul id="side-menu">
                    <li><a  href="#Projects">Projects</a></li>
                    <li><a  href="#contact">Contact</a></li>
                    <li><a  href="#game">Games</a></li>
                    <li><a  href="#about">About</a></li>
                    <img 
                      src={require("../public/img/close.png") } 
                      alt="Menu"
                      className="header-icon"
                      onClick={()=>{
                        usNav(!nav)
                        style();
                      }}
                      />
                </ul>
                <img 
                src={require("../public/img/menu.png") }
                  className="header-icon" 
                  alt="Close"
                  onClick={()=>{
                  usNav(!nav)
                   style();
                  }}

                  />
            </nav>
        </div>
       
    </header>
    <div  className="text-container">
    
        <h1>Hi, I'm  
        <span  className="h1-span"> Rafayel <br/> </span> 
        <span className="h1-span"> from </span> Armenia </h1>
    </div>
   </div>
   
  )
}
export default Header;