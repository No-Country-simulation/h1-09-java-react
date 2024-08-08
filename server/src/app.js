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
import { handleErrorJoi } from "./middlewares/errors/validation-error.js";
import { unknownError } from "./middlewares/errors/unknown-error.js";
import { hikariConfig } from "./config/index.js";

console.log(hikariConfig);

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://justina-io-api-9a1d439a2f95.herokuapp.com',
  'https://66b15b6c65ae262f4e8853b1--justina-h1-09.netlify.app',
  'https://justina-h1-09.netlify.app'
];

app.use(cors({
  origin: function(origin, callback) {
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
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

//Uso de middlewares para manejar errores
app.use( handleErrorJoi );
app.use( unknownError );

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

export default app;
