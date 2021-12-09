// pagina 1 alunojs


// passo 1
class Aluno {
  listaAlunos = [];

  adicionarAluno(nome, notas) {
    this.listaAlunos.push({
      nome: nome,
      quantidadeFaltas: 0,
      notas: notas,
      media: 0,
    });
  }

// passo 2a
  calcularMedia() {
    let total;

    this.listaAlunos.forEach((pessoa) => {
      total = 0;

      pessoa.notas.forEach((valor) => {
        total += valor;
      });

      pessoa.media = total / pessoa.notas.length;
    });
  }

// passo 2b
  aumentarquantidadeFaltas(indice) {
    this.listaAlunos[indice].quantidadeFaltas++;
  }
}

// cont. passo 2a
const pessoa = new Aluno();

pessoa.adicionarAluno("José", [8, 9, 6, 10]);
pessoa.adicionarAluno("Maria", [10, 8, 8, 7]);
pessoa.adicionarAluno("Reginaldo", [8, 7, 8, 7]);
pessoa.adicionarAluno("João", [10, 9, 8, 7]);
pessoa.adicionarAluno("Rosana", [8, 6, 7]);

pessoa.calcularMedia();

// cont. passo 2b

// para consultar antes de adicionar as faltas, tire o comentário da linha abaixo:
    // console.log(pessoa.listaAlunos);

pessoa.aumentarquantidadeFaltas(2);
pessoa.aumentarquantidadeFaltas(2);
pessoa.aumentarquantidadeFaltas(2);
pessoa.aumentarquantidadeFaltas(4);
pessoa.aumentarquantidadeFaltas(4);

// para consultar depois  de adicionar as faltas, tire o comentário da linha abaixo:
    // console.log(pessoa.listaAlunos);

module.exports = pessoa;



// pagina 2 cursojs


// passo 3

const aluno = require("./aluno");
class curso {
  nomeCurso = "Matemática";
  notaAprovacao = 8;
  faltasMaximas = 3;
  listaEstudantes = [];

  constructor(lista) {
    this.listaEstudantes = lista;
  }

  // passo 4 ***********
  adicionarAluno(nome, notas) {
    this.listaEstudantes.push({
      nome: nome,
      notas: notas,
      media: 0,
      quantidadeFaltas: 0,
    });
  }

  // passo 5
  aprovacao(indice) {
    const participante = this.listaEstudantes[indice];

    if (
      participante.media >= this.notaAprovacao &&
      participante.quantidadeFaltas < this.faltasMaximas
    ) {
      return `O aluno ${participante.nome} teve a média ${participante.media}, e ${participante.quantidadeFaltas} faltas, portanto foi aprovado.`;
    } else if (
      participante.media >= this.notaAprovacao * 1.1 &&
      participante.quantidadeFaltas === this.faltasMaximas
    ) {
      return `O aluno ${participante.nome} teve a média ${participante.media}, e ${participante.quantidadeFaltas} faltas, portanto foi aprovado.`;
    } else {
      return `O aluno ${participante.nome} teve a média ${participante.media}, e ${participante.quantidadeFaltas} faltas, portanto foi reprovado.`;
    }
  }
}

// passo 6
const participante = new curso(aluno.listaAlunos);
console.log(participante.aprovacao(0));
console.log(participante.aprovacao(1));
console.log(participante.aprovacao(2));
console.log(participante.aprovacao(3));
console.log(participante.aprovacao(4));



// pagina 3 estudantejs 





// passo 2b
