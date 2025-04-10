let num = [15, 8, 23, 4, 42, 9, 11, 27, 3, 30];

let menor = num[0];
let maior = num[0];
let soma = 0;

for (let i = 0; i < num.length; i++) {
    let numero = num[i];

    if (numero < menor) {
        menor = numero;
    }

    if (numero > maior) {
        maior = numero;
    }

    soma += numero;
}

console.log("Menor valor:", menor);
console.log("Maior valor:", maior);
console.log("Soma dos valores:", soma);
