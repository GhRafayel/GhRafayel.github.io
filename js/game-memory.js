const start = document.getElementById('start-btn');
const divParent = document.getElementById('div-parent');
const btn_12 = document.getElementById('start-btn-12');
const btn_16 = document.getElementById('start-btn-16');
const btn_20 = document.getElementById('start-btn-20');
const btn_24 = document.getElementById('start-btn-24');
const reset = document.getElementById('reset');
const   span = document.getElementById('span');

let animalImg  = [
    'Rabbit.jpeg',
    'Deer.jpeg',
    'Elephant.jpeg',
    'Fox.jpeg',
    'Giraffe.jpeg',
    'Monkey.jpeg',
    'Panda.jpeg',
    'Parrot.jpeg',
    'Pig.jpeg',
    'Rhinoceros.jpeg',
    'Tiger.jpeg',
    'Zebra.jpeg'
    ];
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

    animalImg.forEach((element)=>{
        document.getElementById('div-parent')
        .appendChild(document.createElement('div'))
        .appendChild(document.createElement("img"))
        .src = `../img/${element}`;
        span.innerHTML = 'You  can start the game' ;
    });

   
reset.addEventListener('click',()=>{
    divParent.innerHTML = '';
    span.innerHTML = 'You  can start the game' ;
    animalImg.forEach((element)=>{
        document.getElementById('div-parent')
        .appendChild(document.createElement('div'))
        .appendChild(document.createElement("img"))
        .src = `../img/${element}`;
    });
})

btn_12.addEventListener('click', () => {
    divParent.innerHTML = '';
    createElement(animalImg.slice(6).concat(animalImg.slice(6)));
});
btn_16.addEventListener('click', () => {
    divParent.innerHTML = '';
    createElement(animalImg.slice(4).concat(animalImg.slice(4)));
});
btn_20.addEventListener('click', () => {
    divParent.innerHTML = '';
     createElement(animalImg.slice(2).concat(animalImg.slice(2)));
});
btn_24.addEventListener('click', () => {
    divParent.innerHTML = '';
    createElement(animalImg.concat(animalImg));
});


function createElement(arr){
    arr.forEach((element)=>{
            document.getElementById('div-parent')
            .appendChild(document.createElement('div'))
            .appendChild(document.createElement("img"));
        });
        
        const randomly = () => Math.random() - 0.5;
        const traitInfo = Array(arr.length).fill({}); 
        const dynamicSrc = [].concat(arr).sort(randomly);

        traitInfo.forEach((t, i) => {
            document.getElementsByTagName('img').item(i).src = `../img/${dynamicSrc[i]}`;
            document.getElementsByTagName('img').item(i).style = 'opacity:0;';
        });
        imgClick();
}


function imgClick(){
 let imgArrey = [...document.getElementsByTagName('img')];
 let openingElementArrey = [];
 let arr = [];
 imgArrey.forEach((v)=>{
        v.addEventListener('click', (e) => {
            e.target.style = 'opacity:1;';
                arr.push(e.target)
            if(arr.length === 2 ){
                if(arr[0].src === arr[1].src){
                  arr.forEach((v)=> openingElementArrey.push(v));
                  openElement(openingElementArrey,imgArrey);
                       arr = [];
                } else{
                    //arr.forEach((v)=> v.style = 'opacity:1;');
                       arr = [];
                   setTimeout(()=>{
                        imgArrey.forEach((v) => v.style = 'opacity:0;');
                        openElement(openingElementArrey,imgArrey);
                    },400)
                   // clearTimeout(time);
                }
            }
        });
    })
} 
 function openElement(arr1,arr2){
        arr1.forEach((v) => v.style = 'opacity:1;')
        if(arr1.length === arr2.length){
            span.innerHTML = 'You Won' ;
        }  
        
 }


 