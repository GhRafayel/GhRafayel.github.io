import './Game1.css';
import {useState,useRef} from 'react';

function Game1 (){

  const [computer, usComouter] = useState('');
  const [rock, usRock] = useState('');

  const [resoult,usResoult] = useState('');

  const rockRef = useRef(0);
  const computerRef = useRef(0);

  const state = ['scissors','stone','paper'];

  function foo(str){
    let comp = state[Math.floor(Math.random() * state.length)];
    if(str === 'scissors'){
          if(comp === "stone"){
            computerRef.current++;
          }else if(comp === "paper"){
            rockRef.current++;
          }
    }else if(str === 'stone'){
          if(comp === "scissors"){
            rockRef.current++;
          }else if(comp === "paper"){
            computerRef.current++;
          }
    }else if(str === 'paper') {
          if(comp === "scissors"){
            computerRef.current++;
          }else if(comp === "stone"){
            rockRef.current++;
          }
    }
    usComouter(comp);
    usRock(str);
  }
  
  return (

<div id="Game1-parent">

<div className="Game1-scissors-stone-paper">

      <div className="Game1-div-scissors">
           <img src={require("../../public/img/scissors.png" )} 
                className="img-scissors" 
                alt="scissors"
                onClick={() => foo('scissors')}
            />
      </div>

      <div className="Game1-div-stone">
        <img  src={require("../../public/img/stone.png")} 
              className="img-stone" 
              alt="stone" 
              onClick={() => foo("stone")}
        />
      </div>

      <div className="Game1-div-computer">
            <img  src={require("../../public/img/paper.png")} 
                  className="img-paper" 
                  alt="paper"
                  onClick={() => foo("paper")}/> 
      </div>
</div>

  <div className="Game1-resoult">
     {`${resoult}`}
      
  </div>
  
      <div className="Game1-div-child">
          <div>
              <div>
                  <span>Rock </span>
              </div>
              <div>
                    <img  src={require("../../public/img/head.jpg")} 
                          alt='head.jpg'
                    />
              </div>
              <div className="Game1-Rock">
              {rock} {rockRef.current}
              </div>
          </div>
         
          <div>
              <div>
                
              </div>
              <div>
                  <span> Comouter </span>
              </div>
              <div>
                   <img src={require("../../public/img/Robot.png")} 
                        alt="Robot.png"
                   />
              </div>
              <div className="Game1-Comouter">
                 {computer} {computerRef.current}
              </div>
          </div>
      </div>
     
  
  <div className="Game1-div-child2">
     
        <img  src={require("../../public/img/button.png")} 
              alt="button.png"
              onClick={()=> {
                if(rockRef.current > computerRef.current){
                  usResoult('Rock have won!');
                }else if(rockRef.current < computerRef.current){
                  usResoult('Rock hase Lost!')
                }else {
                  usResoult('No Win!')
                }

              }}
              />
  </div>
</div>
  )
}
export default Game1;