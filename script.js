// Executar as funções que estão no start depois que a página for lida podem ser utilizada outras funções que estão doando conflito quando a página ainda não foi carregada.

window.addEventListener('load', start);

function start() {
  onScroll();
}

// ======    Navigation Scroll

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  let scroll = document.getElementById('navigation')
  scroll.classList.add('scroll');
  if(scrollY === 0) {
    scroll.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  let topButton = document.getElementById('backToTopButton');
  // console.log(scrollY)

  if(scrollY > 550) {
    topButton.classList.add('show')
  } else {
    topButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content
`);


