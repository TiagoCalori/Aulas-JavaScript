// -1) FAÇA UM PROGRAMA QUE RECEBA A MÉDIA DE UM ALUNO.
// CASO A MEDIA SEJA < 5 IMPRIMA "REPROVADO"
// CASO A MEDIA SEJA >= 5 E < 7 IMPRIMA "RECUPERAÇÃO"
// CASO A MEDIA SEJA >= 7 IMPRIMA "APROVADO"

const { gets, print } = require('./funcoes_auxiliares_ex1');

const mediaNota = gets();
let media = 0;

if (mediaNota < 5) {
    print('reprovado');
}
else if (mediaNota >= 5 && mediaNota < 7) {
    print('Recuperação');
}

else (print('Aprovado'));
