console.log("JAVASCRIPT CONECTADO!");

// CLASSE - MOLDE PARA CRIAR OBJETOS
class Carro {
  // CONSTRUCTOR - É UM MÉTODO ESPECIAL DO JAVASCRIPT.
  constructor(marca, modelo) {
    // THIS - É UMA PALAVRA-CHAVE ESPECIAL, QUE SE REFERE AO PRÓPRIO OBJETO CRIADO.
    this.marca = marca;
    this.modelo = modelo;
  }
}

// OBJETO - É UMA INSTÂNCIA DA CLASSE.
const primeiroCarro = new Carro("Toyota", "corolla");
console.log(primeiroCarro.marca);

/* --------------------------------------------------------------------- */

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const celular = new Produto("Nokia", 1500);
const notebook = new Produto("Notebook", 1500);

console.log(
  `Nome do produto: ${celular.nome} - Preço do produto: ${celular.preco}`
);
console.log(notebook.nome);

/* ---------------------------------------------------------------------- */

class contaBancaria {
  constructor(saldoInicial) {
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    // this .saldo = this.saldo + valor;
    this.saldo += valor;
  }

  getSaldo() {
    return `Seu saldo é: R$${this.saldo.toFixed(2)}`;
  }
}
const conta = new contaBancaria(1000);
console.log(conta.getSaldo());
conta.depositar(1000);
console.log(conta.getSaldo());

/* ----------------------------------------------------------------------- */

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // MÉTODOS - SÃO FUNÇÕES DENTRO DE UMA CLASSE, SERVEM PARA EXECUTAR AÇÕES
  // OU MANIPULAR OS ATRIBUTOS!
  apresentacao() {
    return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos!`;
  }
}

const minhaApresentacao = new Pessoa("Miguel", 17);
console.log(minhaApresentacao.apresentacao());

/* ----------------------------------------------------------------------- */

class Steam {
  // ATRIBUTO ENCAPSULADO - TRADUZINDO PRIVADO
  // APENAS CLASSE E OS MÉTODOS DENTRO DA CLASSE TEM ACESSO!
  #saldo;

  constructor(saldoInicialSteam) {
    this.#saldo = saldoInicialSteam;
  }

  depositarValorSteam(valor) {
    if (valor > 0) {
      this.#saldo + -valor;
    } else {
      console.log("O depósito é inválido!");
    }
  }

  getSaldoSteam() {
    return `Seu saldo na steam é ${this.#saldo}`;
  }
}

const steam = new Steam(1000);
steam.depositar(300);
console.log(steam.getSaldoSteam());
