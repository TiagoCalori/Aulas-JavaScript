
class Pessoa {
    nome;
    idade;
    

    descrever (){
        console.log( `Meu nome é ${this.nome} e minha idade é ${this.idade}`);        

    }
}

const tiago = new Pessoa();
tiago.nome = 'Tiago Calori';
tiago.idade = 39;

const deia = new Pessoa();
tiago.nome = 'Andreia Freire';
tiago.idade = 37;

tiago.descrever();
deia.descrever();
