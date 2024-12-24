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
ScrollReveal().reveal('.imagem', {
    origin: 'top',
    duration: 2000,
    distance: '15%'
});

ScrollReveal().reveal('h1', {
    origin: 'left',
    duration: 1500,
    distance: '5%'
});

ScrollReveal().reveal('h2', {
    origin: 'right',
    duration: 1500,
    distance: '15%',
    delay: 200
});

ScrollReveal().reveal('.disclaimer', {
    origin: 'right',
    duration: 1500,
    distance: '15%',
    delay: 700
});

ScrollReveal().reveal('table', {
    origin: 'bottom',
    duration: 1000,
    distance: '15%',
    delay: 500
});
