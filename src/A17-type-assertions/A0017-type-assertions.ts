/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion = Garanto que o tipo desse cara sempre vai ser HTMLBodyElement
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não Recomendado */
// Type assertion
const body4 = document.querySelector('body') as unknown as number;

// Non-null assertion (!) = Explicita que a expressão não vai ser nula
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
