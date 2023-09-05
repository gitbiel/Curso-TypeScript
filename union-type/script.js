"use strict";
// Crie uma função chamada toNumber
// A função pode receber number | string
// Se a função receber número retorne um número
// Se a função receber string retorne um número
// Se ela receber algo diferente, retorne um erro utilizando throw.
function toNumber(numero) {
    if (typeof numero === "number") {
        return numero;
    }
    if (typeof numero === "string") {
        return Number(numero);
    }
    if (typeof numero != "string" || "number") {
        throw new Error("O parametro que você passou não é string ou número");
    }
}
console.log(toNumber("1"));
