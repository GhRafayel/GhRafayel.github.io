
const lap_btn = document.getElementById('lap_btn');
const reset_btn = document.getElementById('reset_btn');
const start_btn = document.getElementById('start_btn');
const Stop_btn = document.getElementById('Stop_btn');

const milS_sec_min = document.getElementById('milS_sec_min');
const S_parent_lap = document.getElementById('S_parent_lap');



let splitArray = [];
let totalArray = [];
let milisecond = 0;
let seconds = 0;
let minutes = 0;
let interval;

let milisecond_2 = 0;
let seconds_2 = 0;
let minutes_2 = 0;
let interval_2;
let bool = false;


start_btn.addEventListener('click', (e) => { 
 
  bool = true;
  lap_btn.className = 'lap ';
  lap_btn.style = 'color: white;';
  start_btn.className = 'lap active';
  reset_btn.className = 'lap active'
  Stop_btn.className = 'lap'

  clearInterval(interval);
  clearInterval(interval_2);

  interval = setInterval(teimer, 10);
  interval_2 = setInterval(teimer_2,10);
  
});

  lap_btn.addEventListener('click', (e) => { 
    if(bool === true){
       splitArray.push(`${minutes_2 <= 9 ? "0" + minutes_2 : minutes_2}:${ seconds_2 <= 9 ? "0" + seconds_2 : seconds_2},${ milisecond_2 <= 9 ? "0" + milisecond_2 : milisecond_2}`);
       splitArray.reverse();
       totalArray.push(`${minutes <= 9 ? "0" + minutes : minutes}:${ seconds  <= 9 ? "0" + seconds : seconds},${ milisecond <= 9 ? "0" + milisecond : milisecond}`);
        milisecond_2 = 0;
        seconds_2 = 0;
        minutes_2 = 0;
  
        clearInterval(interval_2);
        interval_2 = setInterval(teimer_2,10);
      
        S_parent_lap.innerHTML = '';
      
        totalArray.map((ele,i) => {
          const divHr = document.createElement('div');
          divHr.innerHTML = `<hr>`;
          S_parent_lap.appendChild(divHr);
          const div = document.createElement("div");
          div.id = `${splitArray[i]}`
            div.innerHTML = `
            <span> Lap ${totalArray.length - i}</span> 
            <span id="split">${splitArray[i]}</span> 
            <span>${ele}</span>`
            S_parent_lap.appendChild(div);
      });

      if(splitArray.length >= 2){
        const splitArraySortet = splitArray.sort();
        document.getElementById(splitArraySortet[0]).style = 'color:rgb(61, 241, 61)';
        document.getElementById(splitArraySortet[splitArraySortet.length-1]).style = 'color:red';

      }

    }
  
  });


reset_btn.addEventListener('click', (e) => { 
  bool = false;
  lap_btn.style = " color: gray;"
  lap_btn.className = 'lap ';
  start_btn.className = 'lap ';
  reset_btn.className = 'lap active'
  Stop_btn.className = 'lap active'

   
  clearInterval(interval);
  clearInterval(interval_2);

  milS_sec_min.innerHTML = "00:00,00";
  S_parent_lap.innerHTML = '';
  document.getElementById('no_span').innerHTML = '';
  document.getElementById('split_span').innerHTML = '';
  document.getElementById('total_span').innerHTML = '';

  splitArray = [];
  totalArray = [];

  milisecond = 0;
  seconds = 0;
  minutes = 0;

  milisecond_2 = 0;
  seconds_2 = 0;
  minutes_2 = 0;

});

Stop_btn.addEventListener('click',  (e) => {
  lap_btn.className = 'lap active';
  start_btn.className = 'lap ';
  reset_btn.className = 'lap'
  Stop_btn.className = 'lap active'
  clearInterval(interval);
  clearInterval(interval_2);

 });

 function teimer(){
    
    milisecond++;
    if(milisecond > 99){
        seconds++;
        milisecond = 0;
    }
    if(seconds > 59){
        minutes++;
        seconds = 0;
    }
      document.getElementById("no_span").innerHTML = `Lap ${totalArray.length +1}`;
      document.getElementById('total_span').innerHTML = `${minutes <= 9 ? "0" + minutes : minutes}:${ seconds <= 9 ? "0" + seconds : seconds},${ milisecond <= 9 ? "0" + milisecond : milisecond}`;
      milS_sec_min.innerHTML = `${minutes <= 9 ? "0" + minutes : minutes}:${ seconds <= 9 ? "0" + seconds : seconds},${ milisecond <= 9 ? "0" + milisecond : milisecond}`
}

function teimer_2(){
  milisecond_2++;
  if(milisecond_2 > 99){
    seconds_2++; 
     milisecond_2 = 0;
    }
  if(seconds_2 > 59){
    minutes_2++;
    seconds_2 = 0;
  }
  return document.getElementById('split_span').innerHTML = `${minutes_2 <= 9 ? "0" + minutes_2 : minutes_2}:${ seconds_2 <= 9 ? "0" + seconds_2 : seconds_2},${ milisecond_2 <= 9 ? "0" + milisecond_2 : milisecond_2}`
}




 

 



