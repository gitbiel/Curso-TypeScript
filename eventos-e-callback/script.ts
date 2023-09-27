/* Eventos
  Passamos o evento como uma string e uma função de callback
  no método addEventListener.
  A função de callback possui um parâmetro que faz referência ao
  evento executado.
*/
const btn = document.querySelector('button');

function handleClick(event: MouseEvent) {
  console.log(event.pageX);
}

btn?.addEventListener('click', handleClick);

function handleScroll(event: Event) {
  console.log(event);
}

window.addEventListener('scroll', handleScroll);

/*
  Event e instanceof

  Uma função, quando criada para ser executada em diferentes tipos
  de eventos, deve receber como parâmetro o tipo comum entre elas Event.
*/

function ativarMenu(event: Event) {
  console.log(event.type);
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }
  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}

document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
document.documentElement.addEventListener('pointerdown', ativarMenu);

