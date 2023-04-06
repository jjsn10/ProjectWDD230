
let drinks=document.getElementById('drinks');

if(!localStorage.getItem('drinks')){
    drinks.innerText = 0;
}else{
    drinks.innerText = localStorage.getItem('drinks');
}