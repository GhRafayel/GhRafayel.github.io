import  "./Game3.css";
import { useReducer,useEffect,useState } from "react";

const _data = {
  jpegs:[
  'Rabbit.jpeg',
  'Deer.jpeg',
  'Elephant.jpeg',
  'Fox.jpeg',
  'Giraffe.jpg',
  'Monkey.jpeg',
  'Panda.jpeg',
  'Parrot.jpeg',
  'Pig.jpeg',
  'Rhinoceros.jpeg',
  'Tiger.jpeg',
  'Zebra.jpeg'
  ],
  level1(){
    let newArry = sortAnimal(this.jpegs);
    return sortAnimal(newArry.slice(6).concat(newArry.slice(6)));
  },
  level2(){
    let newArry = sortAnimal(this.jpegs);
    return sortAnimal(newArry.slice(4).concat(newArry.slice(4)));
     
  },
  level3(){
    let newArry = sortAnimal(this.jpegs);
    return sortAnimal(newArry.slice(2).concat(newArry.slice(2)));
  },
  level4(){
    return sortAnimal(this.jpegs.concat(this.jpegs));
  },
}

function reducer(state, action ){
    if(action.type === 'level1'){
      return action.payload.value;
    }
    if(action.type === 'level2'){
      return action.payload.value;
    }
    if(action.type === 'level3'){
      return action.payload.value;
    }
    if(action.type === 'level4'){
      return action.payload.value;
    }
    if(action.type === 'reset'){
      return action.payload.value;
    }
}

function sortAnimal(arr){
  const randomly = () => Math.random() - 0.5;
  return arr.toSorted(randomly)
}
function Game3 (){
  const [ text, usText ] = useState('You  can start the game')
  const [state, dispatch] = useReducer(reducer, _data.jpegs);

  useEffect(()=>{
    if(state !== _data.jpegs){
      play();
    }
  },[state]);

  function openElement(arr1,arr2){
    arr1.forEach((v) => v.style = 'opacity:1;')
    if(arr1.length === arr2.length){
        usText('You Won')
    }  
    
  }
  function createElement(arr){
      return arr.map( (value, i) => {
        return <div key={Math.random()}>
                    <img 
                      src={require('./img/' + value) } 
                      alt={i + value}
                    />
                </div>
      });      
  }
  
function play(){
  let imgElements = [...document.getElementsByTagName('img')];
   let openingElementArrey = [];
   let arr = [];
   imgElements.forEach((v)=> {
      v.style = 'opacity:0;';
      v.id = Math.random();
          v.addEventListener('click', (e) => {
              e.target.style = 'opacity:1;';
                  arr.push(e.target);
              if(arr.length === 2 ){
                  if(arr[0].src === arr[1].src && arr[0].id !== arr[1].id){
                    arr.forEach((v)=> openingElementArrey.push(v));
                    openElement(openingElementArrey,imgElements);
                         arr = [];
                  } else{
                         arr = [];
                     setTimeout(()=>{
                          imgElements.forEach((v) => v.style = 'opacity:0;');
                          openElement(openingElementArrey,imgElements);
                      },300)
                  }
              }
          }, true);
      })
}
  
  return (
    <div id="game3-div-parent">

      <div className="game3-div-btn">

          <div>
              <button onClick={()=>{
                dispatch({
                  type: "level1",
                  payload: {
                    value: _data.level1()
                  }
                })
               
                
              }}>
                Level 1 </button>
          </div>

          <div>
                  <button onClick={()=>{
                     dispatch({
                      type: "level2",
                      payload: {
                          value: _data.level2()
                      }
                });
                
                  }}>  
                  Level 2 </button>
          </div>

          <div>
              <button onClick={()=>{
                  dispatch({
                  type: "level3",
                  payload: {
                    value: _data.level3()
                  }
                });
               
              }}>  
              Level 3 </button>
          </div>

          <div>
              <button onClick={()=>{
                  dispatch({
                  type: "level4",
                  payload: {
                    value: _data.level4()
                  }
                });
                
              }}> 
              Level 4 </button>
          </div>
          
          <div className="game3-div-reset">
          <button onClick={()=>{
            dispatch({
                  type: "reset",
                  payload: {
                    value: _data.jpegs
                  }
                })
          }}> Reset </button>
      </div>

      </div>

      <p className="game3-text">  {text} </p>

      <div id="content">
          {createElement(state)}
      </div>

      
  </div>
  )
}
export default Game3;










