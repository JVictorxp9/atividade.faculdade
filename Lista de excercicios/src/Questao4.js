
let anoAtual = new Date().getFullYear();
let anoComeco = 1995;
let salario = 1000.00;


let percentualAumento = 0.0015;


salario += salario * percentualAumento;


for (let ano = 1997; ano <= anoAtual; ano++) {
    percentualAumento *= 2;
    salario += salario * percentualAumento;
}


console.log("Salário atual em " + anoAtual + ": R$ " + salario.toFixed(2));