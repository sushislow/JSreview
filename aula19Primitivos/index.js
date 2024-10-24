/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function - Passados por referência

let a = [1,2,3];
let b = a;
let c = b;
console.log(a,b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

b.push('Luiz');
console.log(c);

//////////////

let a = [1,2,3];
let b = [...a];   //'...a' faz uma cópia do a igual como é feito com um primitivo (tambem funciona pra objetos)
let c = b;
console.log(a,b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

a.push('Luiz');
console.log(a,c);   

////////////////////

const a = {
    nome: 'edu',
    sobrenome: 'ferreira'
};
const b = a;
a.nome = 'João';
console.log(a);
console.log(b);
*/


