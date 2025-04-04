class Funcionario {
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
  }

  calcularBonus() {
    return this.salario * 0.1;
  }

  exibirDetalhes() {
    console.log(
      `Nome do funcionário é ${this.nome} seu salário é ${
        this.salario
      } A sua data de admissão é ${
        this.dataAdmissao
      } o seu bônus é ${this.calcularBonus()}`
    );
  }
}

const funcionario = new Funcionario("Miguel", 3500, "28/01/2008");
funcionario.exibirDetalhes();

class Gerente extends Funcionario {
  constructor(nome, salario, dataAdmissao, departamento) {
    super(nome, salario, dataAdmissao);
    this.departamento = departamento;
  }

  calcularBonus() {
    return this.salario * 0.2;
  }

  exibirDetalhes() {
    console.log(
      `Nome do funcionário é ${this.nome} seu salário é ${
        this.salario
      } A sua data de admissão é ${this.dataAdmissao} o seu departamento é ${this.departamento} O seu bônus é ${this.calcularBonus()}`
    );
  }
}

const gerente = new Gerente("Heloá", 3500, "02/01/2008", "Médica");
gerente.exibirDetalhes();
