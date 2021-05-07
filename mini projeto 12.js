const celular =  {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeDeBateria: 5000,
    ligar : function(){
        console.log('Fazendo ligação')
    }
}

function criarCelular(marcaCelular, tamanhoTela, capacidadeDeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeDeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
    
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);