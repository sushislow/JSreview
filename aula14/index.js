// Padrão seguido pelo JS = IEEE 754-2008
let num1 = 0.7; //*
let num2 = 0.1;//Number

num1 =((num1 * 100) + (num2 * 100)) / 100;

console.log(num1);
console.log(Number.isInteger(num1));

/*num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5
num1 += num2; //1.6
num1 += num2; //1.7
num1 += num2; //1.8
num1 += num2; //1.9
num1 += num2; //2.0*/

//console.log(num1 + num2) * tem uma certa imprecisão

/*
num1 = parseFloat(num1.toFixed(2));  *
            ou
num1 =((num1 * 100) + (num2 * 100)) / 100; *pra ajeitar a imprecisão
*/

//console.log(num1.toString() + num2); *Transforma em string temporariamente
//num1 = num1.toString(); *Transforma em string
//console.log(num1.toString(2)); *vai prea binário
//console.log(num1.toFixed(4));  *Arredonda e da pra escolher quantidade de casas decimais
//console.log(Number.isInteger(num1)); * se é inteiro ou não
/*let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); *Verifica se a conta é valida ou não*/