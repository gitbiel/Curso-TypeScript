// @ts-check

/* 
  @ts-check
  O VS Code já vem com o TypeScript (TS) instalado. Enquanto escrevemos JavaScript, serviços do TS
  rodam na sua máquina e já te oferecem funcionalidades como a sugestão de métodos/propriedades
  do tipo.
  
  Ao adicionar um comentário //@ts-check no ínicio de um arquivo JS, o editor passará a indicar 
  erros que seriam pegos pelo TS
*/

const frase = "TypeScript";
const total = 40.07;
const empresas = ["Apple", "Microsoft"];

console.log(frase.toLowerCase());
console.log(total.toFixed());
console.log(empresas.map((empresa) => empresa.toLowerCase()));

/*
  total.toLowerCase();
  O javaScrpt permite rodar o código, porém o erro acontece durante a execução 
  chamado de runtime
*/

/*
  const t = total.toFixed();
  console.log(t + 10);

  O método toFixed() retira as casas decimais tornando-se um número inteiro só que em string
  e quando soma string com número ele não soma, ele concatena e seria a msm coisa de 
  40.07 torna a ser "40"
  const t = "40" + "10" com o resultado final de "4010"
*/

const body = document.body;
// body é um HTMLElement um tipo de dado

body.style.background = "gray";

const button = document.querySelector("button");

// button.click()
/*
  já que não existe botão no HTML button passa a ser null que também é um tipo de dado 
  e null e não vai ter evento de click, seria o msm de null.click
*/

const operação = 100 + 200;
console.log(operação);