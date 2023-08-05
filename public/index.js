let tablinks = document.getElementsByClassName('about-tab-links-p');
let tabContents = document.getElementsByClassName('about-tab-content');
let languages = document.getElementsByClassName('languages');

function openTab(tabname){
  for(link of tablinks){
    link.classList.remove('active-link');
  }
  for(tab of tabContents){
    tab.classList.remove('active-tab');
  }
   event.currentTarget.classList.add('active-link');
   document.getElementById(tabname).classList.add('active-tab');
}
let sideMenu = document.getElementById('side-menu');

function closeMenu(){
  sideMenu.style.right = '-200px';
}
function openMenu(){
  sideMenu.style.right = '0';
}