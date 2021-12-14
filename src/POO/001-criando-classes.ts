class Colaborador {
  constructor(readonly name: string, readonly sobrenome: string) {}
}

export class Empresa {
  readonly name: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public falarNome(): void {
    console.log('O nome da empresa é ' + this.name);
  }

  public addColaborador(nome: string, sobrenome: string): void {
    const newColaborator = new Colaborador(nome, sobrenome);
    this.colaboradores.push(newColaborator);

    // também aceita, pois segue a regra name e sobrenome
    this.colaboradores.push({ name: 'Gustavo', sobrenome: 'silva' });
  }

  public printColaboratores(): void {
    this.colaboradores.forEach((colaborador) =>
      console.log(`${colaborador.name} ${colaborador.sobrenome}`),
    );
  }
}

const empresa1 = new Empresa('Apple', '234.234.233/11');

empresa1.falarNome();
empresa1.addColaborador('Jean', 'Domingues');
empresa1.addColaborador('João', 'Vieira');
empresa1.printColaboratores();
