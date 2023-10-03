/*  
  extends

  É possível indicar que o tipo genérico deve herdar de uma
  interface específica com o extends.
*/
// Exemplo 1
function extractText<Tipo extends HTMLElement>(el: Tipo): string {
  return el.innerText;
}

const Link = document.querySelector('a');

if (link) {
  console.log(extractText(link));
  // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}

// Exemplo 2
function $<Tipo extends Element>(selector: string): Tipo | null {
  return document.querySelector(selector);
}

const LINK = $<HTMLAnchorElement>('a')?.href;
