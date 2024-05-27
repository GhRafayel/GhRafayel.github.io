
function data(){
  const hour = new Date().getHours();

  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  

  second < 9 ? second = "0" + second : second = new Date().getSeconds();
  minute < 9 ? minute = "0" + minute : minute = new Date().getMinutes();


  document.getElementById('time').innerHTML = hour + ':' + minute + ':' + second 
}
function audio (url){
  const audio = document.createElement('audio');
  audio.src = url;
  audio.play();
}



