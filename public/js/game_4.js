
const bulletSrc = '/public/img/bullet.jpg';
const gunSrc = '/public/img/gun.webp';
const foxSrc = '/public/img/Fox.jpeg';


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const beckgroundImage = createImage('/public/img/space.avif');

const asteroid = {
  astFirst: createImage('/public/img/asteroid.webp'),
  astSecound: createImage(),
  astThreat: createImage(),
  astfourth: createImage(),
  astFifth: createImage(),
  astSixth: createImage(),
  astSeventh: createImage(),
}

const _date = {
  Tank(){
    this.x = 0;
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.life = 100;
  },

  oderTank(){
    this.x = 0;
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.life = 100;
  },

  gun(){
    this.x = 0;
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.life = 100;
  },

  bullet(){
    this.x = 0;
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.life = 100;
  },
};

function createImage(src){
  const img = document.createElement("img");
  img.src = src;
  return img;
};

function createAudio(src){
  const audio = document.createElement("audio");
  audio.src = src;
  return audio;
};

function update(){

}


function drow(){
 ctx.drawImage(beckgroundImage, 0, 0, canvas.width, canvas.height)
}



document.addEventListener('keyup',(e)=>{
  
  
})
function loop (){
  requestAnimationFrame(loop);
  drow();
  update();
}
loop();