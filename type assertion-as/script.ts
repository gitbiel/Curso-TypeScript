/* 
  Type Assertion

  as

  Com o Type Assertion é possível "indicar" ao TypeScript qual o tipo de dado esperado com
  a palavra-chave as. Só é possível indicar tipos que possuam relação com o tipo original.

  Evitar ao máximo o uso de Type Assertion, pois a segurança (Type Safety) é perdida
  quando indicamos algo que nem sempre será verdade.
*/


const Video = document.querySelector('.player') as HTMLVideoElement;
// erro runtime, não existe volume de null
Video.volume;

// erro TS, possíveis dados devem ser compatíveis com Element | null
// const link = document.querySelector('.link') as string;
