"use strict";
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
async function Vendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    console.log(data);
    SomarVendas(data);
}
Vendas();
function SomarVendas(vendas) {
    // com for loop
    let total1 = 0;
    for (let i = 0; i < vendas.length; i++) {
        total1 += vendas[i][1];
    }
    document.body.innerHTML += `
  <p>Total: R$ ${total1}</p>
  `;
    // com reduce
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Total: R$ ${total2}</p>`;
}
