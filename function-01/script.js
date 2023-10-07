"use strict";
function Somar(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(Somar(3, 4));
console.log(Somar(3, 4, 1));
const subtrair = (a, b) => a - b;
console.log(subtrair(10, 2));
/*
  No JavaScript, uma função sem return irá retornar undefined. No TypeScript o retorno é definido
  como void. Isso evita usos errados como checagens booleans de métodos que não possuem retorno
*/
function pintarTela(cor) {
    document.body.style.background = cor;
}
console.log(pintarTela("gray"));
