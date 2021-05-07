// Criar uma função que mostra os números primos com um limite  

// Primos 
// Compostos

// Ex: 10, 11
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for (var numero = 2; numero <= limite; numero++){
        if (NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero) {
    for (var divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
}