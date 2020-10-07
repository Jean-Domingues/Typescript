/*
 Type never = "Nunca irá retornar nada"
  geralmente utilizada em funções que retornam erros ou
    em loops infinitos.

  - Assume o mesmo papel do type Void, porém, para o desenvolvedor,
      esse tipo é mais descritivo
 */

export default function criaErro(): never {
  //Nunca irá retornar nada que será usado na aplicação
  throw new Error('Erro qualquer');
}

criaErro();
