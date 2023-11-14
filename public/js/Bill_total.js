
const TotalPerPerson = document.querySelector('.Total-per-Person');
const people = document.getElementById('span-person');
const percent = document.getElementById(' percent');
const summa = document.getElementById('summa');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const reset = document.getElementById('reset');
const submit = document.getElementById('submit');

let i = 1;
people.innerHTML = i;
reset.addEventListener("click",()=>{
    people.innerHTML = i;
});
minus.addEventListener('click', () =>{
    people.innerHTML = i-=1;
});
plus.addEventListener('click', () =>{
    people.innerHTML = i+=1;
})
reset.addEventListener("click",()=>{
    people.innerHTML = i;
});
submit.addEventListener('click',()=>{
    bittotal();
});
addEventListener('keydown',(e)=>{
    if(e.key === 'Enter' ){
        bittotal();
    }
})
function bittotal(){
    TotalPerPerson.innerHTML = ` $ ${create(Number(summa.value),Number( percent.value))}`;
}
function create(bitTotal,Tip){
    return (( (bitTotal * Tip) / 100)  + bitTotal) / i;
}