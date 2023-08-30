// const produto: string = "Livro";
// const preco: number = 20;
//
// const carro: {
// marca: string;
// portas: number;
// } = {
// marca: "audi",
// portas: 4,
// };

const produto = "Livro";
const preco = 20;

const carro = {
  marca: "audi",
  portas: 4,
};

const barato: boolean | string = preco < 50 ? true : "Livro tá caro";
console.log(barato);

function soma(a: number, b: number): string {
  return `${a + b}`;
}

console.log(soma(1, 10));

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function tranformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$ " + produto.preco;
  return produto;
}

const novoPreco = tranformarPreco(nintendo)
console.log(novoPreco);