import express from "express";
import cors from "cors";
import { connectMongoFunction } from "../database/connectMongo.js";
import { poesiaModel } from "../database/db.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.static("public"));

app.get("/poesia/:titulo", async (req, res) => {
  const tituloPoesia = req.params.titulo;

  try {
    const poesia = await poesiaModel.findOne({ titulo: tituloPoesia });

    if (!poesia) {
      return res.status(404).json({
        message: "A poesia que você busca NÃO está no banco de dados",
        error: "404"
      });
    }

    res.status(200).json(poesia);

  } catch (error) {
    console.error("Erro ao buscar poesia:", error);
    res.status(500).json({
      message: "Ocorreu um erro ao buscar a poesia",
      error: error.message
    });
  }
});

app.get('/autores', async (req, res) => {
  const dados = await poesiaModel.find({ autor: { $exists: true } })
  const autores = dados.map((i) => i.autor);
  res.status(200).json(autores);
});

app.get('/:autor', async (req, res) => {
  const autorParam = req.params.autor;
  const dadosAutor = await poesiaModel.find({ autor: autorParam });
  res.status(200).json(dadosAutor);
});

app.post("/adicionar", async (req, res) => {
  await poesiaModel.create();
  res.status(200).json({ message: "Poesia adicionada com sucesso" });
});

connectMongoFunction();
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export { app };
