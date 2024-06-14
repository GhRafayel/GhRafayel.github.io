const Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Week = ["SUN", "MON", "TUE", "WED", "FRI","SAT"];

function clock(){

  let now = new Date();

  let year =  now.getFullYear() <= 9 ? "0" + now.getFullYear() : now.getFullYear();
  let month =  now.getMonth();
  let data =  now.getDate() <= 9 ? "0" + now.getDate() : now.getDate();
  let day = now.getDay();

  let hours = now.getHours() <= 9 ? "0" + now.getHours() : now.getHours();
  let minutes = now.getMinutes() <= 9 ? "0" + now.getMinutes() : now.getMinutes();
  let seconds = now.getSeconds() <= 9 ? "0" + now.getSeconds() : now.getSeconds();
  
  document.getElementById("data").innerText =  `${Week[day]} _ ${data}. ${Month[month]} ${year}`;
  document.getElementById("time").innerText =  `${hours} : ${minutes} : ${seconds}`
}
clock();
setInterval(clock, 1000);

function audio (url){
  const audio = document.createElement('audio');
  audio.src = url;
  audio.play();
}



