
class Pessoa {
    nome;
    idade;
    
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever (){
        console.log( `Meu nome é ${this.nome} e minha idade é ${this.idade}`);        

    }
}

const tiago = new Pessoa('Tiago Calori',39);
const samuca = new Pessoa('Samuel Freire', 7);

tiago.descrever();
samuca.descrever();

console.log(tiago);




