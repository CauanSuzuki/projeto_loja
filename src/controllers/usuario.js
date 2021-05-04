const banco = [];
const TOKEN = process.env.TOKEN;

function listarTodos(req, res) {
  return res.json(banco);
}

function visualizarTodos(req, res, next) {
  if (req.headers.token === TOKEN) {
    next();
  } else {
    res.json({ menssage: "Login não autorizado" });
  }
}

function adicionar(req, res) {
  if (req.body != "") {
    banco.push(req.body);
    return res.json({ mensagem: "cadastrado com sucesso" });
  } else {
    res.json({ mensagem: "Não é possivel cadastro" });
  }
}

function deletarUsuario(req, res) {
  const resp = banco.findIndex(function (valor) {
    return valor.id == req.params.id;
  });
  if (resp != -1) {
    banco.splice(resp, 1);

    return res.json({ mensagem: "deletado com sucesso" });
  } else if (resp == -1) {
    return res.json({ mensagem: "Item inexistente" });
  }
}

function alterarUsuario(req, res) {
  const parametro = req.params.item;
  const novoValor = req.body;
  const resp = banco.findIndex(function (valor) {
    return valor.id == parametro;
  });

  if (resp != -1) {
    banco[resp] = novoValor;
    return res.json({ mensagem: "Alterado com sucesso" });
  } else if (resp == -1) {
    return res.json({ mensagem: "Item inexistente" });
  }
}

module.exports = {
  listarTodos,
  adicionar,
  deletarUsuario,
  alterarUsuario,
  visualizarTodos,
};
