// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5


// Armazenar os múltiplos de 3, depois os de 5, e por ultimo, somar os dois

somar(10);

function somar(limite){
    let m3 = 0;
    let m5 = 0;
    for( i = 0; i <= 10; i++){
        if (i % 3 === 0)
            m3 += i;
        else if (i % 5 === 0)
            m5 += i;
    }
    console.log(m3);
    console.log(m5);
    console.log(m3 + m5);

}