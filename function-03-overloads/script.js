"use strict";
/*
  Overload

  Existem funções que retornam diferentes dados dependendo do argumento.

  Podemos declarar a interface dessas funções utilizando function overload. Basta
  declarar a interface antes da definição da mesma, utilizando o mesmo nome.

  O overload deve ser compatível com a função original.
*/
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar("  BANAna  ").toUpperCase());
console.log(normalizar(["    Uva ", "maÇa", "laranja"]));
function $(seletor) {
    return document.querySelector(seletor);
}
$("a")?.click();
$("video")?.volume;
