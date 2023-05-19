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
    /*
let numberImg = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png', 
    '9.png'
];
*/

    animalImg.forEach((element)=>{
        document.getElementById('div-parent')
        .appendChild(document.createElement('div'))
        .appendChild(document.createElement("img"))
        .src = `../img/game_memory/${element}`;
        text.innerHTML = 'You  can start the game' ;
    });

   
reset.addEventListener('click',()=>{
    divParent.innerHTML = '';
    text.innerHTML  = 'You  can start the game' ;
    animalImg.forEach((element)=>{
        document.getElementById('div-parent')
        .appendChild(document.createElement('div'))
        .appendChild(document.createElement("img"))
        .src = `../img/game_memory/${element}`;
    });

})

btn_12.addEventListener('click', () => {
    divParent.innerHTML = '';
    let arr = sortAnimal(animalImg);
    createElement(sortAnimal(arr.slice(6).concat(arr.slice(6))));
    text.innerHTML = ' The game has started' ;

});
btn_16.addEventListener('click', () => {
    divParent.innerHTML = '';
    let arr = sortAnimal(animalImg);
    createElement(sortAnimal(arr.slice(4).concat(arr.slice(4))));
    text.innerHTML = ' The game has started' ;

});
btn_20.addEventListener('click', () => {
    divParent.innerHTML = '';
    let arr = sortAnimal(animalImg);
    createElement(sortAnimal(arr.slice(2).concat(arr.slice(2))));
    text.innerHTML = ' The game has started' ;

});
btn_24.addEventListener('click', () => {
    divParent.innerHTML = '';
    let arr = sortAnimal(animalImg);
    createElement(sortAnimal(arr.concat(arr)));
    text.innerHTML = ' The game has started' ;

});
function sortAnimal(arr){
    const randomly = () => Math.random() - 0.5;
    return arr.sort(randomly);
}

function createElement(arr){
    for(let i = 0; i < arr.length; i++) {
        let div = document.createElement('div');
        let img = div.appendChild(document.createElement('img'));
            img.src = `../img/game_memory/${arr[i]}`;
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


 