import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import authRoute from "./router/auth.routes";

dotenv.config();

const app = express();

app.use(cors("*"));
app.use(express.json());

app.use("/api", authRoute);

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

export default app;
