
const start = document.getElementById('start-btn');
const divParent = document.getElementById('div-parent');

const reset = document.getElementById('reset');
const title = document.getElementById('h1-title');


let playArrey ;
let imgArrey = [];
let arr = [];

const numberImg = [
    "number1.jpeg",
    "number2.png",
    "number3.png",
    "number4.png",
    "number5.png",
    "number6.png",
    "number7.png",
    "number8.png",
    "number9.png",
];
const animalImg  = [
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

function play(src) {
  const audio = document.createElement('audio');
  audio.src = `/public/audio/${src}`;
  audio.play();
  
}

function sortAnimal(arr){
  const randomly = () => Math.random() - 0.5;
  return arr.sort(randomly);
}

function listning(){
  const btn_12 = document.getElementById('start-btn-12');
  const btn_16 = document.getElementById('start-btn-16');
  const btn_20 = document.getElementById('start-btn-20');
  const btn_24 = document.getElementById('start-btn-24');

  btn_12.addEventListener('click', () => {
    if(playArrey !== undefined){
      divParent.style = 'width:700px; border: 2px solid black; padding:10px'
      let newArry = sortAnimal(playArrey);
      createElement(sortAnimal(newArry.slice(6) .concat(newArry.slice(6))));
    } else {
      title.innerHTML = 'Choose your favorite images...'
    }
  });

  btn_16.addEventListener('click', () => {
    if(playArrey !== undefined){
      divParent.style = 'width:900px; border: 2px solid red; padding:10px'
      let newArry = sortAnimal(playArrey);
      createElement(sortAnimal(newArry.slice(4).concat(newArry.slice(4))));
    } else {
      title.innerHTML = 'Choose your favorite images...'
    }
  });

  btn_20.addEventListener('click', () => { 
    if(playArrey !== undefined){
      divParent.style = 'width:1100px; border: 2px solid green; padding:10px'
      let newArry = sortAnimal(playArrey);
      createElement(sortAnimal(newArry.slice(2).concat(newArry.slice(2))));
    } else {
      title.innerHTML = 'Choose your favorite images...'
    }
  });

  btn_24.addEventListener('click', () => {
    if(playArrey !== undefined){
      divParent.style = 'width:1100px; border: 2px solid green; padding:2px'
      createElement(sortAnimal(playArrey.concat(playArrey)));
    } else {
      title.innerHTML = 'Choose your favorite images...'
    }
  });

}

reset.addEventListener('click',()=>{
  playArrey = undefined;
  divParent.style = 'width:1100px; padding:2px'
  document.getElementById('level').innerHTML = '';
  started(animalImg.concat(numberImg));
})

function choose (e){
  levelContainer();
    if(e.target.id === 'animals'){
         playArrey = animalImg
         divParent.innerHTML = '';
          started(playArrey)
          document.getElementById('numbers')
          //.removeEventListener('click', choose,false);
    }else if(e.target.id === 'numbers'){
        playArrey = numberImg
        divParent.innerHTML = '';
        started(playArrey);
        document.getElementById('animals')
        //.removeEventListener('click', choose,false);
    }
}

function started(arr){
  // divParent.style = 'width:1150px;'

    document.getElementById('animals').addEventListener('click', choose, false);
    document.getElementById('numbers').addEventListener('click', choose, false);

    title.innerHTML = 'You  can start the game' ; 
    divParent.innerHTML = '';
    arr.map(el => container(el))
    .forEach( item => {
        divParent.appendChild(item);
    });
    return divParent;
}

function container(el){
    const   container = document.createElement('div');
            container.innerHTML =  `<img src="/public/img/${el}" alt="img" id="${Math.random()}" class="img-thumbnail"/> `
    return container;
}

function levelContainer(){
  document.getElementById('level').innerHTML =''; 
  const container = document.createElement('div');
  container.className = " text-center m-5 ";
    container.innerHTML = ` <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
    <label id="start-btn-12" class="btn btn-outline-primary" for="btnradio1"> Level 1</label>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
    <label id="start-btn-16" class="btn btn-outline-primary" for="btnradio2">Level 2</label>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
    <label id="start-btn-20" class="btn btn-outline-primary" for="btnradio3">Level 3</label>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
    <label id="start-btn-24" class="btn btn-outline-primary" for="btnradio4">Level 4</label>
</div>`

 document.getElementById('level').appendChild(container);
 listning();
}

function createElement(arr){

    title.innerHTML = ' The game has started';
    divParent.innerHTML = '';

    arr.map( el => container(el)).forEach(el => {
        divParent.appendChild(el);
    });    
    
    imgArrey.push(...document.getElementsByTagName('img'));
    imgClick();
}

function fo(e) {
  play('mixkit-gear-fast-lock-tap-2857.wav');
  e.target.style = 'opacity:1;';
  arr.push(e.target);
  if(arr.length === 2 ){
    imgArrey.forEach( value => value.removeEventListener('click', fo, false))
    if(arr[0].src === arr[1].src && arr[0].id !== arr[1].id){
          openElement(arr[0].src);
          arr = [];
      } else {
          arr = [];
          setTimeout(()=> imgClick() ,1000)
      }
  }
}

function imgClick(){
  imgArrey.forEach((v)=> {
          v.style = 'opacity:0; cursor:pointer;';
          v.addEventListener('click', fo, false);
      })
} 
function openElement(a){
  if(a !== undefined){
    imgArrey.forEach( value => value.removeEventListener('click', fo, false))
    imgArrey = imgArrey.filter(item =>  item.src !== a );
    imgClick();
  }
      if(imgArrey.length === 0){
        title.innerHTML = 'You Won' ;
    }      
}

started(animalImg.concat(numberImg));
