let pA = 80000;
let pB = 200000;


let taxaA = 0.03;
let taxaB = 0.015;

let anos = 0;


while (pA < pB) {

    pA += pA * taxaA;
    pB += pB * taxaB;
    anos++;
}

console.log("Em torno de " + anos + " anos para a população do país A ultrapassar ou igualar a do país B.");