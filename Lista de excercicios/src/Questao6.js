function calcularInvestimento() {

    let capital = parseFloat(prompt("Informe o capital inicial investido:"));
    let taxa = parseFloat(prompt("Informe a taxa de juros mensal (em %):"));
    let tempo = parseInt(prompt("Informe o tempo do investimento (em meses):"));

    let taxaDecimal = taxa / 100;

    let montante = capital * Math.pow((1 + taxaDecimal), tempo);


    console.log("Montante final do investimento: R$ " + montante.toFixed(2));
}


calcularInvestimento();