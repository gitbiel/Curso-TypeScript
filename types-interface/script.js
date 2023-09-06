"use strict";
function preencherDados(dados) {
    return (document.body.innerHTML += `
    <h1>${dados.nome}</h1>
    <p>${dados.preco}</p>
    <p>${dados.teclado ? "tem teclado" : "não tem teclado"}</p>
  `);
}
preencherDados({
    nome: "Nootebook",
    preco: 3000,
    teclado: false,
});
preencherDados({
    nome: "PC",
    preco: 4000,
    teclado: true,
});
const nootebook = {
    nome: "DELL",
    preco: 3000,
    teclado: false,
};
preencherDados(nootebook);
function escolhaCategoria(categoria) {
    return categoria;
}
