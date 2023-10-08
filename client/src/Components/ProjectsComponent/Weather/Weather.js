import './Weather.css';
import {useState,useReducer} from 'react';

function State(obj){
        this.cityName = obj.city.name;
        this.country = obj.city.country;
        this.timezone = obj.city.timezone;
    
        this.temp = obj.list[0].main.temp;
        this.temp_max = obj.list[0].main.temp_max;
        this.temp_min = obj.list[0].main.temp_min;
    
        this.deg = obj.list[0].wind.deg;
        this.gust = obj.list[0].wind.gust;
        this.speed = obj.list[0].wind.speed;
}

const CFK = {
    state: undefined,
    toCelsius: (number)=>{
        return  Math.floor((number - 32) * 5/9);
      },
    toKelvin: (number)=>{
        return  Math.floor((number - 32) * 5/9 + 273.15);
    }
}
function reducer(json, action) {
    if(action.type === 'add'){
            action.payload.value.type = " \xB0F";
        return action.payload.value;
    } 
    if(action.type === 'C'){
            action.payload.value.type = "\xB0C";   
        return action.payload.value;
    } 
    if(action.type === 'F'){
            action.payload.value.type = "\xB0F";   
        return action.payload.value;
    } 
    if(action.type === 'K'){
            action.payload.value.type = " \u212A";   
        return action.payload.value;
}
   
}

function Weather (){

    const [input, usInput] = useState('');
    
    const [json, dispatch] = useReducer(reducer,);

  return (
<div id='wether'>
    <div id="wether-div-parent">
        <h3 className='wether-h3'>
            Weather { input === 'Wrong name' ? 'Wrong  name' : json !== undefined ? json.cityName : 'City' }
        </h3>

   
        <form id="wether-form" onSubmit={(e)=>{
                    e.preventDefault();
                    if(input.length > 2) {
                        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=8109965e7254a469d08a746e8b210e1e&units=imperial&cnt=10`)
                            .then(strim => strim.json())
                            .then(response => {
                                if( response.cod === '200'){
                                    CFK.state = response;
                                    dispatch({ type: 'add',
                                        payload: {
                                            value: new State(response)
                                        }
                                    });
                                    
                                } else {
                                    usInput( "Wrong name")
                                }
                            } )
                            .catch(error => console.log( error + 'There was an error'));
                    }
                
                    }}>
                <div className="wether-div-input">
                    <input type="text"  value={input} onChange={(e)=>{
                        usInput(e.target.value);
                    }}/>
                    <label >Writh city or county name </label>
                </div>
                {/* <button className='wether-form-btn'> Search</button> */}
        </form>
    
        <div className='weather-div-text-btn'>
            <div className='weather-div-text'>
                    <div className='wether-div-child'>
                        <p> Temp: {json !== undefined ? json.temp + json.type : ''}  </p>
                        <p> Min Temp: {json !== undefined ? json.temp_min + json.type : ''}</p>
                        <p> Max Temp: {json !== undefined ? json.temp_max + json.type : ''} </p>
                    </div>
                    <div className='wether-div-child'>
                        <p> Wind deg: {json !== undefined ? json.deg : ''} </p>
                        <p> Wind gist: {json !== undefined ? json.gust : ''}</p>
                        <p> Wind speed: {json !== undefined ? json.speed : ''}</p>
                    </div>
                    <div className='wether-div-child'>
                        <p>country: {json !== undefined ? json.country : ''}</p>
                        <p>timezone: {json !== undefined ? json.timezone : ''}</p>
                    </div>
            </div>

            <div className="wether-div-btn">
                <div>
                    <button id="wether-f " onClick={(e)=>{
                        if(json !== undefined && json.type !== " \xB0F" ){

                            let f_State = new State(CFK.state);

                            dispatch({type: 'F',payload: { value: f_State}});
                        }
                    }}>
                        F 
                    </button>
                </div>
                <div>

                    <button id="wether-c" onClick={(e)=>{
                        if(json !== undefined &&  json.type !== "\xB0C"){
                            let c_State = new State(CFK.state);

                                c_State.temp_min = CFK.toCelsius(c_State.temp_min);
                                c_State.temp_max = CFK.toCelsius(c_State.temp_max);
                                c_State.temp = CFK.toCelsius(c_State.temp);

                            dispatch({type: 'C', payload: { value: c_State} })
                        }
                    }}> 
                        C
                    </button>
                </div>

                <div>
                    <button id="wether-k" onClick={(e)=>{
                        if(json !== undefined && json.type !== "\u212A"){

                            let k_State = new State(CFK.state);
                                k_State.temp = CFK.toKelvin(k_State.temp);
                                k_State.temp_min = CFK.toKelvin(k_State.temp_min);
                                k_State.temp_max = CFK.toKelvin(k_State.temp_max);

                            dispatch({type: 'K',payload: {value: k_State}})}}} >
                        K
                    </button>
                </div>
            </div> 
        </div>
    </div>
</div>
  )
}
export default Weather;
 