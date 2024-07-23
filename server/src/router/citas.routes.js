import { Router } from "express";
import {
  crearCita,
  eliminarCita,
  obtenerCitas,
} from "../controllers/citas.controllers.js";

const router = Router();

router.get("/citas", obtenerCitas);
router.get("/citas/:id", eliminarCita);

router.post("/crearCita", crearCita);

export default router;
