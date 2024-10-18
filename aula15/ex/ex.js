const txt1 = Number(prompt('Digite um número'));
const numt = document.getElementById('nt');
const txx = document.getElementById('txt');

numt.innerHTML = txt1

txx.innerHTML = `<p>A raiz é: <strong>${Math.sqrt(txt1)}</strong></p>`;
txx.innerHTML += `<p>${txt1} é inteiro? <strong>${Number.isInteger(txt1)}</strong></p>`;
txx.innerHTML += `<p>É NaN? <strong>${Number.isNaN(Number(txt1))}</strong></p>`;
txx.innerHTML += `<p>Arredondado pra cima <strong>${Math.ceil(txt1)}</strong></p>`;
txx.innerHTML += `<p>Arredondado pra baixo <strong>${Math.floor(txt1)}</strong></p>`;
txx.innerHTML += `<p>Com duas casas decimais <strong>${txt1.toFixed(2)}</strong></p>`;
