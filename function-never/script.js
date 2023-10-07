"use strict";
/*
  Never
  
  O never é utilizado em casos onde a função gera um erro ou termina a aplicação.

*/
function abortar(mensagem) {
    throw new Error(mensagem);
}
abortar('Um erro ocorreu');
console.log('Tente novamente');
