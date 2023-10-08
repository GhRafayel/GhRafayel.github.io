import './Calculation.css';
import {useRef,useState} from 'react'
const object = {
    total: undefined,
    procent: undefined,
}
function Calculation (){
    
const peopleRef = useRef(1);
const [ people, usPeople] = useState(peopleRef.current);
const [state, usStae]= useState(" 00.00");
  return (
    <div id="Calculation-div-parent">
      
        <div className="Calculation-div-form">
            
                <div className="Calculation-Bill">
                    <h5>
                        Bill total
                    </h5>
                    <div className="">
                        <input type="number" 
                               id="Calculation-summa"
                               placeholder="$ summa"
                                onChange={(e)=>{
                                    object.total = Number(e.target.value);
                                }}
                        />
                    </div>
                </div>
                <div className="Calculation-Tip">
                    <h5>
                        Tip
                    </h5>
                    <div>
                        <input 
                            type="number" 
                            id="Calculation-percent" 
                            placeholder="wie viele %"
                            onChange={(e)=>{
                                object.procent = Number(e.target.value);
                            }}

                            />
                    </div>
                </div>
                
            <div className="Calculation-div-people-Total">
                <div className="Calculation-div-people">
                 
                    <p>
                       <span id="Calculation-span-person"> {people > 1 ? "People" : "Person"}</span>  
                       <span id="Calculation-span-person">{people}</span>
                    </p>
               
                        <button id="Calculation-plus" onClick={()=>{
                            peopleRef.current++
                            usPeople(peopleRef.current)
                        }}>
                            +
                        </button>

                       

                        <button id="Calculation-minus" onClick={()=>{
                            if(peopleRef.current > 1){
                                peopleRef.current--
                                usPeople(peopleRef.current)
                            }
                        }}>
                            -
                        </button>                   
                   
                </div>
                <div className="Calculation-div-Total">
                    <p>Per Person</p> 
                    <p className="Calculation-Total-per-Person">
                       $: {state}
                    </p>              
                </div>
              
            </div>
        </div> 
        <div>
            <div className="Calculation-div-a-submit">
                <div>
                    <a href="/Calculation" id="Calculation-reset">
                        Reset
                    </a>
                </div>
                <div>
                    <button id="Calculation-submit" onClick={()=>{
                       if(object.procent !== undefined && object.total !== undefined){
                            usStae((( (object.total * object.procent) / 100)  + object.total) / people )
                       }
                        
                    }}>
                        Submit
                    </button>
                </div>
               
            </div>
           
        </div>
    </div>
  )
}
export default Calculation;