// Se uma variável tem a possibilidade de ter um valor undefined
//  devemos sempre fazer uma verificação
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

// Tbm devemos declarar a possibilidae de ser undefined
export function createPerson(
  firstName: string,
  lastName?: string, //parâmetro opcional
): {
  firstName: string;
  lastName?: string; //pode retornar undefined
} {
  return {
    firstName,
    lastName,
  };
}

// Sempre que uma função tem a possibilidade de retornar Null, deve-se fazer uma checagem
export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida', squareOfTwoString); //Typescript sabe que é Null
} else {
  console.log(squareOfTwoString * 100); //Typescript sabe que é Number
}
