/*
  as const

  Torna um dado readonly e infere o tipo de dado mais específico possível.
  Em métodos que retornam Array's, as mesmas são transformadas em Tuples
*/


function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const Button = getText('button');
console.log(Button)

if (Button) {
  const [buttonElement, buttonText] = Button;
}
