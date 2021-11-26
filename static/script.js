//Code to make navabar items active based on the current url path
let nav = document.querySelectorAll('.nav-link');
var current = window.location.pathname;
console.log(current);

console.log(nav.length);
for(let i = 0; i < nav.length; i++){
    if(nav[i].getAttribute('href')==(current)){
        nav[i].classList.add('active');
    }
    console.log(nav[i].getAttribute('href'));
}