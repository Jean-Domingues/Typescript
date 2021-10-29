/**
 * O tipo unknown, é basicamente um any, porém mais seguro.
 *
 *  Isso por que o typescript assume que você não sabe que tipo é,
 *   então te obriga a fazer verificações antes de você usa-lo, com o any
 *     isso não acontece pois você diz a ele que sabe o seu tipo, no caso any.
 *
 */

let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);

// Module mode
export default 1;
