// passo 1
class Alunos {
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

    this.listaAlunos.forEach((aluno) => {
      total = 0;

      aluno.notas.forEach((valor) => {
        total += valor;
      });

      aluno.media = total / aluno.notas.length;
    });
  }

// passo 2b
aumentarquantidadeFaltas(aumentar) {
  this.listaAlunos[aumentar].quantidadeFaltas++;
}
}

// cont. passo 2a
  const aluno = new Alunos();
    aluno.adicionarAluno("José", [8, 9, 6, 10]);
    aluno.adicionarAluno("Maria", [10, 8, 8, 7]);
    aluno.adicionarAluno("Reginaldo", [8, 7, 8, 7]);
    aluno.adicionarAluno("João", [10, 9, 8, 7]);
    aluno.adicionarAluno("Rosana", [8, 6, 7]);

   

// cont. passo 2b
    aluno.aumentarquantidadeFaltas(2);
    aluno.aumentarquantidadeFaltas(2);
    aluno.aumentarquantidadeFaltas(2);
    aluno.aumentarquantidadeFaltas(4);
    aluno.aumentarquantidadeFaltas(4);
    aluno.calcularMedia();

// para consultar depois  de adicionar as faltas, tire o comentário da linha abaixo:
  //  console.log(aluno.listaAlunos);
    

module.exports = aluno;