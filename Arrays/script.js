"use strict";
const numeros = [10, 20, 30, 40, 50];
const valores = [10, "taxa", 20, "produto", 30];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
console.log(maiorQue10(numeros));
// function filtrarValores(data: (string | number)[]) outra maneira
function filtrarValores(data) {
    return data.filter((item) => typeof item === "number");
}
console.log(filtrarValores(valores));
const arraydeLivros = [
    ["Senhor dos anéis", 80],
    ["você sabia", 100],
    ["A guerra dos tronos", 100],
];
/*
  Sintaxe alternativa

  Existe uma sintaxe alternativa, onde usamos Array<type>. sendo type o tipo de dado
  dentro da array
*/
