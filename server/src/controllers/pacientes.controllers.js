import Paciente from "../models/Paciente.js";

export const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ err: "Error al obtener los pacientes " });
  }
};

export const obtenerPacientesById = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ err: "Paciente no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ err: "Error al obtener al paciente" });
  }
};
