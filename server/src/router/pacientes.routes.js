import { Router } from "express";
import {
  obtenerPacientes,
  obtenerPacientesById,
} from "../controllers/pacientes.controllers.js";
import passport from "passport";

const router = Router();

router.get("/pacientes", passport.authenticate('jwt', { session: false }), obtenerPacientes);
router.get("/pacientes/:id", passport.authenticate('jwt', { session: false }), obtenerPacientesById);

export default router;
