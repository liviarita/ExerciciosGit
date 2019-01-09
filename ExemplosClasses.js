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