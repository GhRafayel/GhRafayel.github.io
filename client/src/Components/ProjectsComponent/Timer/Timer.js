import "./Timer.css";
import {useState,useRef,useCallback,useEffect} from 'react';

function Timer (){
    const [milisecond, setMiliseconds] = useState(0);
    const [secounds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

useEffect(() => {
    if(milisecond > 99){
        setMiliseconds(0);
        setSeconds(secounds => secounds + 1);
    } else if(secounds > 59){
        setMinutes(minutes => minutes + 1);
        setSeconds(0);
    }
},[milisecond,secounds,minutes]);

  const intervalIDRef = useRef(null);
 
  const startTimer = useCallback(() => {
    stopTimer();
      intervalIDRef.current = setInterval(() => {
          setMiliseconds(milisecond => milisecond + 1) 
    }, 10);
  },[]);

  const stopTimer = useCallback(() => {
      clearInterval(intervalIDRef.current);
      intervalIDRef.current = null;
  }, []);

return (
    <div className="Timer_parent" key={1}>
          <div className="Timer_div">
            <p className="Timer_p"> {milisecond < 9 ? '0:' + milisecond  : milisecond} </p>
            <button type="click" className="Timer_btn"onClick={ ()=>{
              startTimer()
              }} >
              Start
            </button>
          </div>

          <div className="Timer_div">
            <p className="Timer_p"> {secounds < 9 ? '0:' + secounds  : secounds} </p>
          <button type="click" className="Timer_btn" onClick={()=> stopTimer()}>
              Stop
            </button>
          </div>

          <div className="Timer_div">
            <p className="Timer_p"> {minutes < 9 ? '0:' + minutes  : minutes}</p> 
            <button type="click" className="Timer_btn" onClick={()=>{
              setMiliseconds(0);
              setSeconds(0);
              setMinutes(0);
              startTimer();
              }}>
              Reset
            </button>
          </div>

        </div>
  );

}
export default Timer;