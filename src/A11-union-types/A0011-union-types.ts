/**
 * Union Types, se refere a possibilidade de inferir mais de um tipo à uma mesma
 *  variável ou retorno, podendo ser: tipo1 ou tipo2 ou tipo3 ou tipoN
 */

function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(true, true));

// Module mode
export default 1;
