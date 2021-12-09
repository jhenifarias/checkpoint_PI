const aluno = require("./aluno");

// passo 3
class Curso {
  nomeCurso = "Lógica de Programação";
  notaAprovacao = 8;
  faltasMaximas = 3;
  listaEstudantes = [];

  constructor(lista) {
    this.listaEstudantes = lista;
  }

  
  // passo 5
  aprovacao(indice) {
    const aprovados = this.listaEstudantes[indice];

    if (
      aprovados.media >= this.notaAprovacao &&
      aprovados.quantidadeFaltas < this.faltasMaximas
    ) {
      return `O aluno ${aprovados.nome} teve a média ${aprovados.media}, e ${aprovados.quantidadeFaltas} faltas, portanto foi aprovado.`;

    } else if (
      aprovados.media >= this.notaAprovacao * 1.1 && 
      aprovados.quantidadeFaltas === this.faltasMaximas
    ) {
      return `O aluno ${aprovados.nome} teve a média ${aprovados.media}, e ${aprovados.quantidadeFaltas} faltas, portanto foi aprovado.`;
    } 
    else {
      return `O aluno ${aprovados.nome} teve a média ${aprovados.media}, e ${aprovados.quantidadeFaltas} faltas, portanto foi REPROVADO.`;
    }
  }
}

// passo 6
const aprovados = new Curso(aluno.listaAlunos);
console.log(aprovados.aprovacao(0));
console.log(aprovados.aprovacao(1));
console.log(aprovados.aprovacao(2));
console.log(aprovados.aprovacao(3));
console.log(aprovados.aprovacao(4));

