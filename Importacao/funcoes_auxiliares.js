



const entradas = [5, 10, 50, 98, 23, 15, 18, 80, 100, 3];
let i = 0;

function gets () {
    const valor = entradas[i];
    i++;
    return valor;
}

function print (texto) {
    console.log(texto);
}

module.exports = { gets, print };