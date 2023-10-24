/*
  Overload 

  Existem funções que retornam diferentes dados dependendo do argumento.

  Podemos declarar a interface dessas funções utilizando function overload. Basta 
  declarar a interface antes da definição da mesma, utilizando o mesmo nome.

  O overload deve ser compatível com a função original.
*/

// function normalizar(valor: string): string;
// function normalizar(valor: string[]): string[];

// function normalizar(valor: string | string[]): string | string[] {
//   if (typeof valor === "string") {
//     return valor.trim().toLowerCase();
//   } else {
//     return valor.map((item) => item.trim().toLowerCase());
//   }
// }

// console.log(normalizar("  BANAna  ").toUpperCase());
// console.log(normalizar(["    Uva ", "maÇa", "laranja"]));

// function $(seletor: "a"): HTMLAnchorElement | null
// function $(seletor: "video"): HTMLVideoElement | null
// function $(seletor: string): Element | null

// function $(seletor: string): Element | null {
//   return document.querySelector(seletor);
// }

// $("a")?.click();
// $("video")?.volume;
