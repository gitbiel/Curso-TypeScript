async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
    <div>
      <h1>${data.descricao}</h1>
      <p>Preço ${data.preco}</p>
      <p>Garantia ${data.garantia} anos</p>
      <h2>Empresa fabricante ${data.empresaFabricante.nome}</h3>
      <h2>Empresa montadora ${data.empresaMontadora.nome}</h3>
    </div>
  `;
}
