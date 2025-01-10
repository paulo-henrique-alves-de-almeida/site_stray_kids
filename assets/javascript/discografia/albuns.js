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
ScrollReveal().reveal('.conteudo', {
    origin: 'bottom',
    duration: 2000,
    distance: '5%'
});

// ler mais
const btnLerMais = document.getElementById('ler-mais');
const lerMaisTexto = document.querySelector('.ler-mais-texto');

btnLerMais.addEventListener('click', () => {
    lerMaisTexto.style.display = 'block';
    btnLerMais.style.display = 'none';
});
