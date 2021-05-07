// Criar uma função que exibe a quantidade de asteriscos que uma linha possue

exibirAstericos(10);

function exibirAstericos(linhas){
    // var padrao = '';
    // for (var linha = 1; linha <= linhas; linha++){
    //     padrao += '*';
    //     console.log(padrao);
    // }

    for (var linha = 1; linha <= linhas; linha++){
        var padrao = '';
        for(var i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}