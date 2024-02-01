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

const matheus = new Pessoa('Matheus', '1234567-8', '23')
const matheus_conta = new ContaBancaria('554422', '32', 'brasil', 10)

// Adiciona os valores herdados dos atributos da classe Pessoa
matheus_conta.pessoa.nome = matheus.nome
matheus_conta.pessoa.cpf = matheus.cpf 
matheus_conta.pessoa.idade = matheus.idade

//matheus
console.log(matheus)

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