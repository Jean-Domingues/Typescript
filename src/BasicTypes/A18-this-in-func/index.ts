/**
 *  Quando utilizamos o This dentro de uma função literal, precisamos
 *    passar como primeiro argumento, qual é this dessa função.
 */

// Função com apenas 1 parâmetro: msg
export default function teste(this: Date, msg: string): void {
  console.log(msg);
  console.log(this);
}

// Chamando a função, passando a referência do this
teste.call(new Date(), 'Oi');
teste.apply(new Date(), ['Oi']);
