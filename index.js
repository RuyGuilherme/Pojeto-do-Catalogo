const express = require('express');
const cors = require('cors');

const Conn = require('./conn/conn');
const gamesRouter = require("./routes/games.routes");


const app = express();

app.use(express.json());
app.use(cors());

app.use("/games", gamesRouter);

Conn();

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor inicializado na porta ${port}`);
})
