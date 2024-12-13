
const calculator_display = document.getElementById('calculator_display');
const calculator_numbersBtn =[...document.getElementsByClassName('numberBtn')];
const calculator_mathBtn = [...document.getElementsByClassName('mathBtn')];
const calculator_please_menus = document.getElementById('please_or_menus');
const calculator_equals = document.getElementById('equals');
const calculator_AC = document.getElementById('AC');
const calculator_percent = document.getElementById('%');

let calculator_resolt = '';
let calculator_bol = false;
let calculator_font = 99;

calculator_numbersBtn.forEach( elem =>  elem.addEventListener('click', calculatorAddNumber,  false));
calculator_mathBtn.forEach(    elem =>  elem.addEventListener('click',  calculatorMath, false));

calculator_please_menus.addEventListener('click',(e)=> {
  audio('/public/audio/click1.wav');
  calculator_resolt = Number(calculator_resolt) * -1;
  calculator_display.innerHTML = calculator_resolt;
});

calculator_equals.addEventListener('click',()=> {
  audio('/public/audio/click1.wav');
if(calculator_resolt.length >= 1){
    let a = calculator_resolt.split('');
    if(a[a.length - 1] !== '%'){
          if(a[a.length - 1] === '+' || a[a.length - 1] === '-' || a[a.length - 1] === '*'  || a[a.length - 1] === '/'){
            delete a[a.length - 1];
            calculator_resolt = String(eval(a.join('')));
            calculator_display.innerHTML = calculator_resolt;
          }else{
            calculator_resolt =  String(eval(calculator_resolt));
            calculator_display.innerHTML = calculator_resolt
          }
    }else{
      delete a[a.length - 1];
      calculator_display.innerHTML = ( Number(calculator_resolt = a.join('')) * Number(calculator_display.innerHTML )) / 100 + '%';
    }
  }
});

calculator_AC.addEventListener('click', (e)=> {
  audio('/public/audio/click1.wav');
   calculator_resolt = '';
   calculator_bol = false;
   calculator_font = 99;
   calculator_display.innerHTML = '0';
   calculator_display.style = `calculator_font-size: ${calculator_font}%`;
})

calculator_percent.addEventListener('click', (e)=> { 
  audio('/public/audio/click1.wav');
  calculator_resolt = eval(calculator_resolt) + e.target.id;
  calculator_display.innerHTML = '0';
});

function calculatorMath(evn){
  
  audio('/public/audio/click1.wav');
  if(calculator_resolt.length >= 1 ){
  try{
    calculator_display.innerHTML = eval(calculator_resolt);
    if(calculator_display.innerHTML.length >= 17) {
       calculator_display.style = `calculator_font-size:${calculator_font/2-5}%; `;
    }
      
  }
  catch{
    console.log(Error);
  }
  calculator_resolt += evn.target.id;
  calculator_bol = true;
  let a = calculator_resolt.split('');
  if(a[a.length - 1] === '+' || a[a.length - 1] === '-' || a[a.length - 1] === '*'  || a[a.length - 1] === '/'){
        if( a[a.length - 2] === '+' || a[a.length - 2] === '-' || a[a.length - 2] === '*'  || a[a.length - 2] === '/'){
            delete a[a.length - 2];
            calculator_resolt = a.join('');
        }
  }
}
  
}

function calculatorAddNumber(evn){
  
audio('/public/audio/click1.wav');
    let a = calculator_resolt.split('');
    if(a[a.length - 1] !== '%' ){
        calculator_resolt += evn.target.innerHTML;
    }
    if(Number(calculator_display.innerHTML.length) <= 18){
      if(calculator_display.innerText.length >= 9){
        if(calculator_font > 70)  calculator_font -= 6.3
        else if(calculator_font > 50) calculator_font -= 5
          calculator_display.style = `calculator_font-size:${calculator_font}%; `;
      }

      if(calculator_bol === true) calculatorClear();
      if(calculator_display.innerHTML === '0' && evn.target.innerHTML !== '.'){
          calculator_display.innerHTML = evn.target.innerHTML;
        } else if(calculator_display.innerHTML.split('').filter(item => item === '.').length >= 1 && evn.target.innerHTML === '.'){
          console.log("Ther are ...");
        }else{
          calculator_display.innerHTML += evn.target.innerHTML;
        }
      calculator_bol = false;
  }


}

function calculatorClear(){
  audio('/public/audio/click1.wav')
  calculator_display.innerHTML = '0';
}


