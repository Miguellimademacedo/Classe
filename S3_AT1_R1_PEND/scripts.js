// Definindo a classe Funcionario com seu construtor e métodos
class Funcionario {
  // O construtor recebe nome, salario e dataAdmissao para inicializar as propriedades
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome;  // Atribui o nome ao funcionário
    this.salario = salario;  // Atribui o salário do funcionário
    this.dataAdmissao = dataAdmissao;  // Atribui a data de admissão
  }

  // Método para calcular o bônus de um funcionário, que é 10% do salário
  calcularBonus() {
    return this.salario * 0.1;
  }

  // Método para exibir os detalhes do funcionário, incluindo nome, salário, data de admissão e bônus
  exibirDetalhes() {
    console.log(
      `Nome do funcionário é ${this.nome} seu salário é ${this.salario} A sua data de admissão é ${this.dataAdmissao} o seu bônus é ${this.calcularBonus()}`
    );
  }
}

// Criando uma instância da classe Funcionario com os dados de Alice e chamando o método exibirDetalhes
const funcionario = new Funcionario("Alice", 3500, "28/01/2008");
funcionario.exibirDetalhes();

// Definindo a classe Gerente que herda da classe Funcionario
class Gerente extends Funcionario {
  // O construtor da classe Gerente também recebe nome, salario, dataAdmissao e departamento
  constructor(nome, salario, dataAdmissao, departamento) {
    super(nome, salario, dataAdmissao);  // Chama o construtor da classe pai (Funcionario)
    this.departamento = departamento;  // Atribui o departamento do gerente
  }

  // Método para calcular o bônus de um gerente, que é 20% do salário
  calcularBonus() {
    return this.salario * 0.2;
  }

  // Método para exibir os detalhes do gerente, incluindo departamento e bônus calculado
  exibirDetalhes() {
    console.log(
      `Nome do funcionário é ${this.nome} seu salário é ${this.salario} A sua data de admissão é ${this.dataAdmissao} o seu departamento é ${this.departamento} O seu bônus é ${this.calcularBonus()}`
    );
  }
}

// Criando uma instância da classe Gerente com os dados de Heloá e chamando o método exibirDetalhes
const gerente = new Gerente("Heloá", 3500, "02/01/2008", "Médica");
gerente.exibirDetalhes();
