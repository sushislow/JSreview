const pes1 = {
    nome: 'edu',
    sobrenome: 'ferreira',
    idade: 18,

    fala(){
        console.log(`${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pes1.fala()
pes1.incrementaIdade();
pes1.fala()
/*function criapess (nome, sobrenome, idade){
    return {
        nome, sobrenome, idade
    };
}
const pessoa1 = criapess('Leuiz','Edu',25)

console.log(pessoa1)
*/