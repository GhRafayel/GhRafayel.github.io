
    const temp = document.getElementById('wether-Temp');
    const minTemp = document.getElementById('wether-Min-Temp');
    const maxTemp = document.getElementById('wether-Max-Temp');
    const searchButton = document.getElementById('wether-Button-search');

    const form = document.getElementById('wether-form');
    const f = document.getElementById('wether-f');
    const c = document.getElementById('wether-c');
    const k = document.getElementById('wether-k');
    
    let cityName = document.getElementById('wether-Input').value;
      
    let host = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8109965e7254a469d08a746e8b210e1e&units=imperial&cnt=10`;
    request(host)
    function request(url){
        fetch(url)
        .then(strim => strim.json())
        .then((respons) => {
            data(respons);
            console.log(respons);
        })
        .catch(error => {
            console.log(error);
            console.log('something problem')
        })
    }
    
   

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let host = `https://api.openweathermap.org/data/2.5/forecast?q=${document.getElementById('wether-Input').value}&appid=8109965e7254a469d08a746e8b210e1e&units=imperial&cnt=10`;
        request(host)
        
    });
    function data(obj){
        innerText(obj);
        
        k.addEventListener('click', ()=>{
            fahrenheitToKelvin(obj);
        });
        f.addEventListener('click', ()=>{
            innerText(obj);
        });
        c.addEventListener('click', ()=>{
            fahrenheitToCelsius(obj);
        });
    }

    function fahrenheitToCelsius(obj){
     //   console.log(obj);
        temp.innerText = `Temp: ${Math.floor((obj.list[0].main.temp - 32) * (5/9))} \xB0C`;
        minTemp.innerText = `Min Temp: ${Math.floor((obj.list[0].main.temp_min - 32) * 5/9)} \xB0C`;
        maxTemp.innerText = `Max Temp: ${Math.floor((obj.list[0].main.temp_max - 32) * 5/9)}  \xB0C`;
    } 
    function fahrenheitToKelvin(obj){
       // console.log(obj);
        temp.innerText = `Temp: ${Math.floor(((obj.list[0].main.temp - 32) / 1.8)+ 273.15)} \u212A`;
        minTemp.innerText = `Min Temp: ${Math.floor(((obj.list[0].main.temp_min - 32) / 1.8)+ 273.15)} \u212A `;
        maxTemp.innerText = `Max Temp: ${Math.floor(((obj.list[0].main.temp_max - 32) / 1.8)+ 273.15)}  \u212A`;
    }

    function innerText(obj){
        document.getElementById('wether-City').innerHTML = document.getElementById('wether-Input').value;
        temp.innerHTML = ` Temp: ${obj.list[0].main.temp}  &#8457 `;
        minTemp.innerHTML = `Min Temp: ${obj.list[0].main.temp_min} &#8457`;
        maxTemp.innerHTML =  `Max Temp: ${obj.list[0].main.temp_max } &#8457`;
    }


   
    

   