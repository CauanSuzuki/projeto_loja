const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const routes = require("./src/routes");

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(3333, function () {
  console.log("rodando");
});
