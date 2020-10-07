/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Jean'; // Qualquer tipo de strings: '' "" ``
let idade: number = 21; // 10, 1.57, -5.55, 0xfff, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

let arrayDeBooleans: Array<boolean> = [true, false, true, false];
let arrayDeBooleans2: boolean[] = [true, false, true, false];

//objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Jean'
};
let variasPessoas: Array<{name: string}> = [{name: ''}, {name: ''}];


//funcões (nunca irá ocorrer inferência de tipos nos parâmetros)
/*
    nomenclatura 1: função (parâmetro: tipo): tipo_de_retorno {}
    nomenclaruta 2: const função: (parâmetro: tipo) => tipo_de_retorno = ()=>{}
*/
function soma(x:number, y:number): number {
  return x+y;
}
const soma2 : (x: number, y: number) => number = (x,y) => x+y;
