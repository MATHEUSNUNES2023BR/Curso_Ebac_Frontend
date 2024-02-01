function Pessoa(nome, cpf, idade){
    this.nome = nome
    this.cpf = cpf
    this.idade = idade
}

function ContaBancaria(conta, agencia, banco, saldo){

    // Utilizando herança
    this.pessoa = Object.create(Pessoa.prototype)
    this.conta = conta
    this.agencia = agencia
    this.banco = banco
    // Saldo anônimo
    let _saldo = saldo
    //Adicionar Saldo
    this.setSaldo_AD = function(add){
        _saldo += add
    }
    //Remove Saldo
    this.setSaldo_RE = function(add){
        _saldo -= add
    }
    //Retorna Saldo
    this.getSaldo = function(){
        return console.log(`Seu saldo atual é R$${_saldo}`)
    }
}

function Carro(fabricante, modelo, ano){
    this.proprietario = Object.create(Pessoa.prototype)
    this.fabricante = fabricante
    this.modelo = modelo
    this.ano = ano
}
const matheus = new Pessoa('Matheus', '1234567-8', '23')
const matheus_conta = new ContaBancaria('554422', '32', 'brasil', 10)

// Adiciona os valores herdados dos atributos da classe mãe Pessoa
matheus_conta.pessoa.nome = matheus.nome
matheus_conta.pessoa.cpf = matheus.cpf 
matheus_conta.pessoa.idade = matheus.idade

const matheus_carro = new Carro('Chevrolet', 'Onix', 2022)
// Adiciona os valores herdados dos atributos da classe mãe Pessoa
matheus_carro.proprietario.nome = matheus.nome
matheus_carro.proprietario.idade = matheus.idade
matheus_carro.proprietario.cpf = matheus.cpf


//matheus
console.log(matheus)
console.log('====================================================================')
//matheus_conta
console.log(matheus_conta)
// Pegar saldo
matheus_conta.getSaldo()

//Adiciona 15
matheus_conta.setSaldo_AD(15)
matheus_conta.getSaldo()

//Remove 5
matheus_conta.setSaldo_RE(5)
matheus_conta.getSaldo()
console.log('====================================================================')
//Carro
console.log(matheus_carro)