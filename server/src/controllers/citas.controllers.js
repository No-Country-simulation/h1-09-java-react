import Cita from "../models/Citas.js";
import {
  createCita,
  obtenerCitasPorMedicoPacienteService,
  obtenerCitasPorMedicoService,
  obtenerCitasPorPacienteService
} from "../services/citas.services.js";

export const obtenerCitas = async (req, res) => {
  try {
    const citas = await Cita.findAll();
    return res.json(citas);
  } catch (err) {
    return res.status(500).json({ err: "Error al obtener las citas" });
  }
};

export const obtenerCitaById = async (req, res) => {
  try {
    const obtenerCita = await Cita.findByPk(req.params.id);
    if (obtenerCita) {
      return res.json(obtenerCita);
    } else {
      return res.status(404).json({ err: "Cita no encontrada" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Error al econtrar la cita " });
  }
};

export const eliminarCita = async (req, res) => {
  try {
    const borrarCita = await Cita.findByPk(req.params.id);
    if (borrarCita) {
      await borrarCita.destroy();
      return res.status(200).json({ message: "Cita eliminada con exito" });
    } else {
      return res.status(404).json({ message: "Cita no encontrada" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Error al encontrar la cita" });
  }
};

export const crearCita = async (req, res, next) => {
  try {
    const body = req.body;
    const nuevaCita = await createCita(body);

    return res.status(201).json({
      error: false,
      code: 201,
      message: "Cita creada exitosamente",
      data: nuevaCita
    })
  } catch (err) {
    next(err);
  }
};

export const obtenerCitasPorMedicoPaciente = async (req, res, next) => {
    try {
        const citas = await obtenerCitasPorMedicoPacienteService(req.params.idMedico, req.params.idPaciente);

      return res.status(201).json({
        error: false,
        code: 201,
        message: "Citas obtenidas exitosamente",
        data: citas
      })

    } catch (err) {
        next(err);
    }
}

export const obtenerCitasPorMedico = async (req, res, next) => {
  try {
    const citas = await obtenerCitasPorMedicoService(req.params.idMedico, );

    return res.status(201).json({
      error: false,
      code: 201,
      message: "Citas obtenidas exitosamente",
      data: citas
    })

  } catch (err) {
    next(err);
  }
}

export const obtenerCitasPorPaciente = async (req, res, next) => {
  try {
    const citas = await obtenerCitasPorPacienteService(req.params.idPaciente);

    return res.status(201).json({
      error: false,
      code: 201,
      message: "Citas obtenidas exitosamente",
      data: citas
    })

  } catch (err) {
    next(err);
  }
}
