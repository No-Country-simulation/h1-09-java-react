import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import passport from "./middlewares/passport.middleware.js";
import swaggerUi from "swagger-ui-express";

import authRoute from "./router/auth.routes.js";
import citasRouter from "./router/citas.routes.js";
import pacientesRouter from "./router/pacientes.routes.js";
import uploadAccountRouter from "./router/updateProfile.route.js";
import genericUserRouter from "./router/genericUser.routes.js";
import swaggerDocument from "../swagger.json" assert { type: "json" };

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());

app.use("/api", authRoute);
app.use("/api", citasRouter);
app.use("/api", pacientesRouter);
app.use("/api", uploadAccountRouter);
app.use("/api", genericUserRouter);

app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));//Endpoint para la documentación

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

export default app;
