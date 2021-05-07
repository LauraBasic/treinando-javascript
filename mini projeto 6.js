// Criar um método para ler propriedade de um objeto e exibir somente as strings no console

const anime = {
    titulo: 'Jujutsu Kaisen',
    tipo: 'Shounen',
    ano: 2018,
    protagonista: 'Itadori'
}

exibirPropriedades(anime)

function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}