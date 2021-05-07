// Velocidade máxima == 70km => retorna um OK
// A cada 5 km acima do limite => 1 ponto na carteira
// Math.Floor()
// Caso os pontos > 12 => "Carteira suspensa"

verificarVelocidade(120); // valor de entrada


function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    KmPorPonto = 5;
    if (velocidade <= 70)
        console.log("OK");

    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
        if (pontos >= 12)
            console.log("Carteira suspensa");

        else
            console.log("Pontos: ", pontos);
    }
}