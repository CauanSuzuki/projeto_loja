const express = require("express");

const app = express();

// TODO: retorna um json ( { "mensagem": "ola munda", "parametro": "?"} )
// TODO: definir um parametro em uma rota
// TODO: mostrar esse parametro

app.get("/home", function (req, res) {
  return res.send("hello world");
});

app.listen(3333, function () {
  console.log("servidor iniciado");
});
