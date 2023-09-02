"use strict";
const frase = "front end";
const valor = 500;
const condi = valor > 100;
/*
  type off

  typeof é um operador de javaScript que retorna uma string indicando o tipo
  do dado.Os possíveis valores retornados por typeof são: string, number,
  boolean, function, object, undefined, bigint e symbol. O tyoeof funciona como
  um type guard
*/
/*
  String, Number e Boolean

  não confundir string, number e boolean com String, Number e Boolean.
  Os últimos são funcções construtoras desses tipos de dados, responsáveis pela
  herança das propriedades e métodos dos mesmos
*/
const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
