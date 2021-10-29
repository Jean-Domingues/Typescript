/**
 * Permite criar tipos separados e atribuir a outras variáveis ou
 *  objetos.
 */

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'; // OR
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

// Pode conter cores tanto RGB quanto CMYK
type CorPreferida = CorRGB | CorCMYK; // une os dois tipos

const pessoa: Pessoa = {
  idade: 20,
  nome: 'Jean',
  salario: 200_000, // = 200000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);
