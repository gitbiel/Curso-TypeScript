// conserte a função com typeScript

// function normalizarTexto(texto) {
//   return texto.trims().toLowercase();
// }

function normalizarTexto(texto: string): string {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto("  DEsign"));
