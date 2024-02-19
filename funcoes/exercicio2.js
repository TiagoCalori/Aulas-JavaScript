
// Faça um programa que receba N (quantidade de números) e seus respectivos valores e imprima o maior número par e o menos número impar.

const { gets, print } = require("./funcoes_auxiliares_ex2");



const N = gets();

let maiorNumPar = null  // quando não se sabe o valor coloca-se null / nulo 
let menorNumImpar = null

for (let i = 0; i < N; i++) {
    const valor = gets();

    /*
    if(valor % 2 === 0){
        if (maiorNumPar === null || valor > maiorNumPar){  //  || seria a expressão OU   - expressão E é && expressão OU é ||
            maiorNumPar = valor;
        }

    } else {
        if (menorNumImpar === null || valor < menorNumImpar){
            menorNumImpar = valor;
        } 
    } */

    
    
     if (valor % 2 === 0) {
         if (valor > maiorNumPar) {
             maiorNumPar = valor
         }
     } else {
         if (menorNumImpar !== 0) {
             menorNumImpar = valor;
         } else if (valor < menorNumImpar) {
             menorNumImpar = valor
         }
     } 
    

}


print('Maior número par: ' + maiorNumPar);
print('Menor número impar: ' + menorNumImpar);