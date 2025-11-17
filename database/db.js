import { model, Schema } from "mongoose";
const poesiaSchema = new Schema({
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  autor: { type: String, required: true },
});

const dancaSchema = new Schema({
  nome: { type: String, required: true },
  origem: { type: String, required: true },
  informacao: { type: String, required: true },
})

const poesiaModel = model("Poesia", poesiaSchema);
const dancaModel = model("Danca", dancaSchema);
export { poesiaModel, dancaModel };
