const pessoas = [
    { altura: 1.75, genero: "Masculino" },
    { altura: 1.68, genero: "Feminino" },
    { altura: 1.80, genero: "Masculino" },
    { altura: 1.60, genero: "Feminino" },
    { altura: 1.85, genero: "Masculino" },
    { altura: 1.70, genero: "Feminino" },
    { altura: 1.78, genero: "Masculino" },
    { altura: 1.65, genero: "Feminino" },
    { altura: 1.90, genero: "Masculino" },
    { altura: 1.55, genero: "Feminino" },
    { altura: 1.73, genero: "Masculino" },
    { altura: 1.69, genero: "Feminino" },
    { altura: 1.76, genero: "Masculino" },
    { altura: 1.58, genero: "Feminino" },
    { altura: 1.82, genero: "Masculino" }
];

// comparando a maior e a menor altura
const alturas = pessoas.map(pessoa => pessoa.altura);
const maiorAltura = Math.max(...alturas);
const menorAltura = Math.min(...alturas);

// altura dos homens
const homens = pessoas.filter(pessoa => pessoa.genero === "Masculino");
const mediaAlturaHomens = homens.reduce((soma, homem) => soma + homem.altura, 0) / homens.length;

// número de mulheres
const quantidadeMulheres = pessoas.filter(pessoa => pessoa.genero === "Feminino").length;

// resultados
console.log("Maior altura: " + maiorAltura.toFixed(2) + "m");
console.log("Menor altura: " + menorAltura.toFixed(2) + "m");
console.log("Média de altura dos homens: " + mediaAlturaHomens.toFixed(2) + "m");
console.log("Número de mulheres: " + quantidadeMulheres);
