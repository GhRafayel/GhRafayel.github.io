const form = document.getElementById('form-img-input-btn');
//const fahrenheit = document.getElementById('fahrenheit');
//const celsus = document.getElementById('celsus');

const date = [];
request();
function request(){
    const city = document.getElementById('input-header').value;
    const host = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8109965e7254a469d08a746e8b210e1e&units=imperial&cnt=10`;
    fetch(host)
    .then(strim => strim.json())
    .then(resolt => htmlElements(resolt))
    .catch(error =>{ 
        console.log(error)
        console.log('something went wrong')
    })
};
form.addEventListener( "submit",(evn)=>{
    evn.preventDefault();
    request();
});

//fahrenheit.addEventListener('click', () =>{
    //document.querySelector('.div-aside-2-child').innerHTML = date[date.length - 1].list[0].main.temp + ' ' + ' &#8457';
//})

// celsus.addEventListener('click', () =>{
// document.querySelector('.div-aside-2-child').innerHTML = Math.floor(fahrenheit_To_selsius(date[date.length - 1].list[0].main.temp)) + ' ' + ' \xB0' +'C';
// })


function htmlElements(val) {
    document.getElementById('cityName').innerHTML = val.city.name;
    document.getElementById('wind').innerHTML = val.list[0].wind.speed;
    document.getElementById('lowest').innerHTML = `${val.list[0].main.temp_min}  &#8457`;
    document.getElementById('highest').innerHTML =`${val.list[0].main.temp_max}  &#8457 `;
    document.getElementById('pressure').innerHTML = val.list[0].main.pressure;
    document.getElementById('humidity').innerHTML = `${val.list[0].main.humidity} %`
    date.push(val);
    const canvas = document.getElementById('div-canvas').innerHTML = '';
    chartGrafik();
    
}
function fahrenheit_To_selsius(temp){
    return (temp - 32) * 5/9;
}

function displayTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let sunrise = document.getElementById('span-sunrise');
    let sunset = document.getElementById('span-sunset');

    if(hours >= 8){
        sunrise.innerHTML = 24 - hours + 8 + ' ' + 'hours';
    }else if((8 - hours) <= 1){
        sunrise.innerHTML = 60 - minutes + ' ' + 'minutes';
    }else {
        sunrise.innerHTML = 8 - hours + ' ' + 'hours';
    }

    if(hours >= 20){
        sunset.innerHTML = 24 - hours + 20 + ' ' + 'hours';
    } else if((20 - hours) <= 1){
        sunset.innerHTML = 60 - minutes  + ' ' + 'minutes';
    }else {
        sunset.innerHTML = 20 -hours + ' ' + 'hours';
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("session").innerHTML = seconds;
    
    document.getElementById("hours1").innerHTML = hours;
    document.getElementById("minutes1").innerHTML = minutes;
    document.getElementById("session1").innerHTML = seconds;

    document.getElementById("hours2").innerHTML = hours;
    document.getElementById("minutes2").innerHTML = minutes;
    document.getElementById("session2").innerHTML = seconds;
    
    if(hours >= 12) {
        hours -= 12;
        document.getElementById('session').innerHTML = 'PM';
        document.getElementById('session1').innerHTML = 'PM';
        document.getElementById('session2').innerHTML = 'PM';
    }else{
        document.getElementById('session').innerHTML = 'AM';
        document.getElementById('session1').innerHTML = 'AM';
        document.getElementById('session2').innerHTML = 'AM';
    }
}
setInterval(displayTime, 10);

   function chartGrafik(){
    const canvas = document.getElementById('div-canvas')
    .appendChild(document.createElement('canvas'))
    .getContext('2d');
    let  name = date[date.length - 1].city.name;
    let  label = date[date.length - 1].list.map((v)=> v.dt_txt );
    let  data   = date[date.length -1 ].list.map((v)=> v.main.temp);
     var chart =  new Chart(canvas, {
           type: 'line',
           data: {
                   labels:  label,
                   datasets: [
                       {
                           label: name,
                           data:  data,
                           borderWidth: 1
                       }
                   ]
               },
           options:
           {
            scales:
               {
                   y:{beginAtZero: true}
               }
           }
       });
   }
   




