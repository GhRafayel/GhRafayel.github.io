import './Shopping.css';
import {useState,useReducer, useEffect} from 'react';


function sendNewList(newArray){
    fetch('/list', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newArray),
    })
}

function reducer(state, action){
    if(action.type === 'get'){
      sendNewList(action.paloade)
      return action.paloade;
    }
    if(action.type === 'add'){
      let arr = [ ...state,action.paloade]
      sendNewList(arr);
      return arr;
    }
    if(action.type === 'checkbox'){
        let arr =  state.map(v => {
          if(v.kod === action.paloade.value.kod){
            return action.paloade.value
          }
          return v
        });
        sendNewList(arr);
        return arr;
    }
    if(action.type === 'clearItem'){
      let arr =  state.filter(el => el.kod !== action.paloade.value.kod);
      sendNewList(arr);
      return arr;
    }
    if(action.type === 'RmoveCompleted'){
      let arr =  state.filter(el => el.bul !== true);
      sendNewList(arr);
      return arr;
    }
    
}

function Shopping(){
  
  const [inputVal, usInputVal] = useState('');
  const [state, dispatch] = useReducer(reducer,[]);
  
useEffect(()=>{
  fetch('/list',)
  .then(strim => strim.json())
  .then((json =>{
    dispatch({
      type: 'get',
      paloade: json.map((v) => v = {...v,kod: Math.random()})
    })
  }))
  .catch((err) =>{console.log('This is a error')})

},[]);


function createElement(arr){
 return arr.map( ( val, i ) => {
    return <div id='createElement-div' key={i}>
      <label>
      <input id={val.kod} type='checkbox' checked={val.bul} 
                    onChange={(e)=> {
                      dispatch({
                        type: 'checkbox',
                        paloade: {
                          value: {
                            ...val,
                            bul: e.target.checked
                          }
                        }
                      })
          }}/>
        {val.text}
        
      </label>
          <button onClick={(e)=>{
              dispatch({
                type: 'clearItem',
                paloade: {
                  value: { ...val }
                }
              })
            }}>
              Clear Up
          </button>
    </div>
  })
}
  return (
    <div id='shoppin-parent-div'>
      <form id='shopping-form-div' onSubmit={(e)=>{
        e.preventDefault();
          if(inputVal.trim().length > 1 ){
            dispatch({ type: 'add',
                paloade:{ text: inputVal,  
                          bul: false, 
                          kod: Math.random()
                    } });
          }
          usInputVal('');
         
      }}>
          <input  type='text' value={inputVal} 
                  onChange={(e)=> usInputVal(e.target.value)}/>
          <button>Add</button>
      </form>

      <div id='shopping-list-div'>
        {createElement(state)}
      </div>

      <div id='shopping-footer-div'>
         <div>
          <span>{state.length}/{state.filter(v => v.bul !== false).length}</span>
          <button onClick={(e)=>{
            dispatch({
              type: 'RmoveCompleted',
            })
          }}> Remove Completed </button>
         </div>
      </div>

    </div>
    
  )
}

export default Shopping;