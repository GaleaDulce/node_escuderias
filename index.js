const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const { connect } = require("./src/utils/database");

connect();

const server = express();

const PORT = process.env.PORT || 5000;


server.use(express.json());

server.use(express.urlencoded({ extended: false }));



const EscuderiasRoutes = require("./src/api/routes/escuderia.routes");

server.use("/escuderia", EscuderiasRoutes);

server.use("*", (req, res, next) => {
  return next("Ruta no encontrada");
});

server.listen(PORT, () => {
  console.log(`Servidor arrancado en http://localhost:${PORT}`);
});
