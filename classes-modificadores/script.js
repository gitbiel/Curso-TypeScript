"use strict";
/*
  Classes
  As classes/funções construtoras são responsáveis pela construção de objetos
  que já vimos, como MouseEvent, HTMLElement e os demais.
*/
// f HTMLElement()
console.log(document.constructor);
class Mercadoria {
  tipo = "Mercadoria";
  nome;
  constructor(nome) {
    this.nome = nome;
  }
}
const livro = new Mercadoria("O Senhor dos Anéis");
/*
  Modificadores
  O TypeScript fornece diversas palavras-chave (Modifiers) que podem ser
  utilizadas em propriedades de classes modificar o comportamento/uso das mesmas.
*/
class mercadoria {
  // public: é o padrão de qualquer uma
  // private: só pode ser acessada dentro da classe
  tipo = "produto";
  // protected: só pode ser acessada dentro da classe e subclasses
  preco;
  // readonly: só permite leitura
  nome;
  constructor(nome, preco) {
    this.nome = nome;
    this.tipo;
    this.preco = preco;
  }
  getTipo() {
    return this.tipo;
  }
  getPreco() {
    return mercadoria.transformarPreco(this.preco);
  }
  // [javascript] static: não fará parte do Objeto criado
  // e sim da função construtora (classe)
  static transformarPreco(preco) {
    return `R$ ${preco}`;
  }
}
const livro1 = new mercadoria("O Senhor dos Aneis", 200);
console.log(livro1.getTipo());
console.log(livro1.getPreco());
console.log(livro1.nome);
console.log(mercadoria.transformarPreco(100));
