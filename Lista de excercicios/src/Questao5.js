function calcularCirculo() {

    let raio = (prompt("Digite o raio do círculo:"));

    pi = 3.14
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;

    console.log("Raio: " + raio);
    console.log("Área do círculo: " + area.toFixed(2));
    console.log("Perímetro do círculo: " + perimetro.toFixed(2));

}

calcularCirculo();