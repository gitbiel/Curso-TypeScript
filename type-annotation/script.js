// @ts-check

const produtos = [
  {
    nome: "O senhor dos anéis",
    tipo: "Livro",
  },

  {
    nome: "A guerra dos tronos",
    tipo: "Livro",
  },
  {
    nome: "Dark souls",
    tipo: "Jogo",
  },
];

function filtrarLivros(dados) {
  return dados.filter((item) => item.tipo === "Livro");
}

console.log(filtrarLivros(produtos));
