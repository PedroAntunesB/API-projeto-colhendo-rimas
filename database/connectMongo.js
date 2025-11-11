import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export function connectMongoFunction() {
  const uri = process.env.BD_URI

  mongoose
    .connect(uri)
    .then(() => console.log("MongoDB Atlas conectado!"))
    .catch((err) => console.error("Erro ao conectar Atlas:", err));
}
