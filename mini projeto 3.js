// Divisível por 3 => FIZZ
// Divisível por 5 => BUZZ
// Divisível por 3 e 5 => fizzBuzz
// Não divisível por 3 e 5 => retorna o valor da entrada
// Valor não numérico => 'Não é um número']

const resultado = fizzBuzz(95);
console.log(resultado);

var numero = 15;


function fizzBuzz(entrada){
    if (typeof entrada != 'number')
        return 'Não é um número';

    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    
    if (entrada % 3 === 0) // Divisão por 3 com resto 0
        return 'Fizz'

    if (entrada % 5 === 0) // Divisível por 5 com resto 0
        return 'Buzz';

    else 
    return entrada;
}
