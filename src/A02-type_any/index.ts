// Utilize any apenas em último caso, pois pode desencadear
//  vários any's em sua aplicação por conta da inferência de tipos

function msg(msg: any): any {
  return msg;
}

console.log(msg([1, 2, 3]));
console.log(msg('oi'));
console.log(msg(1));

//tudo isso irá funcionar normalmente, pois ele espera "qualquer coisa"
