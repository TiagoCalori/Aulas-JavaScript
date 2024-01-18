
const tiago = {
    nome: 'Tiago F Calori',
    idade: 39,


    
    descrever: function (){
        console.log( `Meu nome é ${this.nome} e minha idade é ${this.idade}`);        
    }  
    
};

tiago.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
};

tiago.descrever();