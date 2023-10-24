/*
  Conhecer os Dados
  Durante a desestruturação é necessário indicar o tipo exato do
  dado esperado pelo TypeScript. Ex: um currentTarget pode ser
  EventTarget | null.
*/

function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    console.log(
      (currentTarget.innerHTML = `<h1>Você clicou no eixo X: ${pageX}</h1>`)
    );
  }
}

document.documentElement.addEventListener("click", handleClick);
