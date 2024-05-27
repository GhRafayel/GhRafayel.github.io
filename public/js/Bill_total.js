
const TotalPerPerson = document.querySelector('.Total-per-Person');
const how_many_people = document.getElementById('how_many_people');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const summa = document.getElementById('summa');
const procent = document.getElementById('procent');
const riset = document.getElementById('ris');
const form = document.getElementById('form');

let i = 1;

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let total = Math.floor( (( (Number(summa.value) * Number( procent.value)) / 100)  + Number(summa.value)) / i)
    total <= 0 ? TotalPerPerson.innerHTML = `$ 00:00` : TotalPerPerson.innerHTML = ` $ ${total}` ;
});

riset.addEventListener('click', () =>{
    i = 1;
    how_many_people.innerHTML = 1;
    TotalPerPerson.innerHTML = "$ 00:00";
});    
minus.addEventListener('click', () =>{
    if(i > 1) how_many_people.innerHTML = i-=1;
    
});
plus.addEventListener('click', () =>{
    how_many_people.innerHTML = i+=1;
});
