/*

2) O IMC - Indice de Massa Corporal é um critério da Organização Munidal de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um agoritimo
 que adado o peso e a alutra de um adulto mostre a sua condição de acordo com a tablea abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso
- Entre 18.5 e 25 peso normal
- Entre 25 e 30 Acima do peso
- Entre 30 e 40 Obeso
- Acima de 40 Obesidade Grave

*/

const peso = 125;
const altura = 1.75;
const imc = peso / Math.pow(altura,2);


console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do Peso');
}

else if (imc >= 18.5 && imc < 25){
    console.log('Peso Normal');
}
else if (imc >= 25 && imc < 30){
    console.log('Acima do Peso');
}
else if (imc >= 30 && imc < 40){
    console.log('Obeso');
}
else {
    console.log('Obesidade Grave');
}