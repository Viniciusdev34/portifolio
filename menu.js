let menuOpen = document.querySelector('.menuHamburguer');
let menuClose = document.querySelector('.menuClose');
let menu = document.querySelector('.menu');

menuOpen.addEventListener('click', () => {
    menu.classList.add('menuOpen');
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('menuOpen');
});