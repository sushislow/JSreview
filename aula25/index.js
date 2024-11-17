const numero = 12;

if (numero >= 0 && numero <= 5) {
    console.log('o número está entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('o número está entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11')
} else if (numero > 11 || numero < 0) {
    console.log('O número é menor que 0 ou maior que 11')
} else {
    console.log('O número não está entre 0 e 11')
}