/*
  Tuples
  Tuples são arrays que possuem dados em posições fixas.
*/

const Produto1: (string | number)[] = ["nootebook", 2000];
const Produto2: [string, number] = ["nootebook", 2000];

if (typeof Produto1[0] === "string") {
  Produto1[0].toLocaleLowerCase();
}

Produto2[0].toLocaleLowerCase();
Produto2[1].toFixed;

const [Nome, Preco] = Produto2;
Nome; // Nome: string
Preco; // Preco: number
