const start = document.getElementById('start-btn');
const divParent = document.getElementById('div-parent');
const btn_12 = document.getElementById('start-btn-12');
const btn_16 = document.getElementById('start-btn-16');
const btn_20 = document.getElementById('start-btn-20');
const btn_24 = document.getElementById('start-btn-24');
const reset = document.getElementById('reset');
const text = document.getElementById('text');

let animalImg  = [
    'Rabbit.jpeg',
    'Deer.jpeg',
    'Elephant.jpeg',
    'Fox.jpeg',
    'Giraffe.jpg',
    'Monkey.jpeg',
    'Panda.jpeg',
    'Parrot.jpeg',
    'Pig.jpeg',
    'Rhinoceros.jpeg',
    'Tiger.jpeg',
    'Zebra.jpeg'
    ];
function loop(arr){
    divParent.innerHTML = '';
    for(let i = 0; i < arr.length; i++){
        let div = document.createElement('div');
        let img = div.appendChild(document.createElement('img'));
            img.src = `./img/${arr[i]}`;
        divParent.append(div);
    }
    text.innerHTML = 'You  can start the game' ;       
    return divParent;
}
loop(animalImg);

reset.addEventListener('click',()=>{
   loop(animalImg);
})

function sortAnimal(arr){
    const randomly = () => Math.random() - 0.5;
    return arr.sort(randomly);
}


btn_12.addEventListener('click', () => {
    let newArry = sortAnimal(animalImg);
    createElement(sortAnimal(newArry.slice(6) .concat(newArry.slice(6))));
});
btn_16.addEventListener('click', () => {
    let newArry = sortAnimal(animalImg);
    createElement(sortAnimal(newArry.slice(4).concat(newArry.slice(4))));
});
btn_20.addEventListener('click', () => { 
    let newArry = sortAnimal(animalImg);
    createElement(sortAnimal(newArry.slice(2).concat(newArry.slice(2))));
});
btn_24.addEventListener('click', () => {
    createElement(sortAnimal(animalImg.concat(animalImg)));
});


function createElement(arr){
    divParent.innerHTML = '';
    text.innerHTML = ' The game has started';
    for(let i = 0; i < arr.length; i++) {
        let div = document.createElement('div');
        let img = div.appendChild(document.createElement('img'));
            img.src = `./img/${arr[i]}`;
            img.id = Math.random();
            img.style = 'opacity:0;';
        divParent.append(div);
    }
        imgClick();
}


function imgClick(){
 let imgArrey = [...document.getElementsByTagName('img')];
 let openingElementArrey = [];
 let arr = [];
 imgArrey.forEach((v)=> {
        v.addEventListener('click', (e) => {
            e.target.style = 'opacity:1;';
                arr.push(e.target);
            if(arr.length === 2 ){
                if(arr[0].src === arr[1].src && arr[0].id !== arr[1].id){
                  arr.forEach((v)=> openingElementArrey.push(v));
                  openElement(openingElementArrey,imgArrey);
                       arr = [];
                } else{
                       arr = [];
                   setTimeout(()=>{
                        imgArrey.forEach((v) => v.style = 'opacity:0;');
                        openElement(openingElementArrey,imgArrey);
                    },300)
                }
            }
        }, true);
    })
} 
 function openElement(arr1,arr2){
        arr1.forEach((v) => v.style = 'opacity:1;')
        if(arr1.length === arr2.length){
            text.innerHTML = 'You Won' ;
        }  
        
 }


 