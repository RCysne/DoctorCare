// ======    Navigation Scroll

function onScroll() {

  let scroll = document.getElementById('navigation')
  scroll.classList.add('scroll');
  if(scrollY === 0) {
    scroll.classList.remove('scroll');
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