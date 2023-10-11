/* 
  in

  O operador in verifica se o objeto possui uma propriedade com o mesmo nome
  da string comparada "propriedade" in obj.
*/

const obj = {
  nome: 'Origamid',
};

if ('nome' in obj) {
  console.log('Sim');
}

interface Notebook {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}

function handleProduto(data: Notebook) {
  if("nome" in data) {
    document.body.innerHTML += `
    <h1>Produto: ${data.nome}</h1>
    <h3>Valor: ${data.preco}</h3>
    `
  }
}

fetchProduto(); 