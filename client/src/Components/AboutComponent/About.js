import './About.css';
import React from 'react';


function About(){

function openTab(event,about){
  let tablinks = document.getElementsByClassName('about-tab-links-p');
  let tabContents = document.getElementsByClassName('about-tab-content');

  for(let i = 0; i < tablinks.length; i++){
    tablinks[i].classList.remove('active-link');
    tabContents[i].classList.remove('active-tab');
  }
  document.getElementById(about).classList.add('active-tab');
  event.currentTarget.classList.add('active-link');
}

  return (
   <div id="about">
    <div  className="about-container">
       <div  className="about-container-row">
           <div   className="about-col-1">
               <img src={require("../public/img/My_foto.png")} alt="about-poto"  className="about-col-1-img"></img>
           </div>
           <div  className="about-col-2">
               <div id="div-cv">
                   <h3  className="about-title">
                       About Me
                   </h3>
                   <a href={require("../public/img/LL_Rafayel_Ghazaryan_2023.pdf")} download  className="downlood-a">Download My CV</a>
               </div>
               <p  className="about-p">
                   I am Rafayel from Armenia. Now I live in Vienna, Austria. I started studying web development for fun and became too interested in it not to become a professional web developer. Since then I learned a lot on my own watching Youtube courses and took a professional individual course. You can get familiar with my skills, works and services below.                         
               </p>
              
               <div  className="about-tab-title-div">
                   <p 
                      className="about-tab-links-p active-link" 
                       onClick={(e)=> openTab(e,'skills')}>
                      Skills
                    </p>

                   <p className="about-tab-links-p" 
                      onClick={(e)=> openTab(e,'education')}>
                    Education</p>
                   <p 
                      className="about-tab-links-p" 
                      onClick={(e)=> openTab(e,"languages")}>
                      Languages
                    </p>
               
               </div>
               <div  className="about-tab-content active-tab" id="skills">
                   <ul>
                       <li><span>HTML</span></li>
                       <li><span>CSS</span></li>
                       <li><span>JavaScript</span></li>
                       <li><span>NODE JS + ES6</span></li>
                       <li><span>EXPRESS JS</span></li>
                       <li><span>REACT JS </span></li>
                       <li><span>O.O.P</span></li>
                   </ul>
               </div>
               <div  className="about-tab-content" id="languages">
                   <ul>
                       <li><span>Amenian</span></li>
                       <li><span>English</span></li>
                       <li><span>German</span></li>
                       <li><span>Russian</span></li>
                   </ul>
               </div>
              
               <div  className="about-tab-content" id="education">
                   <ul>
                       <li>
                           <span>
                               Course with certificate
                           </span>
                           <span>
                               <a  
                                    target='blank'
                                    href="https://www.atelier04.at/kurs/programmiersprache-javascript-grundlagen/klassische-gruppenkurse/"
                                    className="about-tab-content-a">
                                    Ateiler 04
                                </a>
                           </span>
                  
                       </li>
                       <li>
                           <span>
                               Self-study JavaScript
                           </span>
                           <span>
                               <a target='blank' href="https://www.youtube.com/@meschian"
                                className="about-tab-content-a">
                                Rouben Meschian
                               </a>
                           </span>
                          
                       </li>

                       <li>
                           <span>
                               Self-study CSS
                           </span>
                           <span>
                               <a target='blank' href="https://www.youtube.com/watch?v=G3e-cpL7ofc&t=15822s&ab_channel=SuperSimpleDev"
                                    className="about-tab-content-a">
                                   SuperSimpleDev
                               </a>
                           </span>
                        
                       </li>
                       <li>
                           <span>
                               Self-study HTML 
                           </span>
                           <span>
                               <a target='blank' href="https://www.youtube.com/@hayrapetyansami"
                                   className="about-tab-content-a">
                                   Samvel Hayrapetyan
                               </a>
                           </span>
                         
                       </li>
                   </ul>
               </div>
           </div>
       </div>
   </div>
</div>
  )
}
export default About;