import { Router } from "express";
import {
  obtenerPacientes,
  obtenerPacientesById,
} from "../controllers/pacientes.controllers";

const router = Router();

router.get("/pacientes", obtenerPacientes);
router.get("pacientes/:id", obtenerPacientesById);

export default router;
