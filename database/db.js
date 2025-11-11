import { model, Schema } from "mongoose";
const poesiaSchema = new Schema({
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  autor: { type: String, required: true },
});

const poesiaModel = model("Poesia", poesiaSchema);
export { poesiaModel };
