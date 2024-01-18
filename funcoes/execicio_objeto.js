/* Crie uma classe para representar carros.
Os carros possuem um marca, uma cor e um gasto médio de combustível pro kilometro rodade.
Crie um método que dado a quantidade de quilometros e o preço do combustivel nos dÊ o valor gasto em reais para realizar este percuso.

*/

class Carros {
    marca;
    cor;
    kmPorLitro;

    constructor (marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;

    }


}

const sentra = new Carros('Nissan', 'Azul', 1/10);

console.log(sentra);
