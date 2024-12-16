// adquirindo elementos
const logo = document.querySelector('.logo');
const btnPlay = document.querySelector('.btn-play');
const modalVideo = document.querySelector('.modal-video');
const btnFecharModalVideo = document.querySelector('.btn-fechar-modal-video');
const redes = document.querySelector('.redes');
const copyright = document.querySelector('.copyright');

// mudando algumas cores
btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('active');
    redes.classList.toggle('active');

    if (nav.classList.contains('active')) {
        logo.src = 'https://lv2-cdn.azureedge.net/straykids/a723fb69404d4855a5283b138810899c-%EC%9E%90%EC%82%B0%204.png';
        btnPlay.style.display = 'none';

        copyright.style.color = 'var(--cor-texto)';
    } else {
        logo.src = 'https://lv2-cdn.azureedge.net/straykids/994e0c371e534b34b580f05a092dd3b5-%EC%9E%90%EC%82%B0%203.png';
        btnPlay.style.display = 'block';

        copyright.style.color = 'white';
    }
});

// abrir modal
btnPlay.addEventListener('click', () => {
    modalVideo.showModal();
});

// fechar modal
btnFecharModalVideo.addEventListener('click', () => {
    modalVideo.close();
});

modalVideo.addEventListener('click', (event) => {
    if (event.target === modalVideo) {
        modalVideo.close();
    }
});
