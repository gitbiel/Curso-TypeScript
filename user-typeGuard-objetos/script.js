"use strict";
/*
  Objetos

  O Type Predicate pode ser especialmente utilizado para criarmos Type Guards
  para objetos específicos e garantirmos a Type Safety (segurança) do projeto.
*/
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await response.json();
    handleProduto(json);
}
fetchProduto();
function isProduto(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "preco" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        if (typeof data.nome === "string") {
            console.log(data.nome.toUpperCase());
        }
    }
}
