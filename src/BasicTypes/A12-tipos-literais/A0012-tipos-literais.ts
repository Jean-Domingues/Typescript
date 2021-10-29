/**
 *  Tipos literais, são tipos que assumem literalmente um valor específico
 */

const y = 10; // Tipo literal, literalmente é esse valor e sempre será: 10

let x = 10;
x = 0b1010;
const a = 100; // eslint-disable-line

const pessoa = {
  nome: 'Jean' as const, // infere o tipo como 'Jean', e este não pode ser alterado
  sobrenome: 'Domingues',
};

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  // Função com tipos literais como parâmetros
  return cor;
}
console.log(escolhaCor('Vermelho'));
console.log(y, x, pessoa);
