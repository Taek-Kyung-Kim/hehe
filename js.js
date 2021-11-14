const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const health = document.querySelector('.health');
const health_sub = document.querySelector('.health_sub');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

health.addEventListener('click', ()=>{
    health_sub.classList.toggle('active');
});

