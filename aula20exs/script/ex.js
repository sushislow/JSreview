const form = document.querySelector('.form');
const res = document.querySelector('.resul');
const pessoas = [];

function rec(evento) {
    //evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    let pessoa = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    };

    pessoas.push(pessoa);
    console.log(pessoas);

    res.innerHTML = `<p>${nome.value}<br>${sobrenome.value}<br>${peso.value}<br>${altura.value}</p>`
}
//form.addEventListener('submit', rec);
// se usar a forma comentada, tem que usar <button></button>