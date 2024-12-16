// adquirindo elementos
const btnMenu = document.querySelector('.btn-menu');
const nav = document.querySelector('nav');

// abrir e fechar menu
btnMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});
