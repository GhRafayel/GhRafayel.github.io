
const _state = {
    _milisecondelement: document.getElementById('milisecound'),
    _secondelement: document.getElementById('secound'),
    _minuteelement: document.getElementById('minute'),

    _startButton: document.getElementById('button-start'),
    _stopButton:  document.getElementById('button-stop'),
    _resetButton: document.getElementById('button-reset'),

    _lap: document.getElementById('lap-button'),
    _lap_text: document.getElementById('lap-text'),

    _data: [],
    _milisecond: 0,
    _second: 0,
    _minute: 0,
    _interval: undefined,
}


_state._startButton.addEventListener('click',()=>{
    clearInterval(_state._interval);
    _state._interval = setInterval(teimer, 10)
}); 

_state._stopButton.addEventListener('click',()=>{
    clearInterval(_state._interval)
});
  
_state._resetButton.addEventListener('click',()=>{
    
    clearInterval(_state._interval)
    _state._lap_text.innerHTML = '';
    _state._milisecond = "0";
    _state._second = "0";
    _state._minute = "0";
    _state._milisecondelement.innerHTML = "00"
    _state._secondelement.innerHTML = "00"
    _state._minuteelement.innerHTML = "00"
});  

function teimer(){
    
    _state._milisecond++;
    _state._milisecond <= 9 ?
        _state._milisecondelement.innerHTML = '0' + _state._milisecond :
        _state._milisecondelement.innerHTML =  _state._milisecond;

        if(_state._milisecond > 99){
            _state._second++;
            _state._secondelement.innerHTML = "0" + _state._second;
            _state._milisecond = 0;
            _state._milisecondelement.innerHTML = '0' + _state._milisecond 
        }
        _state._second <= 9 ?
        _state._secondelement.innerHTML =  '0' + _state._second :
        _state._secondelement.innerHTML =  _state._second;

        if(_state._second > 59){
        _state._minute++;
        _state._minuteelement.innerHTML = "0" + _state._minute;
        _state._second = 0;
        _state._secondelement.innerHTML = "0" + _state._second;
        }
    
        _state._minute < 9 ?
        _state._minuteelement.innerHTML =  '0' + _state._minute :
        _state._minuteelement.innerHTML =  _state._minute;
}

_state._lap.addEventListener('click', (e) => {
    
    if(_state._milisecondelement.innerHTML !== "00"){
       _state._lap_text.innerHTML = '';
       
        if(_state._data.length > 4){
            _state._data.shift()
        }
        _state._data.push(` ${_state._minuteelement.innerHTML} - ${_state._secondelement.innerHTML} - ${_state._milisecondelement.innerHTML}`)
        _state._data.map((el, i) => {
            return _state._lap_text.appendChild(document.createElement('p'))
            .innerHTML = ` ${i+1} Lap ${el}`
        })
    }
   
})
