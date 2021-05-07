// Receber uma quantidade de calores para avaliar
// Função exibe se cada valor é par ou ímpar

exibirTipo(16);
function exibirTipo(limite){
    for(var i = 0; i <= limite; i++){
        if (i % 2 === 0) // define se é um valor PAR
            console.log(i, 'PAR');
        else 
            console.log(i, 'ÍMPAR')
    }
}