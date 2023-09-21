"use strict";
/*
  instanceof

  Existem funções que retornam diferentes tipos de objetos. Com a palavra chave instanceof
  podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função
  construtora (class).

*/
class Livro {
    autor;
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    jogadores;
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "Você sabia") {
        return new Livro("Lukas Marques & Daniel Molo");
    }
    if (busca === "God of war") {
        return new Jogo(1);
    }
    return null;
}
const produto1 = buscarProduto("Você sabia");
const produto2 = buscarProduto("God of war");
if (produto1 instanceof Livro) {
    console.log(produto1.autor);
}
if (produto2 instanceof Jogo) {
    console.log(produto2.jogadores);
}
