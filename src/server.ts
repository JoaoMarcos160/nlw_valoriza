import express from "express";
import { router } from "./routes";
import "./database"; //estabele a conexão com o banco

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () =>
  console.log("Server is running! " + new Date().toISOString())
);
