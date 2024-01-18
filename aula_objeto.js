/* estrutura para um objeto */

/* chave e valor = nome (chave) valor (Tiago F Calori) */
const tiago = {
    nome: 'Tiago F Calori',
    idade: 39,

    descrever: function (){
        console.log( `Meu nome é ${this.nome} e minha idade é ${this.idade}`);        
    }
};

tiago.descrever();

/*

tiago.altura = 1.75;


console.log(tiago.nome);
console.log(tiago.idade); 
console.log(tiago)
*/
/* função dentro de um objeto denomina-se metodo */

