// Exercício Nota Escolar
// Obter a média a partir de um array

// 0-59 = F
// 60-6 = D
// 70-79 = C
// 80-89 = B
// 90-100 = A

const array = [70, 70, 80];
// Média = 75

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    
    const media = calcularMedia(notas);

    if (media<=59)
        return 'F';

    else if (media >= 60 && media <= 69)
        return 'D';

    else if (media >= 70 && media <= 79)
        return 'C';

    else if (media >= 80 && media <= 89)
        return 'B';

    else if (media >= 90 && media <=100)
        return 'A';

}

function calcularMedia(array){
    var soma = 0;
    for (let nota of array){
        soma += valor;
    }
    const media = soma/(array.length);

}