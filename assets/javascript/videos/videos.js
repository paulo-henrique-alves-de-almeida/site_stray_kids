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
const walkinOnWater = document.getElementById('walkin-on-water');
const hop = document.getElementById('hop');
const giant = document.getElementById('giant');
const slash = document.getElementById('slash');
const chkChkBoom = document.getElementById('chk-chk-boom');
const ate = document.getElementById('ate');
const loseMyBreath = document.getElementById('lose-my-breath');
const star = document.getElementById('star');
const fiveStar = document.getElementById('5-star');
const skzReplay = document.getElementById('skz-replay');
const maxident = document.getElementById('maxident');
const timeOut = document.getElementById('time-out');
const oddinary = document.getElementById('oddinary');
const christimasEvel = document.getElementById('christimas-evel');
const noeasy = document.getElementById('noeasy');
const oh = document.getElementById('oh');
const allIn = document.getElementById('all-in');
const In = document.getElementById('in');
const go = document.getElementById('go');
const Top = document.getElementById('top');
const mixtapeTolo = document.getElementById('mixtape-tolo');
const skz2020 = document.getElementById('skz2020');
const stepOut = document.getElementById('step-out');
const goneDays = document.getElementById('gone-days');
const levanter = document.getElementById('levanter');
const doubleKnot = document.getElementById('double-knot');
const yellowWood = document.getElementById('yellow-wood');
const miroh = document.getElementById('miroh');
const you = document.getElementById('you');
const who = document.getElementById('who');
const not = document.getElementById('not');
const mixtape = document.getElementById('mixtape');

// link através do clique
walkinOnWater.addEventListener('click', () => {
  window.location.href = 'albuns/walkin_on_water_remixes.html';
});

hop.addEventListener('click', () => {
  window.location.href = 'albuns/hop.html';
});

giant.addEventListener('click', () => {
  window.location.href = 'albuns/giant.html';
});

slash.addEventListener('click', () => {
  window.location.href = 'albuns/slash.html';
});

chkChkBoom.addEventListener('click', () => {
  window.location.href = 'albuns/chk_chk_boom_remixes.html';
});

ate.addEventListener('click', () => {
  window.location.href = 'albuns/ate.html';
});

loseMyBreath.addEventListener('click', () => {
  window.location.href = 'albuns/lose_my_breath_remixes.html';
});

star.addEventListener('click', () => {
  window.location.href = 'albuns/star.html';
});

fiveStar.addEventListener('click', () => {
  window.location.href = 'albuns/5_star.html';
});

skzReplay.addEventListener('click', () => {
  window.location.href = 'albuns/skz_replay.html';
});

maxident.addEventListener('click', () => {
  window.location.href = 'albuns/maxident.html';
});

timeOut.addEventListener('click', () => {
  window.location.href = 'albuns/mixtape_time_out.html';
});

oddinary.addEventListener('click', () => {
  window.location.href = 'albuns/oddinary.html';
});

christimasEvel.addEventListener('click', () => {
  window.location.href = 'albuns/christimas_evel.html';
});

noeasy.addEventListener('click', () => {
  window.location.href = 'albuns/noeasy.html';
});

oh.addEventListener('click', () => {
  window.location.href = 'albuns/mixtape_oh.html';
});

allIn.addEventListener('click', () => {
  window.location.href = 'albuns/all_in.html';
});

In.addEventListener('click', () => {
  window.location.href = 'albuns/in.html';
});

go.addEventListener('click', () => {
  window.location.href = 'albuns/go.html';
});

Top.addEventListener('click', () => {
  window.location.href = 'albuns/top.html';
});

mixtapeTolo.addEventListener('click', () => {
  window.location.href = 'albuns/mixtape_on_track.html';
});

skz2020.addEventListener('click', () => {
  window.location.href = 'albuns/skz2020.html';
});

stepOut.addEventListener('click', () => {
  window.location.href = 'albuns/step_out_of_cle.html';
});

goneDays.addEventListener('click', () => {
  window.location.href = 'albuns/mixtape_gone_days.html';
});

levanter.addEventListener('click', () => {
  window.location.href = 'albuns/cle_levanter.html';
});

doubleKnot.addEventListener('click', () => {
  window.location.href = 'albuns/double_knot.html';
});

yellowWood.addEventListener('click', () => {
  window.location.href = 'albuns/cle_2_yellow_wood.html';
});

miroh.addEventListener('click', () => {
  window.location.href = 'albuns/cle_1_miroh.html';
});

you.addEventListener('click', () => {
  window.location.href = 'albuns/i_am_you.html';
});

who.addEventListener('click', () => {
  window.location.href = 'albuns/i_am_who.html';
});

not.addEventListener('click', () => {
  window.location.href = 'albuns/i_am_not.html';
});

mixtape.addEventListener('click', () => {
  window.location.href = 'albuns/mixtape.html';
});
