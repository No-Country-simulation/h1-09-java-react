import { Router } from "express";
import {
  crearCita,
  obtenerCitasPorMedicoPaciente,
  eliminarCita,
  obtenerCitaById,
  obtenerCitas,
  obtenerCitasPorMedico,
  obtenerCitasPorPaciente,
} from "../controllers/citas.controllers.js";

import validator from "../middlewares/validator.js";

import { createCitaSchema } from "../validations/cita.validations.js";
import passport from "passport";

const router = Router();

router.post(
    "/citas/crearCita",
    validator.body(createCitaSchema),
    crearCita
);
router.get("/citas/medico/:idMedico/paciente/:idPaciente", passport.authenticate('jwt', { session: false }), obtenerCitasPorMedicoPaciente);
router.get("/citas/medico/:idMedico", passport.authenticate('jwt', { session: false }), obtenerCitasPorMedico);
router.get("/citas/paciente/:idPaciente", passport.authenticate('jwt', { session: false }), obtenerCitasPorPaciente);

router.get("/citas", passport.authenticate('jwt', { session: false }), obtenerCitas);
router.get("/citas/:id", passport.authenticate('jwt', { session: false }), obtenerCitaById);
router.delete("/citas/:id", passport.authenticate('jwt', { session: false }), eliminarCita);

export default router;
