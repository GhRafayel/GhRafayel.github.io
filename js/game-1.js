    
    const  scissorsr =  document.querySelector('.button-scissors');
    const  stone  =  document.querySelector('.button-stone');
    const  paper =  document.querySelector('.button-paper');
    const  won    =  document.querySelector('.button-won');

    let set = [scissorsr, stone, paper];

    let rock = document.querySelector('.Rock');
    let scissors = document.querySelector('.Comouter');
    let resoult = document.querySelector('.resoult');
    let computer ;
    let rockNamber = 0;
    let scissorsNamber = 0;
    rock.innerHTML = rockNamber;
    scissors.innerHTML = scissorsNamber;



    scissorsr.addEventListener('click', () => {
        resoult.innerHTML = '' ;
        rock.innerHTML = ` scissorsr ${rockNamber}` ;
        computer = set[ Math.floor(Math.random() * 3)];

        if(computer === scissorsr){
            scissors.innerHTML =  `scissorsr ${scissorsNamber }`;
            rock.innerHTML = `scissorsr ${rockNamber }`;
        }
         if(computer === stone){
            scissors.innerHTML =  `stone ${scissorsNamber  += 1}`;
        }
         if(computer === paper){
            rock.innerHTML = `scissorsr ${rockNamber  += 1}`;
            scissors.innerHTML =  `paper ${scissorsNamber}`;
        }
    });
    
    stone.addEventListener('click',  () => {
        resoult.innerHTML = '' ;
        rock.innerHTML = ` stone ${rockNamber}` ;
        computer = set[ Math.floor(Math.random() * 3)];

        if(computer === stone){
            scissors.innerHTML =  `stone ${scissorsNamber}`;
            rock.innerHTML = `stone ${rockNamber }`;
        }
         if(computer === scissorsr){
            scissors.innerHTML = `scissorsr ${scissorsNamber }`;
            rock.innerHTML = `stone ${rockNamber += 1}`;
        }
         if(computer === paper){
            scissors.innerHTML =  `paper ${scissorsNamber +=1}`;
            rock.innerHTML = `stone ${rockNamber }`;
        }
    });
    
    paper.addEventListener('click', () => {
        resoult.innerHTML = '' ;
        rock.innerHTML = ` paper ${rockNamber}` ;
        computer = set[ Math.floor(Math.random() * 3)];

        if(computer === scissorsr){
            scissors.innerHTML =  `scissorsr ${scissorsNamber +=1}`;
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


