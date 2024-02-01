
// 3) Faça um program que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios
// O salário a ser transferido é calculado da segunite maneira:

//  Valor bruto do slário - percentual de imposto mediante a faixa salaria + adicional dos beneficios

// Para calcular o porcentual de imposto segue as aliquotas:

// De R$ 0.00 A 1100.00 = 5.00%
// De R$ 1100.01 a R$ 2500.00 = 10.00%
// Maior que R$ 2500.00 = 15.00%


const { gets, print } = require('./funcoes_auxiliares_ex3');

const salarioBruto = gets();
const beneficios = gets();
let desconto = 5

function descontoAliquota(valor, porcentual) {

    return (valor * (porcentual / 100));
}

function pegarPercentualComBaseNoSalario(salario,) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}




const valorATransferir = salarioBruto - (descontoAliquota(salarioBruto,pegarPercentualComBaseNoSalario(salarioBruto,))) + beneficios;

print('Salário base ' + salarioBruto);
print('base aliquota ' + pegarPercentualComBaseNoSalario(salarioBruto)+ '%');
print('valor do desconto ' + descontoAliquota(salarioBruto, 10));
print('valor beneficios ' + beneficios);
print ('Total a receber ' + valorATransferir);
