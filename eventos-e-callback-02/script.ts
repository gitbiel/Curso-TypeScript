/* 
  this

  Dentro de uma função, o this faz referência ao objeto que executou a mesma.
  No JavaScript o this pode ser passado como o primeiro parâmetro da função,
  mesmo não sendo necessário informar ele durante a execução.
*/

// function ativarMenu(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this.innerText);
// }

// const botao = document.querySelector('button');
// botao?.addEventListener('click', ativarMenu);

/* 
  target e currentTarget
  O TypeScript não executa o JavaScript, assim ele não consegue assumir qual será
  o target ou currentTarget do evento executado. Os elementos são
  definidos como o tipo EventTarget, pois esse é o tipo mais comum entre
  os elementos que podem receber um evento. 
*/ 

function ativarMenu(event: Event) {
  const elemento = event.currentTarget;
  if (elemento instanceof HTMLElement) {
    elemento.style.background = 'red';
  }
}

const botao = document.querySelector('button');
botao?.addEventListener('click', ativarMenu);

window.addEventListener('keydown', ativarMenu);
