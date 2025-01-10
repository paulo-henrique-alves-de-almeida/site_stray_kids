// adquirindo elementos
const conteudo = document.querySelector('.conteudo'); 

btnMenu.addEventListener('click', () => {
    if (btnMenu.classList.contains('active')) {
        conteudo.style.display = 'none';
    } else {
        conteudo.style.display = 'flex';
    }
});

// scroll reveal
ScrollReveal().reveal('h1', {
    origin: 'left',
    duration: 1000,
    distance: '5%'
});

ScrollReveal().reveal('.citacao', {
    origin: 'right',
    duration: 2000,
    distance: '5%'
});
