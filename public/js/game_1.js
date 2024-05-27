
    const  btnScissorsr =  document.querySelector('.button-scissors');
    const  stone  =  document.querySelector('.button-stone');
    const  paper =  document.querySelector('.button-paper');

    const  won    =  document.querySelector('.button-won');

    const You = document.getElementById('people');
    const compRobot = document.getElementById('compRobot');

    const Your_points =  document.getElementById('Your_points');
    const Comouter_points = document.getElementById('Comouter_points');

    const resoult = document.getElementById('resoult');
    
    let srsArray = ['/public/img/scissors.png', '/public/img/stone.png', '/public/img/paper.png' ];
    let index = 0   
    let Your_Nambers= 0;
    let computer_Nambers = 0;
    
    function innerHTML (num1,num2){
        Comouter_points.innerHTML = computer_Nambers > 1 ? `  ${computer_Nambers} Points` : ` ${computer_Nambers} Point` ;
        Your_points.innerHTML = Your_Nambers > 1 ? ` Points ${Your_Nambers}` : `Point ${Your_Nambers}` ;
        
        You.src = srsArray[num1];
        compRobot.src = srsArray[num2];

        
    }

    btnScissorsr.addEventListener('click', () => {
        clearInterval(interval);
        audio('/public/audio/click1.wav')
        let computer =  Math.floor(Math.random() * 3);
        resoult.innerHTML = '' ;
        
         if(computer === 1){
            computer_Nambers += 1
        }
         if(computer === 2){
           Your_Nambers += 1;
        }
        innerHTML(0,computer);
    });

    
    stone.addEventListener('click',  () => {
        clearInterval(interval);
        audio('/public/audio/click1.wav')
        let computer =  Math.floor(Math.random() * 3);
        resoult.innerHTML = '' ;
        
        if(computer === 0){
           Your_Nambers+= 1;
        }     
        if(computer === 2){
            computer_Nambers  += 1;
        }
        innerHTML(1,computer);

       
    });
    
    paper.addEventListener('click', () => {
        clearInterval(interval);
        audio('/public/audio/click1.wav')
        let computer =  Math.floor(Math.random() * 3);
        resoult.innerHTML = '' ;
        
        if(computer === 0){
            computer_Nambers  += 1;
        }
        if(computer === 1){
          Your_Nambers+= 1;
        }
        innerHTML(2,computer);

        
    });

    won.addEventListener('click', () => {
        clearInterval(interval);
        interval = setInterval( foo, 400);
        if(Your_Nambers > computer_Nambers){
            resoult.innerHTML = 'You win!' ;
        } else if(Your_Nambers === computer_Nambers){
            resoult.innerHTML = 'No win!!' ;
        }
        else {
            resoult.innerHTML = 'You lost!' ;
        }
        Your_Nambers= 0;
        computer_Nambers = 0;
        Your_points.innerHTML = 0;
        Comouter_points.innerHTML = 0;
        

    });
    
  

    function foo (){
        
        You.src = srsArray[index];
       
        index++;
        if(index >= 3) index = 0;
        compRobot.src = srsArray[index]
        
    }

    interval = setInterval( foo, 600);


