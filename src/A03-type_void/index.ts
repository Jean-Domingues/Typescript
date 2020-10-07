// Void representará o tipo de retorno, de funções ou métodos
//  que não tem retorno

function semRetorno(...tudo: string[]): void {
  console.log(tudo.join(' '));
}

const falaOi: () => void = () => {
  console.log('oi');
};

const pessoa = {
  nome: 'Jean',
  sobrenome: 'Domingues',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Jean', 'Domingues');
pessoa.exibirNome();
falaOi();

export { pessoa };
