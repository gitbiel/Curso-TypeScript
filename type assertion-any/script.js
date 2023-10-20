"use strict";
/*
  any
  
  Podemos usar o Type Assertion para definir que um tipo any
  é qualquer tipo de dado possível.
*/
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json();
}
// Podemos usar o as em diferentes locais.
async function handleProduto1() {
    const produto = await fetchProduto();
    produto.nome;
}
async function handleProduto2() {
    const produto = (await fetchProduto());
    produto.nome;
}
async function handleProduto3() {
    const produto = await fetchProduto();
    produto.nome;
}
