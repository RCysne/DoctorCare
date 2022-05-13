// Executar as funções que estão no start depois que a página for lida podem ser utilizada outras funções que estão doando conflito quando a página ainda não foi carregada.
// ID no html minúscula/camelCase e sem separação, pode ser chamada diretamente no JS

window.addEventListener('scroll', onScroll);

// ======    Navigation Scroll

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section){
  // Lógica para essa ação
  // Passo 1: verificar se o top está em cima da metade e se o bottom está embaixo
  // Passo 2: Verificar se o valor capturado no fim da seção 1 passou pelo valor da metade dela mesma         delimitada com a divisão da seção ao meio. 

  

  // Quando o topo da seção seguinte chegar ao valor da metade da seção anterior marcar no nav

  // VALOR DA METADE DO ELEMENTO
  const targetLine = scrollY + innerHeight / 2; 
  console.log(targetLine + ' Linha de quebra da tela');


  
  // offsetTop checa o deslocamento/posição sempre do top (sempre será 0 no início da tela, e algum valor no início dos demais elementos)
  const sectionTop = section.offsetTop; 
  // Variável depende do elemento requerido
  console.log(sectionTop + ' Início do elemento');
  
  
  // offsetHeight checa o deslocamento da altura do elemento a utilizá-lo. Ex: home.offsetHeight - me dá o valor desse elemento(id ou classe)
  const sectionHeight = section.offsetHeight; // Variável dependendo do elemento escolhido
  console.log(sectionHeight + ' altura da tela');



  //Verificando os dados capturados e a lógica
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  // console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine);


  const sectionEndsAt = sectionTop + sectionHeight;
  console.log(sectionEndsAt + ' Fim do elemento');

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
  // console.log('O fundo da seção passou da linha alvo?');

  // Limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  // Já começar removendo e caso seja true, ativa
  menuElement.classList.remove('active');
  if(sectionBoundaries) {
    menuElement.classList.add('active');
  }
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
