let value;

console.log(value ? "Valor definido" : "valor não definido");

console.log(value);

function teste() {}

console.log(teste());

/*
  Propriedades opcionais 

  Podemos definir propriedades opcionais utilizando 
  opcional?: string; quando opcional elas poderão sempre retornar como valor definido 
  ou undefined
*/

interface IProduto {
  nome?: string
}

const jogo: IProduto = {
  nome: "God Of War"
}

console.log(jogo.nome?.toLowerCase())