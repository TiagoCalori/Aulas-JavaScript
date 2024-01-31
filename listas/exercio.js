
//2) Crie um programa que seja capaz de percorrer uma lista de npumeros e imprima cada número PAR encontrado.

const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < lista.length; i++) {
  const numero = lista[i];
  if (numero % 2 === 0) {

    console.log(numero); 

  }

}