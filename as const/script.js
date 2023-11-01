"use strict";
/*
  as const

  Torna um dado readonly e infere o tipo de dado mais específico possível.
  Em métodos que retornam Array's, as mesmas são transformadas em Tuples
*/
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const Button = getText('button');
console.log(Button);
if (Button) {
    const [buttonElement, buttonText] = Button;
}
