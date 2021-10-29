/**
 * Funciona como operador AND de tipos, ele basicamente vai unir dois
 *  types em um só, ou seja, a sua variável ou objeto precisa ter os dois
 *    tipos que estão sendo declarados.
 */

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const opcao: Intersecao = 'A'; // Só pode ser A

const pessoa: Pessoa = {
  nome: 'Jean',
  sobrenome: 'Domingues',
  idade: 30,
};

console.log(pessoa);
console.log(opcao);

// Module mode
export { pessoa };
