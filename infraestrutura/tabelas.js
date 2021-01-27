class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarAtendimentos();
  }

  criarAtendimentos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Atendimentos (id INT NOT NULL AUTO_INCREMENT, cliente varchar (50) NOT NULL, pet VARCHAR (20),servico VARCHAR (20) NOT NULL, data datetime not null, dataCriacao datetime not null, status VARCHAR (20) NOT NULL, observacoes TEXT, PRIMARY KEY (id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela atendimentos criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
