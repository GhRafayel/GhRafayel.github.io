
function data(){
  const hour = new Date().getHours();

  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  

  second < 9 ? second = "0" + second : second = new Date().getSeconds();
  minute < 9 ? minute = "0" + minute : minute = new Date().getMinutes();


  document.getElementById('time').innerHTML = hour + ':' + minute + ':' + second 
}

// let b = [ "http://localhost:5500/#projects", "http://localhost:5500/#about","http://localhost:5500/#games","http://localhost:5500/#contact"];
// let n = 0;

// setInterval((e)=>{
//   // data();
//   window.location.href = b[n];
//   n+=1;
//   console.log(window.location.href)
//   if(n === 4){
//     n = 0;
//   }
// },1000);
