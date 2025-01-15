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

// links para albuns

// adquirindo elementos
const iframe = document.querySelector('iframe');

const walkinOnWater = document.getElementById('walkin-on-water');
const chkChkBoom = document.getElementById('chk-chk-boom');
const loseMyBreath = document.getElementById('lose-my-breath');
const lalala = document.getElementById('lalala');
const sClass = document.getElementById('s-class');
const fam = document.getElementById('fam');
const case143 = document.getElementById('case-143');
const timeOut = document.getElementById('time-out');
const maniac = document.getElementById('maniac');
const winterFalls = document.getElementById('winter-falls');
const christmasEvel = document.getElementById('christmas-evel');
const thunderous = document.getElementById('thunderous');
const oh = document.getElementById('oh');
const backDoor = document.getElementById('back-door');
const godsMenu = document.getElementById('gods-menu');
const onTrack = document.getElementById('on-track');
const levanterJp = document.getElementById('levanter-jp');
const doubleKnotEn = document.getElementById('double-knot-en');
const goneDays = document.getElementById('gone-days');
const levanter = document.getElementById('levanter');
const astronaut = document.getElementById('astronaut');
const doubleKnot = document.getElementById('double-knot');
const sideEffects = document.getElementById('side-effects');
const miroh = document.getElementById('miroh');
const you = document.getElementById('you');
const who = document.getElementById('who');
const district9 = document.getElementById('district9');
const grr = document.getElementById('grr');
const hellevator = document.getElementById('hellevator');

// link através do clique
walkinOnWater.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/ovHoY8UBIu8?si=PgcZxWKh1C_kY-zZ';
  console.log('fsjdifs');
});

chkChkBoom.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/0P0aQreFs8w?si=qG_YmzgGOZCUfGXA'
});

loseMyBreath.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/SQ1yPMTIwCU?si=Q9nr4TmqXMN7CuyA';
});

lalala.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/dBDkYofMUs4?si=47g54TSgS4CFPhH3';
});

sClass.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/JsOOis4bBFg?si=RPJHV_L0gN6e9JSc';
});

fam.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/D8WwqWS2E6E?si=g__XPow8WmVzIpkD';
});

case143.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/jYSlpC6Ud2A?si=Ef41tClHj119i9r5';
});

timeOut.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/ukIGxgdbqqI?si=IrsxHRZy9BDSiStZ';
});

maniac.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/OvioeS1ZZ7o?si=DxWFHZP8uIBYZfVX';
});

winterFalls.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/S4qK-Gzyws0?si=f0AxtDUohvq-VioV';
});

christmasEvel.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/57n4dZAPxNY?si=hRlGniQFfEOn92Bq';
});

thunderous.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/EaswWiwMVs8?si=HDQOkStJ14-ANeZz';
});

oh.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/M7lIml8-eHU?si=ei_70gY_00OMThST';
});

backDoor.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/X-uJtV8ScYk?si=-4h27tBHl-B_mWPy';
});

godsMenu.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/TQTlCHxyuu8?si=QFk-EDnMo6YWqQhM';
});

onTrack.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/XkxWIAe3NDU?si=caAx7RMMSgfXSOiV';
});

levanterJp.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/YlOLn9Pd9R4?si=A083m9kBGneo3eIu';
});

doubleKnotEn.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/ra0FlN5NBG4?si=fz6oAeBEwvTMov3k';
});

goneDays.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/KAPXc0M4tLg?si=9yOtXCCqHPpotIUT';
});

levanter.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/Fpgd3ac3_nM?si=sgygFj8ednsybxyx';
});

astronaut.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/ZnpEBYvgiAU?si=ZFbCmZRGpqV6t3yb';
});

doubleKnot.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/UWoyeuwj9c0?si=cjMc0MnwQjr5Pxap';
});

sideEffects.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/5rPluw_-Eb4?si=F23Q4Tepaw1FBC7x';
});

miroh.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/Dab4EENTW5I?si=96cuc8CqUpg2mYGK';
});

you.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/CNfodZluR-Q?si=RdzMJw8JaEm7GDaR';
});

who.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/pok5yDw77uM?si=JSqPoOXQVCuTytP5';
});

district9.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/u6unJQownW4?si=dN8oIevH7ZHy6FtJ';
});

grr.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/Sy3ERg7OCWo?si=85GwU691-G2bdivK';
});

hellevator.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/AdfIfFGCqgo?si=z8ckz51QVFwc9mfJ';
});
