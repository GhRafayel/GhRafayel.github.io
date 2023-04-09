

// Ունենալով երկու ամբողջ թվերից բաղկացած a, b զանգավծներ և v թիվը ,
// գտեք՝ արդյո՞ք գոյություն ունի այնպիսի թվերի զույգ,
// որտեղ առաջին թիվը վերցված է a զանգվածից,
// երկրորդ թիվը վերցված է b զանգվածից և այդ թվերի գումարը հավասար է v-ի:
// Վերադարձրեք true, եթե այդպիսի զույգ գոյություն ունի և false,
// եթե այդպիսի զույգ գոյություն չունի:
//
/*

function sumPairExists(a, b, v){
  let sum = a.forEach(function(value){
            b.forEach(function(val){
                return  value + val === v;
                })   
        })
       if(sum === v){
        return true;
       }
       return false;
}

// true ...որովհետեւ 10 + 12 = 22
alert(sumPairExists([4, 2, 4, 60, 10, 9, 15], [67, 12, 0, 2, 1, 0], 22));
*/
/*
class kendani{
  constructor(name, lastName,age,){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  xosuma(){
   document.createElement("div");
   
  }
  
}
*/
//Ստեղծեք canvas և դրա ներքևում button։ 
//button էլեմենտը սեղմելիս canvas-ի վրա պետք է ավելանա կլոր օբյեկտ(գնդակ)`
// կամայական տեղում, կամայական չափի,  որը կշարժվի կամայական ուղղությամբ։
// Որպես հավելում, կարող եք փորձել ստեղծել
// տարբեր գույների կլոր գնդակներ։ 
//Գնդակը պետք է canvas-ի եզրերին հասնելիս փոխի իր ուղղությունը,
// այնպես, որ միշտ մնա canvas-ի ներսում։ 
//Արդյունքում կունենանք canvas-ի ներսում շարժվող գնդակների փունջ։
// Կարող ենք ավելացնել նոր գնդակներ սեղմելով canvas-ի ներքևի button-ը։ 

// api programmableWeb  

//var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");
//ctx.beginPath();
//ctx.arc(100, 75, 50, 0, 2 * Math.PI);
//ctx.stroke();


const canvas = document.getElementById('canvas');
const button = document.querySelector('.button');

const ctx = canvas.getContext('2d');

let deita = { balls:[] }

function drow(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    deita.balls.forEach(function(ball){
      ball.drow();
    })
}

function update(){
    deita.balls.forEach(function(ball){
      ball.update()
    });
}

function rendome(max,min){
  return Math.floor( Math.random() * (max - min) + min);
} 
function loop(){
    requestAnimationFrame(loop)
    drow();
    update();
}

loop();


function Ball(){
  this.r = rendome(1,30);
  this.x = rendome(this.r,canvas.width - this.r );
  this.y = rendome(this.r,canvas.height - this.r );

  this.xDelta = rendome(-5,5) ;
  this.yDelta = rendome(-5,5)  ;

  this.color = `rgb(${rendome(0,255)},
                    ${rendome(0,255)},
                    ${rendome(0,255)})`;
    
  
  this.drow = function(){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.fill();
  }
  this.update = function(){
      if((this.x + this.r)  > canvas.width ||
         (this.x - this.r) < 0) {
          this.xDelta *= -1;
      }
      if((this.y + this.r)  > canvas.height ||
         (this.y - this.r) < 0) {
          this.yDelta *= -1;
      }

      this.x += this.xDelta;
      this.y += this.yDelta;
      
  }
  
}

button.addEventListener('click', () => {
  let ball = new Ball();
  deita.balls.push(ball);
});


