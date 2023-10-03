"use strict";
/*
  extends

  É possível indicar que o tipo genérico deve herdar de uma
  interface específica com o extends.
*/
// Exemplo 1
function extractText(el) {
    return el.innerText;
}
const Link = document.querySelector('a');
if (link) {
    console.log(extractText(link));
    // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}
// Exemplo 2
function $(selector) {
    return document.querySelector(selector);
}
const LINK = $('a')?.href;
