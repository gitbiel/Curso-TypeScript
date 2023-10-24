"use strict";
// Define que o retorno será um HTMLAnchorElement
const LInk = document.querySelector('.link');
LInk?.href;
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function Data() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
}
