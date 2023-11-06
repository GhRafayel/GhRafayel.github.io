const reset = document.querySelector(".button-reset");
const play = document.querySelector(".button-play");

const won = document.getElementById("result");

const  audio1 = document.createElement("audio");
audio1.src = '/public/audio/audio1.wav';
const  audio2 = document.createElement("audio");
audio2.src = '/public/audio/audio2.wav';
const  audio3 = document.createElement("audio");
audio3.src = '/public/audio/audio3.wav';


const position1 = document.querySelector(".Position1");
const position2 = document.querySelector(".Position2");

const attackHero1 = document.querySelector('.Attack-Hero1')
const attackHero2 = document.querySelector('.Attack-Hero2')
const helpHero1 = document.querySelector('.Help-Hero1')
const helpHero2 = document.querySelector('.Help-Hero2')

 

let heroLeft = 100;
let heroRight = 100;

function rendom(){
    number = Math.round(Math.random(0) * 15);
    return number;
}


play.addEventListener('click', ()=>{
    position1.innerHTML = heroLeft;
    position2.innerHTML = heroRight;



    attackHero1.addEventListener('click', ()=>{
        position2.innerHTML = heroRight -= rendom(); 
        if(heroRight < 0 ){
            result('Spiderman has won');
        } 
        audio1.play();
    });
    attackHero2.addEventListener('click', ()=>{
        position1.innerHTML = heroLeft -= rendom();
            if(heroLeft < 0 ){
                result('Batman has won');
            } 
            audio1.play();
        
    });
    
    helpHero1.addEventListener('click', ()=>{
        if(heroLeft < 100){
            position1.innerHTML = heroLeft +=  rendom();
                if(heroLeft > 100){
                    position1.innerHTML = heroLeft = 100;
                }
        }
    });
    helpHero2.addEventListener('click', ()=>{
        if(heroRight < 100){
            position2.innerHTML = heroRight += rendom();
                if(heroRight > 100){
                    position2.innerHTML = heroRight = 100;
                }
        }
    
    });

    addEventListener('keydown', (e) =>{
        
        if(e.key === 'q' ){
            position2.innerHTML = heroRight -= rendom(); 
            if(heroRight < 0 ){
                result('Spiderman has won');
            } 
            audio1.play();
        }
        if(e.key === 'p'){
            position1.innerHTML = heroLeft -= rendom();
            if(heroLeft < 0 ){
                result('Batman has won');
            } 
            audio1.play();
        }
        if(e.key === 'a'){
            if(heroLeft < 100){
                position1.innerHTML = heroLeft +=  rendom();
                    if(heroLeft > 100){
                        position1.innerHTML = heroLeft = 100;
                    }
            }
        }
        if(e.key === 'l'){
            if(heroRight < 100){
                position2.innerHTML = heroRight += rendom();
                    if(heroRight > 100){
                        position2.innerHTML = heroRight = 100;
                    }
            }
        }
    })
    
})


function result(result){
        document.getElementById('result').innerHTML = result;
}

reset.addEventListener('click', ()=>{
    position1.innerHTML =  heroLeft = 100;
    position2.innerHTML =  heroRight = 100;
    audio3.play();
})

