import { Router } from "express";
import {
  crearCita,
  eliminarCita,
  obtenerCitaById,
  obtenerCitas,
} from "../controllers/citas.controllers.js";

const router = Router();

router.post("/crearCita", crearCita);

router.get("/citas", obtenerCitas);
router.get("/citas/:id", obtenerCitaById);
router.delete("/citas/:id", eliminarCita);

export default router;
