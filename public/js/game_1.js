    
    const  btnScissorsr =  document.querySelector('.button-scissors');
    const  stone  =  document.querySelector('.button-stone');
    const  paper =  document.querySelector('.button-paper');
    const  won    =  document.querySelector('.button-won');

    let set = [btnScissorsr, stone, paper];

    let rock = document.querySelector('.Rock');
    let scissors = document.querySelector('.Comouter');
    let resoult = document.querySelector('.resoult');
    let computer ;
    let rockNamber = 0;
    let scissorsNamber = 0;
    rock.innerHTML = rockNamber;
    scissors.innerHTML = scissorsNamber;


    btnScissorsr.addEventListener('click', () => {
        audio('/public/audio/mixkit-gear-fast-lock-tap-2857.wav')
        resoult.innerHTML = '' ;
        rock.innerHTML = ` Scissors ${rockNamber}` ;
        computer = set[ Math.floor(Math.random() * 3)];

        if(computer === btnScissorsr){
            scissors.innerHTML =  `Scissors ${scissorsNamber }`;
            rock.innerHTML = `Scissors ${rockNamber }`;
        }
         if(computer === stone){
            scissors.innerHTML =  `stone ${scissorsNamber  += 1}`;
        }
         if(computer === paper){
            rock.innerHTML = `Scissors ${rockNamber  += 1}`;
            scissors.innerHTML =  `paper ${scissorsNamber}`;
        }
    });
    
    stone.addEventListener('click',  () => {
        audio('/public/audio/mixkit-gear-fast-lock-tap-2857.wav')
        resoult.innerHTML = '' ;
        rock.innerHTML = ` stone ${rockNamber}` ;
        computer = set[ Math.floor(Math.random() * 3)];

        if(computer === stone){
            scissors.innerHTML =  `stone ${scissorsNamber}`;
            rock.innerHTML = `stone ${rockNamber }`;
        }
         if(computer === btnScissorsr){
            scissors.innerHTML = `Scissors ${scissorsNamber }`;
            rock.innerHTML = `stone ${rockNamber += 1}`;
        }
         if(computer === paper){
            scissors.innerHTML =  `paper ${scissorsNamber +=1}`;
            rock.innerHTML = `stone ${rockNamber }`;
        }
    });
    
    paper.addEventListener('click', () => {
        audio('/public/audio/mixkit-gear-fast-lock-tap-2857.wav')

        resoult.innerHTML = '' ;
        rock.innerHTML = ` paper ${rockNamber}` ;
        computer = set[ Math.floor(Math.random() * 3)];

        if(computer === btnScissorsr){
            scissors.innerHTML =  `Scissors ${scissorsNamber +=1}`;
        }
        if(computer === stone){
            scissors.innerHTML =  `stone ${scissorsNamber }`;
            rock.innerHTML = `paper ${rockNamber += 1}`;
        }
        if(computer === paper){
            scissors.innerHTML =  `paper ${scissorsNamber }`;
        }
    });

    won.addEventListener('click', () => {
        if(rockNamber > scissorsNamber){
            resoult.innerHTML = 'You win!' ;
        } else if(rockNamber === scissorsNamber){
            resoult.innerHTML = 'No win!!' ;
        }
        else {
            resoult.innerHTML = 'You lost!' ;
        }
        rockNamber = 0;
        scissorsNamber = 0;
        rock.innerHTML = 0;
        scissors.innerHTML = 0;
    });
    
    function audio (url){
        const audio = document.createElement('audio');
        audio.src = url;
        audio.play();
    }


