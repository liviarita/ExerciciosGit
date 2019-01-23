class Retangulo{

    constructor(altura, largura){

        this.altura = altura
        this.largura = largura
    }
}

var retangulo = new Retangulo(20, 30)

retangulo.altura

retangulo.largura


class Pessoa{

    constructor(nome, sexo, idade, altura, cor){

        this.nome = nome
        this.sexo = sexo
        this.idade = idade
        this.altura = altura
        this.cor = cor

        console.log(`A pessoa se chama ${this.nome},
         do sexo ${this.sexo}, tem ${this.idade} anos,
          com ${this.altura} de altura e da cor ${this.cor}.`)
    }
}

var pessoa = new Pessoa ("João", "masculino", 32, 1.80, "branca")

//Exemplo de Filter, Map e Reduce

data = [

    {
        name: 'Babalu',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Mel',
        age: 2,
        type: 'dog'
    },
    {
        name: 'Timão',
        age: 10,
        type: 'cat'
    },
    {
        name: 'Nalla',
        age: 6,
        type: 'cat'
    },
];

let dogs = data.filter((animal) => {
    return animal.type === 'dog';
})

dogs.map((animal) => {
    return animal.age *=7
})

var calcAge = dogs.reduce((sum, animal) => {
    return sum + animal.age;
}, 0)

console.log (dogs);

// Outro exemplo de Map

var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var celcius = fahrenheit.map (function (elem) {
    return Math.round ((elem - 32) * 5 /9 );
});

var rockets = [

    {country: 'Russia', launches: 32},
    {country: 'US', launches: 23},
    {country: 'China', launches: 16},
    {country: 'Europe(ESA)', launches: 7},
    {country: 'India', launches: 4},
    {country: 'Japan', launches: 3},
];

var sum = rockets.reduce (function(prevVal, elem){

    return prevVal + elem.launches;
}, 0);


// Ler uma lista de nomes e imprimir

var names = [
    {name: 'Lívia'},
    {name: 'Daniel'},
    {name: 'Bianca'},
    {name: 'Lucas'},
    {name: 'Rodolfo'},
    {name: 'Neto'},
];

names.map ((nomes) => {
    console.log (nomes.name);
    return nomes
});