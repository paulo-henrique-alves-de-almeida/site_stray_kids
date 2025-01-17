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
const alturaIntegrante = document.getElementById('altura-integrante');

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
    imgIntegrante.src = '../imagens/integrantes/bang_chan.jpg';
    fundo.style.background = corBangChan;
    frase[0].textContent = "Let's just have fun";
    credito[0].textContent = 'Bang Chan';
    nomeIntegrante.textContent = 'bang chan';
    nomeNascIntegrante.innerHTML = 'Bahng Christopher Chahn<br>(방크리스토퍼찬)';
    dataIntegrante.textContent = '03 / 10 / 1997';
    alturaIntegrante.textContent = '171cm';

    citacao[1].style.display = 'none';
    
    citacao[0].style.display = 'block';
    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
 
leeKnow.addEventListener('click', () => {
    imgIntegrante.src = '../imagens/integrantes/lee_know.jpg';
    fundo.style.background = corLeeKnow;
    nomeIntegrante.textContent = 'lee know';
    nomeNascIntegrante.innerHTML = 'Lee Min-ho<br>(이민호)';
    dataIntegrante.textContent = '25 / 10 / 1998';
    alturaIntegrante.textContent = '170cm';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
 
changbin.addEventListener('click', () => {
    imgIntegrante.src = '../imagens/integrantes/changbin.jpg';
    fundo.style.background = corChangbin;
    nomeIntegrante.textContent = 'changbin';
    nomeNascIntegrante.innerHTML = 'Seo Chang-bin<br>(서창빈)';
    dataIntegrante.textContent = '11 / 08 / 1999';
    alturaIntegrante.textContent = '167cm';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
 
hyunjin.addEventListener('click', () => {
    imgIntegrante.src = '../imagens/integrantes/hyunjin.jpg';
    fundo.style.background = corHyunjin;
    nomeIntegrante.textContent = 'hyunjin';
    nomeNascIntegrante.innerHTML = 'Hwang Hyun-jin<br>(황현진)';
    dataIntegrante.textContent = '20 / 03 / 2000';
    alturaIntegrante.textContent = '179cm';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});

han.addEventListener('click', () => {
    imgIntegrante.src = '../imagens/integrantes/han.jpg';
    fundo.style.background = corHan;
    frase[0].textContent = "Embora também amemos sons extravagantes e cheios de energia, espero que eles não se tornem nosso som definidor.";
    credito[0].textContent = 'Han';
    nomeIntegrante.textContent = 'Han';
    nomeNascIntegrante.innerHTML = 'Han Ji-sung<br>(한지성)';
    dataIntegrante.textContent = '14 / 09 / 2000';
    alturaIntegrante.textContent = '169cm';

    citacao[1].style.display = 'none';
    
    citacao[0].style.display = 'block';
    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
  
felix.addEventListener('click', () => {
    imgIntegrante.src = '../imagens/integrantes/felix.jpg';
    fundo.style.background = corFelix;
    nomeIntegrante.textContent = 'felix';
    nomeNascIntegrante.innerHTML = 'Lee Felix Yong-bok<br>(이필릭스용복)';
    dataIntegrante.textContent = '15 / 09 / 2000';
    alturaIntegrante.textContent = '171cm';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
  
seungmin.addEventListener('click', () => {
    imgIntegrante.src = '../imagens/integrantes/seungmin.jpg';
    fundo.style.background = corSeungmin;
    nomeIntegrante.textContent = 'seungmin';
    nomeNascIntegrante.innerHTML = 'Kim Seung-min<br>(김승민)';
    dataIntegrante.textContent = '22 / 09 / 2000';
    alturaIntegrante.textContent = '175cm';
    
    citacao[0].style.display = 'none';
    citacao[1].style.display = 'none';

    imagemIntegrante.style.display = 'block';
    info.style.display = 'block';
});
  
iN.addEventListener('click', () => {
    imgIntegrante.src = '../imagens/integrantes/in.jpg';
    fundo.style.background = corIn;
    nomeIntegrante.textContent = 'I.N';
    nomeNascIntegrante.innerHTML = 'Yang Jeong-in<br>(양정인)';
    dataIntegrante.textContent = '08 / 02 / 2001';
    alturaIntegrante.textContent = '170cm';
    
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
