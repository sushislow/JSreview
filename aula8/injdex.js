const nome = 'Edu';
const idade = 18;
const peso = 75;
const alturaEmM = 1.80;
let imc = peso / alturaEmM * 2; //peso/(altura*altura)
let anoNasc = 2024 - idade;
console.log(`${nome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM} de altura e seu IMC é de ${parseInt(imc)}. Ele nasceu em ${anoNasc}`)