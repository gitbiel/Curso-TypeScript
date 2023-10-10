/*
  Métodos
  Na definição de interfaces podemos definir os métodos indicando o tipo de dado recebido
  e o seu possível retorno.
*/


interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {
  forma.perimetro(3)
}
