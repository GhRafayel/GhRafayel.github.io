
const canvas = document.getElementById('canvas');
const button = document.getElementById('add_btn');

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
  this.r = rendome(5,30);
  this.x = rendome(this.r,canvas.width  - this.r );
  this.y = rendome(this.r,canvas.height - this.r );
  this.xDelta = rendome(-5,5);
  this.yDelta = rendome(-5,5);
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

for(let i = 0; i < 5; i++) {
  deita.balls.push(new Ball());
}
button.addEventListener('click', () => {
  let ball = new Ball();
  deita.balls.push(ball);
});
