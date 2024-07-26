import Paciente from "../models/Paciente.js";

export const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    return res.json(pacientes);
  } catch (err) {
    return res.status(500).json({ err: "Error al obtener los pacientes " });
  }
};

export const obtenerPacientesById = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (paciente) {
      return res.json(paciente);
    } else {
      return res.status(404).json({ err: "Paciente no encontrado" });
    }
  } catch (err) {
    return res.status(500).json({ err: "Error al obtener al paciente" });
  }
};
