// adquirindo elementos
const conteudo = document.querySelector('.conteudo'); 

btnMenu.addEventListener('click', () => {
    if (btnMenu.classList.contains('active')) {
        conteudo.style.display = 'none';
    } else {
        conteudo.style.display = 'flex';
    }
});

// swiper.js
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 400,
  noSwiping: true,
  freeMode: false,
  navigation: {
    nextEl: '.prox',
    prevEl: '.ant',
  },
  breakpoints: {
    550: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    950: {
        spaceBetween: 30,
    },
  },
});

// scroll reveal
ScrollReveal().reveal('.conteudo', {
    origin: 'bottom',
    duration: 2000,
    distance: '5%'
});
