//Assistir a aula novamente depois!!

const objetoA: {
  readonly chaveA: string; //não me permite alterar o valor de "chaveA"
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; //utilizado caso eu queira adicionar novas chaves ao meu objeto
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);

// Module mode
export default 1;
