"use strict";
/*
  /!/ non-null operator
  Indica que não existe a possibilidade do dado ser null.
  Cuidado com o uso, pois pode levar a erros no runtime.
  Use apenas se tiver certeza.

  Esse é um operador de TS !. e não de JS como o ?..
  Durante a compilação ele será removido.
*/
const video1 = document.querySelector("video");
// erro runtime, não existe volume de null
video1.volume;
// erro runtime
document.querySelector("a").href = "https://www.origamid.com";
// Outras Sintaxes
const video2 = document.querySelector('.player');
const video3 = document.querySelector('.player');
const video4 = document.querySelector('.player');
const video5 = document.querySelector('.player');
video2.volume;
video3.volume;
video4?.volume;
video5.volume;
