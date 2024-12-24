// adquirindo elementos
const imagemIntegrante = document.querySelector('.imagem-integrante');
const info = document.querySelector('.info-integrante');
const citacao = document.querySelectorAll('.citacao');
const listaIntegrantes = document.querySelector('.lista-integrantes')

// adquirindo lista de integrantes
const bangChan = document.getElementById('bang-chan');
const leeKnow = document.getElementById('lee-know');
const changbin = document.getElementById('changbin');
const hyunjin = document.getElementById('hyunjin');
const han = document.getElementById('han');
const felix = document.getElementById('felix');
const seungmin = document.getElementById('seungmin');
const iN = document.getElementById('in');

// cores para cada integrante
const corBangChan = getComputedStyle(document.documentElement).getPropertyValue('--bang-chan');
const corLeeKnow = getComputedStyle(document.documentElement).getPropertyValue('--lee-know');
const corChangbin = getComputedStyle(document.documentElement).getPropertyValue('--changbin');
const corHyunjin = getComputedStyle(document.documentElement).getPropertyValue('--hyunjin');
const corHan = getComputedStyle(document.documentElement).getPropertyValue('--han');
const corFelix = getComputedStyle(document.documentElement).getPropertyValue('--felix');
const corSeungmin = getComputedStyle(document.documentElement).getPropertyValue('--seungmin');
const corIn = getComputedStyle(document.documentElement).getPropertyValue('--in');

// adquirindo elementos a serem modificados com informações
const fundo = document.querySelector('.fundo');
const imgIntegrante = document.getElementById('img-integrante');
const frase = document.querySelectorAll('.frase');
const credito = document.querySelectorAll('.credito');
const nomeIntegrante = document.getElementById('nome-integrante');
const dataIntegrante = document.getElementById('data-integrante');
const nomeNascIntegrante = document.getElementById('nome-nasc-integrante');

// sumir com a imagem
btnMenu.addEventListener('click', () => {
    if (btnMenu.classList.contains('active')) {
        imagemIntegrante.style.transform = 'translateY(1000%)';
        citacao[0].style.transform = 'translateY(1000%)';
        citacao[1].style.transform = 'translateY(1000%)';
        info.style.transform = 'translateY(1000%)';
        listaIntegrantes.style.display = 'none';
    } else {
        imagemIntegrante.style.transform = 'translateY(0)';
        citacao[0].style.transform = 'translateY(0)';
        citacao[1].style.transform = 'translateY(0)';
        info.style.transform = 'translateY(0)';
        listaIntegrantes.style.display = 'block';
    }
});

// mostrando informações sobre os integrantes
bangChan.addEventListener('click', () => {
    imgIntegrante.src = 'https://lv2-cdn.azureedge.net/straykids/2ef263748c0e49cea7f09fdc369a346b-1%EB%B0%A9%EC%B0%AC1.jpg';
    fundo.style.background = corBangChan;
    frase[0].textContent = "Let's just have fun";
    credito[0].textContent = 'Bang Chan';
    nomeIntegrante.textContent = 'bang chan';
    nomeNascIntegrante.innerHTML = 'Bahng Christopher Chahn<br>(방크리스토퍼찬)';
    dataIntegrante.textContent = '03 / 10 / 1997';

    citacao[1].style.display = 'none';
    
    citacao[0].style.display = 'block';
    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
 
leeKnow.addEventListener('click', () => {
    imgIntegrante.src = 'https://lv2-cdn.azureedge.net/straykids/2ad80e3629c441928befb424e47bdc89-2%EB%A6%AC%EB%85%B81.jpg';
    fundo.style.background = corLeeKnow;
    nomeIntegrante.textContent = 'lee know';
    nomeNascIntegrante.innerHTML = 'Lee Min-ho<br>(이민호)';
    dataIntegrante.textContent = '25 / 10 / 1998';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
 
changbin.addEventListener('click', () => {
    imgIntegrante.src = 'https://lv2-cdn.azureedge.net/straykids/569b654beafc4ee7a3caa568ef96cf9c-3%EC%B0%BD%EB%B9%882.jpg';
    fundo.style.background = corChangbin;
    nomeIntegrante.textContent = 'changbin';
    nomeNascIntegrante.innerHTML = 'Seo Chang-bin<br>(서창빈)';
    dataIntegrante.textContent = '11 / 08 / 1999';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
 
hyunjin.addEventListener('click', () => {
    imgIntegrante.src = 'https://lv2-cdn.azureedge.net/straykids/56cd3b882da64e5bbc5918ae24692a6b-4%ED%98%84%EC%A7%842.jpg';
    fundo.style.background = corHyunjin;
    nomeIntegrante.textContent = 'hyunjin';
    nomeNascIntegrante.innerHTML = 'Hwang Hyun-jin<br>(황현진)';
    dataIntegrante.textContent = '20 / 03 / 2000';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});

han.addEventListener('click', () => {
    imgIntegrante.src = 'https://lv2-cdn.azureedge.net/straykids/4a06483555e343d19a2f7e1a2ef2c27d-5%ED%95%9C2.jpg';
    fundo.style.background = corHan;
    frase[0].textContent = "Embora também amemos sons extravagantes e cheios de energia, espero que eles não se tornem nosso som definidor.";
    credito[0].textContent = 'Han';
    nomeIntegrante.textContent = 'Han';
    nomeNascIntegrante.innerHTML = 'Han Ji-sung<br>(한지성)';
    dataIntegrante.textContent = '14 / 09 / 2000';

    citacao[1].style.display = 'none';
    
    citacao[0].style.display = 'block';
    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
  
felix.addEventListener('click', () => {
    imgIntegrante.src = 'https://lv2-cdn.azureedge.net/straykids/a4bfbb4dd7c74603a035b0da895ff7af-6%ED%95%84%EB%A6%AD%EC%8A%A41.jpg';
    fundo.style.background = corFelix;
    nomeIntegrante.textContent = 'felix';
    nomeNascIntegrante.innerHTML = 'Lee Felix Yong-bok<br>(이필릭스용복)';
    dataIntegrante.textContent = '15 / 09 / 2000';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
  
seungmin.addEventListener('click', () => {
    imgIntegrante.src = 'https://lv2-cdn.azureedge.net/straykids/4d9408fccf85451daae7b9eb93e0534e-7%EC%8A%B9%EB%AF%BC2.jpg';
    fundo.style.background = corSeungmin;
    nomeIntegrante.textContent = 'seungmin';
    nomeNascIntegrante.innerHTML = 'Kim Seung-min<br>(김승민)';
    dataIntegrante.textContent = '22 / 09 / 2000';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
  
iN.addEventListener('click', () => {
    imgIntegrante.src = 'https://lv2-cdn.azureedge.net/straykids/9aff685e8c5245649d50f267118d5ee6-8%EC%95%84%EC%9D%B4%EC%97%941.jpg';
    fundo.style.background = corIn;
    nomeIntegrante.textContent = 'I.N';
    nomeNascIntegrante.innerHTML = 'Yang Jeong-in<br>(양정인)';
    dataIntegrante.textContent = '08 / 02 / 2001';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});

// scroll reveal
ScrollReveal().reveal('.lista-integrantes', {
    origin: 'left',
    duration: 2000,
    distance: '5%'
});
