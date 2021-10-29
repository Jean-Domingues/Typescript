enum Frutas {
  BANANA,
  ABACATE,
  ABACAXI,
}

console.log(Frutas);

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

// Não retorna erro ao tentar passar um parâmetro que não existe
escolhaACor(123123); // undefined
