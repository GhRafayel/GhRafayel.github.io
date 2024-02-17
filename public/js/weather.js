
    const _state = {
        form: document.getElementById('form'),
        cityName: document.getElementById('input'),
        row_text: document.getElementById('row_text'),
        arr: []
        
    }
     function get(){
       fetch('/get_state')
        .then((strim => strim.json()))
        .then((json) => {
            _state.arr = json
            render(_state.arr);
            
        })
        .catch((err) => {
           
            request();
        })
    }
    
    _state.form.addEventListener('submit', (e)=>{
        e.preventDefault();
        request();
        _state.cityName.value = '';
        // document.getElementById('input').value = '';
    });

    document.getElementById('clear').addEventListener('click', ()=>{
        _state.arr = [];
        render(_state.arr);
        send(_state.arr);

    })

    function fahrenheit(i){
        document.getElementById(`temp${i}`).innerText = _state.arr[i].list[0].main.temp + "\u2109"
        document.getElementById(`temp_max${i}`).innerText = _state.arr[i].list[0].main.temp_max + "\u2109"
        document.getElementById(`temp_min${i}`).innerText = _state.arr[i].list[0].main.temp_min + "\u2109"

    }
    
    function celvin(i){
       
        document.getElementById(`temp${i}`).innerText =      Math.floor(((_state.arr[i].list[0].main.temp - 32) / 1.8)+ 273.15) + " " + "\u212A";
        document.getElementById(`temp_max${i}`).innerText =  Math.floor(((_state.arr[i].list[0].main.temp_max - 32) / 1.8) + 273.15) + " " + "\u212A";
        document.getElementById(`temp_min${i}`).innerText =  Math.floor(((_state.arr[i].list[0].main.temp_min - 32) / 1.8) + 273.15) + " " + "\u212A";
    }

    function celsius(i){
        document.getElementById(`temp${i}`).innerText = Math.floor((_state.arr[i].list[0].main.temp - 32) * (5/9)) + " "  + "\xB0C"
        document.getElementById(`temp_max${i}`).innerText =  Math.floor((_state.arr[i].list[0].main.temp_max - 32) * (5/9)) + " "  + "\xB0C"
        document.getElementById(`temp_min${i}`).innerText =  Math.floor((_state.arr[i].list[0].main.temp_min - 32) * (5/9)) + " "  + "\xB0C"
    }
    
   function  send (arr){
        fetch  ('/send_state',{
            method: 'POST',
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(arr),
          })
    }
   
    function request(){
        
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${_state.cityName.value === '' ? 'Vienna' : _state.cityName.value}&appid=8109965e7254a469d08a746e8b210e1e&units=imperial&cnt=10`)
        .then(strim => strim.json())
        .then(res =>  {
            if(res.cod === '200'){
                console.log(res.cod)
                _state.arr.push(res);
                _state.arr = _state.arr.filter((obj, index) => _state.arr.findIndex((item) => item.city.id === obj.city.id) === index);
                render(_state.arr)
                send(_state.arr)
            }
        })
        .catch(error => {
            console.log(error , 'something problem')
        })
    }
    
    function clear_Listener(arr){
        arr.forEach(element => {
            element.addEventListener('click',(e) => {
                clear(e.target.id);
            });
        });
    }

    function clear(id) {
      _state.arr =  _state.arr.filter((item) => item.city.id !== +id);
      render(_state.arr);
      send(_state.arr)
    }

    function btn_Listener (arr){
        for(let i = 0; i < arr.length; i++){
            arr[i].addEventListener('click',(e)=>{
                if(e.target.innerText === "Celsius"){
                   celsius(e.target.id);
                } else if(e.target.innerText === "Celvin"){
                    celvin(e.target.id)
                } else if(e.target.innerText === "Fahrenheit"){
                    fahrenheit(e.target.id);
                }
            });
        }
    }

    function render (arr){
        
        _state.row_text.innerHTML = '';
        arr.map((item,i) => _state.row_text.appendChild(container(item,i)));
        
        btn_Listener([...document.getElementsByName("cheang")])
        clear_Listener([...document.getElementsByName('clear')]);

    }

    function container (json,i){
        const container = document.createElement('div');
        container.className = 'row';
        container.id = 'parent_accordionExample'
        container.innerHTML = `
 <div class="col">
        <div class="accordion mt-3 " id="accordionExample">
            <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${json.city.id}" aria-expanded="false" aria-controls="collapse${json.city.id}">
                ${json.city.name} 
                </button>
                
            </h2>
            <div id="collapse${json.city.id}" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="row">

                    <div class="col">
                        <div class="accordion-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">country  <span>${json.city.country}</span></li>
                                <li class="list-group-item">Population <span>${json.city.population} </li>
                                <li class="list-group-item">sunrise <span>${json.city.sunrise} </li>
                                <li class="list-group-item">Sunset <span>${json.city.sunset} </li>
                                <li class="list-group-item">sea_level <span>${json.list[0].main.sea_level}</span></li>
                                <li class="list-group-item">Grnd_level<span>${json.list[0].main.grnd_level}</span></li>
                                <li class="list-group-item">Timezone <span>${json.city.timezone} </li>
                                
                            </ul>
                        </div>
                    </div>

                   

                    <div class="col">
                        <div class="accordion-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Feels_like <span> ${json.list[0].main.feels_like}</span></li>
                                <li class="list-group-item">Humidity <span> ${json.list[0].main.humidity}</span></li>
                                <li class="list-group-item">Pressure <span> ${json.list[0].main.pressure}</span></li>
                                <li class="list-group-item">Temp_kf <span>${json.list[0].main.temp_kf}</span></li>
                                <li class="list-group-item">Temp <span id="temp${i}" >${json.list[0].main.temp + " " + "&#8457"}</span></li>
                                <li class="list-group-item">Temp_max <span id="temp_max${i}">${json.list[0].main.temp_max + " " + "&#8457"}</span></li>
                                <li class="list-group-item">Temp_min <span id="temp_min${i}">${json.list[0].main.temp_min + " " + "&#8457"}</span></li>
                                
                            </ul>
                        </div>
                    </div>

                  

                </div>
                <div class="row">
                    <div class="col m-2 ">
                        <div class="btn-group w-50 " role="group" aria-label="Basic mixed styles example">
                            <button id="${i}"  type="button" class="btn btn-danger" name="cheang">Celvin </button>
                            <button id="${i}"  type="button" class="btn btn-warning" name="cheang" >Fahrenheit</button>
                            <button id="${i}"  type="button" class="btn btn-success " name="cheang">Celsius</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
           
    </div>
</div>
<div id="clearItem" class="col"> 
        <button id="${json.city.id}" type="button" class="btn btn-outline-success w-100" name="clear">Delete ${json.city.name}
</button>
</div>
                        `
        return container;
    }

    
    get();
    