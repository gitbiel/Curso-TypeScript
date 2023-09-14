const button = document.querySelector("button");
const config = localStorage.getItem("config");

/*
  null

  null é um tipo primitivo que representa a ausência de valor. É comum 
  em funções do DOM que fazer uma busca, retornarem null quando não 
  são bem sucedidas. 
*/

if (button !== null) {
  button.click();
}

if (button) {
  button.click();
}

button?.click();

console.log(typeof null);

