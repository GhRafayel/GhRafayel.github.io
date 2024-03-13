const _data = {
  result: document.getElementById('result'),
  divide: document.getElementById('divide'),
  AC: document.getElementById('AC'),
  percent: document.getElementById('percent'),
  comma: document.getElementById('comma'),
  menus: document.getElementById('menus'),
  please: document.getElementById('please'),
  equals: document.getElementById('equals'),
  multiplication: document.getElementById('multiplication' ),
  please_or_menus: document.getElementById('+/_'),
  numbersArray: [...document.getElementsByTagName('button')].filter(el => el.id === 'number'),
}
 let num = 45;
 let result;
 let value;

_data.numbersArray.forEach( btn => btn.addEventListener('click', add , false));

function add(e){
   if( _data.result.innerText.length >= 9){
      if(num > 30)  num-=3 
              else  num-=2  
   }

   _data.result.style = `font-size: ${num}px`;

  if(_data.result.innerHTML === '0' && e.target.innerHTML !== '.'){
   
    _data.result.innerHTML = e.target.innerHTML;
  } else{
    _data.result.innerHTML += e.target.innerHTML;
  }
}

function please_or_menus(){
   return _data.result.innerHTML = Number(_data.result.innerHTML)* -1 ;
}

function clear(){
  _data.result.innerHTML = "0";
}

function type (val){
  result =  Number(_data.result.innerHTML);
  value = val;
  clear();
}
function equals (val1, val2){
  if(value === '/') _data.result.innerHTML = val1 / val2;
  if(value === '*') _data.result.innerHTML = val1 * val2;
  if(value === '-') _data.result.innerHTML = val1 - val2;
  if(value === '+') _data.result.innerHTML = val1 + val2;
  if(value === '%') _data.result.innerHTML = (val1 * val2) / 100;

}

_data.please.addEventListener('click', () => type("+"));
_data.menus.addEventListener('click',() => type("-"));
_data.divide.addEventListener('click',() => type("/"));
_data.multiplication.addEventListener('click', () => type("*"));
_data.percent.addEventListener('click', () => type("%"));

_data.equals.addEventListener("click",()=>{
  equals( result, Number(_data.result.innerHTML));
});


_data.please_or_menus.addEventListener('click', please_or_menus,false);
_data.AC.addEventListener('click',clear,false);