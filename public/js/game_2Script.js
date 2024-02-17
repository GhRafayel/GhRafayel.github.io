
const reset = document.querySelector(".button-reset");
const play = document.querySelector(".button-play");

const won = document.getElementById("result");


const  audio3 = document.createElement("audio");
audio3.src = '/public/audio/audio3.wav';

function audioPlayer(audio){
    const a = document.createElement("audio");
    a.src = audio
    a.play();
}
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
      if(heroRight > 0){
        position2.innerHTML = heroRight -= rendom(); 
        if(heroRight <= 0 ){
            
            result('Spiderman has won');
        } 
        audioPlayer('/public/audio/audio1.wav')}  
        if(heroRight < 0){
            position2.innerHTML = 0;
          }
    });

    attackHero2.addEventListener('click', ()=>{
       if(heroLeft > 0){
        position1.innerHTML = heroLeft -= rendom();
            if(heroLeft <= 0 ){
                result('Batman has won');
            } 
            audioPlayer('/public/audio/audio1.wav')
       }
      if(heroLeft <= 0){
        position1.innerHTML = 0;
      }
        
       
            
    });
    
    helpHero1.addEventListener('click', ()=>{
        if(heroLeft < 100){
            position1.innerHTML = heroLeft +=  rendom();
                if(heroLeft > 100){
                    position1.innerHTML = heroLeft = 100;
                }
                audioPlayer('/public/audio/audio4.wav')
        }
       
    });
    helpHero2.addEventListener('click', ()=>{
        if(heroRight < 100){
            position2.innerHTML = heroRight += rendom();
                if(heroRight > 100){
                    position2.innerHTML = heroRight = 100;
                }
                audioPlayer('/public/audio/audio4.wav')
        }
    
    });

    addEventListener('keydown', (e) =>{
        
        if(e.key === 'q' ){
            position2.innerHTML = heroRight -= rendom(); 
            if(heroRight < 0 ){
                result('Spiderman has won');
            } 
            audioPlayer('/public/audio/audio1.wav')
        }
        if(e.key === 'p'){
            position1.innerHTML = heroLeft -= rendom();
            if(heroLeft < 0 ){
                result('Batman has won');
            } 
            audioPlayer('/public/audio/audio1.wav')
        }
        if(e.key === 'a'){
            if(heroLeft < 100){
                position1.innerHTML = heroLeft +=  rendom();
                    if(heroLeft > 100){
                        position1.innerHTML = heroLeft = 100;
                    }
                    audioPlayer('/public/audio/audio4.wav')

            }
        }
        if(e.key === 'l'){
            if(heroRight < 100){
                position2.innerHTML = heroRight += rendom();
                    if(heroRight > 100){
                        position2.innerHTML = heroRight = 100;
                    }
                    audioPlayer('/public/audio/audio4.wav')

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
    audioPlayer('/public/audio/audio3.wav')
})

