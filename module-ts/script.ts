/*
  module

  Se usarmos o import/export em qualquer momento em um arquivo. ts,
    TypeScript irá tratar o mesmo como o module.
  Consequentemente, o seu escopo não será mais global.
*/

// pluginSlide.ts
function pluginSlide(seletor: string) {
  console.log(`Criar slide: ${seletor}`);
}

export default pluginSlide;

// global.ts
const URL_BASE = 'https://api.origamid.dev/json';

pluginSlide('div');

console.log(URL_BASE);
