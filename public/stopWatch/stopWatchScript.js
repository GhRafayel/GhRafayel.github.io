const milisecondelement = document.querySelector('.milisecound');
const secondelement =  document.querySelector('.secound');
const minuteelement =  document.querySelector('.minute');


const startButton = document.querySelector('.button-start');
const stopButton =  document.querySelector('.button-stop');
const resetButton =  document.querySelector('.button-reset');

let milisecond  = 0;
let second = 0;
let minute = 0;
let interval ;

startButton.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(teimer, 10)
}); 

stopButton.addEventListener('click',()=>{
    clearInterval(interval)
});
  
resetButton.addEventListener('click',()=>{
    clearInterval(interval)
    milisecond  = 00;
    second = 00;
    minute = 00;
    milisecondelement.innerHTML = "00"
    secondelement.innerHTML = "00"
    minuteelement.innerHTML = "00"
});  

function teimer(){
    milisecond++;
        milisecond <= 9 ?
        milisecondelement.innerHTML = '0' + milisecond :
        milisecondelement.innerHTML =  milisecond;

        if(milisecond > 99){
    second++;
            secondelement.innerHTML = "0" + second;
            milisecond = 0;
            milisecondelement.innerHTML = '0' + milisecond 
        }
         second <= 9 ?
        secondelement.innerHTML =  '0' + second :
        secondelement.innerHTML =  second;

        if(second > 60){
    minute++;
        minuteelement.innerHTML = "0" + minute;
        second = 0;
        secondelement.innerHTML = "0" + second;
        }
    
        minute < 9 ?
        minuteelement.innerHTML =  '0' + minute :
        minuteelement.innerHTML =  minute;
}
