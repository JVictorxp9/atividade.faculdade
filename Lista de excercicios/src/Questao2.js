let pares = 0;
let impares = 0;

for (i = 0; i != 10; i++){
    let numero = prompt("Digite um  número inteiro:");

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Quantidade de números pares: " + pares);
console.log("Quantidade de números ímpares: " + impares);