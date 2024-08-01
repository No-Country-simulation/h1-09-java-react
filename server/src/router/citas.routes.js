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

const router = Router();

router.post(
    "/citas/crearCita",
    validator.body(createCitaSchema),
    crearCita
);
router.get("/citas/medico/:idMedico/paciente/:idPaciente", obtenerCitasPorMedicoPaciente);
router.get("/citas/medico/:idMedico", obtenerCitasPorMedico);
router.get("/citas/paciente/:idPaciente", obtenerCitasPorPaciente);

router.get("/citas", obtenerCitas);
router.get("/citas/:id", obtenerCitaById);
router.delete("/citas/:id", eliminarCita);

export default router;
