const Reset = document.querySelector(".button-Reset");
const play = document.querySelector(".button-play");

const spiele = document.querySelector("#canvac");
const win = document.querySelector("div-button-Reset");

const  audio1 = document.createElement("audio");
audio1.src = "../audio/audio1.wav";
const  audio2 = document.createElement("audio");
audio2.src = "../audio/audio2.wav";
const  audio3 = document.createElement("audio");
audio3.src = "../audio/audio3.wav";


const position1 = document.querySelector(".Position1");
const position2 = document.querySelector(".Position2");

 let number ;

let heroleft = 100;
let heroright = 100;

function rendom(){
    number = Math.floor(Math.random() * 15);
    return number;
}


play.addEventListener('click', ()=>{
    position1.innerHTML = heroleft;
    position2.innerHTML = heroright;
})
    
spiele.addEventListener('keydown', (e) =>{
   // audio2.play();
    if(e.key === 'q' || e.key === 'p'){
        position2.innerHTML = heroright -= rendom();  
        audio1.play();      
    }


    if(e.key === 'a' || e.key === 'l'){
        if(heroleft < 100){
            position1.innerHTML = heroleft +=  rendom();
                if(heroleft > 100){
                    position1.innerHTML = heroleft = 100;
                }
        }
    }
   
});

Reset.addEventListener('click', ()=>{
    position1.innerHTML = '';
    position2.innerHTML = '';
    heroleft = 100;
    heroright = 100;
    audio3.play();

})