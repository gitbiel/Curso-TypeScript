function Somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

console.log(Somar(3, 4));
console.log(Somar(3, 4, 1));

const subtrair = (a: number, b: number): number => a - b;

console.log(subtrair(10, 2));

type Callback = (event: MouseEvent) => void;

/*
  No JavaScript, uma função sem return irá retornar undefined. No TypeScript o retorno é definido 
  como void. Isso evita usos errados como checagens booleans de métodos que não possuem retorno  
*/

function pintarTela(cor: string) {
  document.body.style.background = cor;
}

console.log(pintarTela("gray"))