import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();

app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

export default app;
