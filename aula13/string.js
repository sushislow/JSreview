let strin = "Um \"texto\""
console.log(strin[4])
console.log(strin.indexOf('Um'));
console.log(strin.lastIndexOf('Um'));
console.log(strin.replace('Um', 'Outra'));

let string = 'O rato roeu a roupa do rei de roma.';
console.log(string.replace(/r/g, '#'));
console.log(string.length);
console.log(string.slice(2,6));

console.log(string.slice(-5, - 1));
//console.log(string.substring(string.length -5, string.length - 1));

console.log(string.split(' ', 4));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
