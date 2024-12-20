const game_3_root = document.getElementById('game_3_root_div');
const game_3_reset = document.getElementById('game_3_reset_btn');

const game_3_anumals = document.getElementById('game_3_anumals_btn');
const game_3_numbers = document.getElementById('game_3_numbers_btn');

const game3_level_btn_1 = document.getElementById('game3_level_btn_1');
const game3_level_btn_2 = document.getElementById('game3_level_btn_2');
const game3_level_btn_3 = document.getElementById('game3_level_btn_3');
const game3_level_btn_4 = document.getElementById('game3_level_btn_4');
const game3_level_btn_5 = document.getElementById('game3_level_btn_5');


const game3 = {
  Numbers:[
    "number1.jpeg",
    "number2.png",
    "number3.png",
    "number4.png",
    "number5.png",
    "number6.png",
    "number7.png",
    "number8.png",
    "number9.png",
    "number10.png",
    "number11.png",
    "number12.png"
 ],
 Animals:[
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
 ],
 playArray: undefined,
 bool: true,
 inspection:{},
 win: 0,
 level: 8,
 interval:undefined,
 
}

game_3_reset.addEventListener('click',()=> {
  clearTimeout(game3.interval);
  game_3_root.style = `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  `
  game3.playArray = undefined;
  game3.level = 8;
  gaem3CreateImgElement(game3.Animals.concat(game3.Numbers));
  audio('/public/audio/audio4.wav');
  
});

game_3_anumals.addEventListener('click',game3Start);
game_3_numbers.addEventListener('click',game3Start);

function game3Start(e){
  game3.playArray = e.target.innerHTML;
  game3_level_btn_1.addEventListener('click',()=> game3Level(8));
  game3_level_btn_2.addEventListener('click',()=> game3Level(6));
  game3_level_btn_3.addEventListener('click',()=> game3Level(4));
  game3_level_btn_4.addEventListener('click',()=> game3Level(2));
  game3_level_btn_5.addEventListener('click',()=> game3Level(0));
  game3AddClick();
  game3Level(game3.level);

}

function game3AddClick(num){
  [...document.getElementsByClassName('game3_click')]
         .forEach( img => {
          num === 8 ? img.style = "opacity: 0; width: 100px; height: 100px; " :
          num === 6 ? img.style = "opacity: 0; width: 90px; height: 90px; " :
          num === 4 ? img.style = "opacity: 0; width: 65px; height: 65px; " :
          img.style = "opacity: 0;"
          img.addEventListener('click', game3Style);
         });
}

function game3Style(eve){
 
  eve.target.style.opacity = 1;

  if(game3.bool === true && game3.inspection[eve.target.src] === undefined) {
    audio('/public/audio/click1.wav');
     game3.inspection[eve.target.src] = eve.target.id;
     document.getElementById(eve.target.id).removeEventListener('click', game3Style);
     game3.bool = !game3.bool 
  }else if(game3.bool === false && game3.inspection[eve.target.src] === undefined){
    audio('/public/audio/click3.wav');
    game3.bool = !game3.bool 
    game3.inspection = {};
    [...document.getElementsByClassName('game3_click')] .forEach( img => img.removeEventListener('click', game3Style));
    game3.interval = setTimeout(()=>{
      game3AddClick(game3.level);
    },1500);
    game3.inspection = {};
  }else {
    game3.inspection[eve.target.src + 1] = eve.target.id;
    Object.values(game3.inspection).forEach(value => {
     const element =  document.getElementById(value);
     element.style.opacity = 1;
     element.className = "img-thumbnail";
     element.removeEventListener('click', game3Style);
    });
    game3.win -= 2;
    audio('/public/audio/click5.wav');
    game3AddClick(game3.level);
    game3.inspection = {};
    game3.bool = true;
  }
  
  if(game3.win <= 0){
    
    audio('/public/audio/ambient-piano-logo-165357.mp3');
    setTimeout(()=> game3Level(game3.level -= 2),2500)
    
  }
}

function game3Level(num){
  debugger
  game3.level = num;
  audio('/public/audio/click1.wav');
  if(game3.playArray !== undefined){
    let currently_array = game3SortUsingArrya(game3[game3.playArray]);
    gaem3CreateImgElement(game3SortUsingArrya(currently_array.slice(num) .concat(currently_array.slice(num))));
    num === 0 ? game_3_root.style = ` display: grid;
                                      grid-template-columns:repeat(6, auto);
                                      grid-template-rows: auto;`
                                      :
     num === 2 ? game_3_root.style = ` display: grid;
                                       grid-template-columns:repeat(5, auto);
                                       grid-template-rows: auto;` 
                                      :
                 game_3_root.style = `display: grid;
                                      grid-template-columns:  repeat(4, auto) ;
                                      grid-template-rows: auto;`
                                      
    game3AddClick(game3.level);
  } else {
    alert('Choose your favorite images...');
  }
 
  
}

function game3SortUsingArrya(array){
  const randomly = () => Math.random() - 0.5;
  return array.sort(randomly);
}

function gaem3CreateImgElement(array){
  game3.win = array.length;
  game_3_root.innerHTML = "";
  array.map( img => {
    const div = document.createElement('div');
    div.style = "border: 1px solid black; border-radius:50%; margin: 2px;"
    div.innerHTML = `<img id="${Math.random()}" src="/public/img/${img}" alt="${img}" class="img-thumbnail game3_click"/>`
    game_3_root.appendChild(div);
  });
}

gaem3CreateImgElement(game3.Animals.concat(game3.Numbers))