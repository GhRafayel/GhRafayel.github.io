import { useState,React,useEffect} from 'react';
import './Game2.css';

import sound1  from './audio/audio1.wav';
import sound2 from './audio/audio2.wav';
import sound3 from './audio/audio3.wav';



function Game2 () {

const [heroS , usHeroS] = useState();
const [heroB , usHeroB] = useState();
const [bulS,usBulS] = useState(true);
const [bulB,usBulB] = useState(true);


useEffect(() =>{
  if(heroS <= 15 && bulS === true){
      new Audio(sound2).play();
      usBulS(false);
  }
  if(heroB <= 15 && bulB === true){
    new Audio(sound2).play();
    usBulB(false);
  }
  if(heroS < 0) usHeroS(0);
  if(heroB < 0) usHeroB(0);
  if(heroS > 100) usHeroS(100);
  if(heroB > 100) usHeroB(100);
  if(heroS === 0) usHeroB('Betman has won ');
  if(heroB === 0) usHeroS('Spiderman has won ');

},[heroS,heroB]);


function renderNumber() {
  return Math.round(Math.random(1) * 15)
};

function attack(kod){
  if(heroS && heroB !== undefined && heroS && heroB !== 0){
    if(kod === "s"){
      new Audio(sound1).play();
      usHeroB(heroB - renderNumber());
    }
    if(kod === "b"){
      new Audio(sound1).play();
      usHeroS(heroS - renderNumber());
    }
  }
}

function help(kod){
  if(heroS && heroB !== undefined && heroS && heroB !== 0){
    if(kod === "s"){
      usHeroS(heroS + renderNumber());
    }
    if(kod === "b"){
      usHeroB(heroB + renderNumber());
    }
  }
}

  return (
   <div id='Game2' 
   onKeyDown={ (e)=> { 
          if(e.key === 'q') attack('s'); 
          if(e.key === 'p') attack('b');
          if(e.key === 'a') help('s');
          if(e.key === 'l') help('b');
    }}>

        <div id="Game2-parent">
        
              <div id="div-hero-1">
                  <h2>
                      Spiderman
                  </h2>
                  <div className="div-img-1">
                      <img src={require("../../public/img/spider.png")} alt='spider.png'/>
                  </div>
                  <div>
                      Q:
                      <button className="Attack-Hero1"
                      onClick={() => attack('s')} >
                          Attack
                      </button>
                  </div>
                  <div>
                      A:
                      <button className="Help-Hero1"
                      onClick={() => help('s')}>
                          Help
                      </button>
                  </div>
                  <div className="Position1">
                    {heroS === undefined ? "" : heroS}
                  </div>
                  
              </div>

              <span id="result">

              </span>
              
              <div  id="div-hero-2">
                  <h2>
                      Betman
                  </h2>
                  <div className="div-img-2">
                      <img src={require("../../public/img/batman.png")} alt='batman.png'/>
                  </div>
                  <div>
                      P:
                      <button className="Attack-Hero2"
                      onClick={() => attack('b')}>
                          Attack
                      </button>
                  </div>
                  <div>
                      L:
                      <button className="Help-Hero2"
                      onClick={() => help('b')} >
                          Help
                      </button>
                  </div>
                  <div className="Position2">
                    {heroB === undefined ? "" : heroB }
                  </div>
              </div>
          </div>
        
          <div className="div-button-reset">
             
              <button className="button-play"
              onClick={() => {
                 new Audio(sound3).play();
                  usHeroS(100);
                  usHeroB(100);
              }}
              >
                  Play
              </button>
              
          </div>
   </div>
  )
}

export default Game2;