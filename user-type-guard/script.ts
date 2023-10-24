/* 
  Array   

  Uma array pode não ser verificada com o typeof pois a mesma é um object.

  Podemos verificar se o dado é instanceof Array ou podemos usar a função 
  Array.isArray().
*/

async function cursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}

cursos();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log('É instância de Array');
  }
  if (Array.isArray(data)) {
    console.log('É array');
  }
}


/* 
  Type Predicate 

  TypeScript não executa JavaScript 

  Sabemos já que o TS não executa o JS na checagem dos tipos. Se isso 
  ocorre, então como a função isArray consegue ser usada como Type Guard ?
  
  Com o type Predicate :arg is type, podemos indicar qual o tipo de argumento 
  uma função booleana (que retorna boolean) recebeu para ser verdadeira.
*/

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function data(data: unknown) {
  if (isString(data)) {
    return data.toUpperCase();
  }
}

console.log(data("Origamid"))
