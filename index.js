require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let message = "";

const musica = require("");

app.get("/", async (req, res) => {
  const musicas = await musica.findAll();

  res.render("index", {
    musica,
  });
});


app.get("/detalhes/:id", async (req, res) => {
  const musica = await musica.findByPk(req.params.id);

  res.render("detalhes", {
    musica,
  });
});

app.get("/criar", (req, res) => {
  res.render("criar", {message});
});


app.post("/criar", async (req, res) => {
  const { nome, descricao, imagem } = req.body;

  if (!nome) {
    res.render("criar", {
      message: "Nome é obrigatório",
    });
  }

  else if (!imagem) {
    res.render("criar", {
      message: "Imagem é obrigatório",
    });
  }

  else {
    try {
      const musica = await musica.create({
        nome,
        descricao,
        imagem,
      });

      res.redirect("/");
    } catch (err) {
      console.log(err);

      res.render("criar", {
        message: "Ocorreu um erro ao cadastrar o Musica!",
      });
    }
  }
});

app.get("/editar/:id", async (req, res) => {
  const musica = await musica.findByPk(req.params.id);

  if (!musica) {
    res.render("editar", {
      message: "Musica não encontrado!",
    });
  }

  res.render("editar", {
    musica, message
  });
});

app.post("/editar/:id", async (req, res) => {
  const musica = await musica.findByPk(req.params.id);

  const { nome, descricao, imagem } = req.body;

  musica.nome = nome;
  musica.descricao = descricao;
  musica.imagem = imagem;

  const musicaEditado = await musica.save();

  res.render("editar", {
    musica: musicaEditado,
    message: "Musica editado com sucesso!",

  });
});


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))