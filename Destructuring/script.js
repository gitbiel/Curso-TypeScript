"use strict";
/*
  Destructuring

  Durante a desestruturação de objetos, podemos indicar o tipo de dado
  com a sintaxe: { key1, key2 }: { key1: type1; key2: type2; }
*/
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes("book");
    preco.toFixed();
}
handleData({
    nome: "Notebook",
    preco: 2000,
});
