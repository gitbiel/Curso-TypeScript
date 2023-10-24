/* 
  Objetos

  O Type Predicate pode ser especialmente utilizado para criarmos Type Guards
  para objetos específicos e garantirmos a Type Safety (segurança) do projeto.
*/

async function fetchproduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto(json);
}
fetchproduto();

interface Priduto {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is Produto {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "preco" in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleProduto(data: unknown) {
  if (isProduto(data)) {
    if (typeof data.nome === "string") {
      console.log(data.nome.toUpperCase());
    }
  }
}
