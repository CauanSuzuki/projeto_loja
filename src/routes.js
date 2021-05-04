const express = require("express");

const controllerUsuario = require("./controllers/usuario");

const router = express.Router();

router.get(
  "/home",
  controllerUsuario.visualizarTodos,
  controllerUsuario.listarTodos
);

router.post("/adcionar", controllerUsuario.adicionar);

router.delete("/deletar/:id", controllerUsuario.deletarUsuario);

router.put("/alterar/:item", controllerUsuario.alterarUsuario);

module.exports = router;
