type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: Produto) {
  return (document.body.innerHTML += `
    <h1>${dados.nome}</h1>
    <p>${dados.preco}</p>
    <p>${dados.teclado ? "tem teclado" : "não tem teclado"}</p>
  `);
}

preencherDados({
  nome: "Nootebook",
  preco: 3000,
  teclado: false,
});

preencherDados({
  nome: "PC",
  preco: 4000,
  teclado: true,
});

const nootebook: Produto = {
  nome: "DELL",
  preco: 3000,
  teclado: false,
};

preencherDados(nootebook);

type Categorias = "Computador" | "Nootebook" | "Celular";

function escolhaCategoria(categoria: Categorias) {
  return categoria;
}

