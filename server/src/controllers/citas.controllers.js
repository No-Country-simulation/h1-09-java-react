import Cita from "../models/Citas.js";

export const obtenerCitas = async (req, res) => {
  try {
    const citas = await Cita.findAll();
    res.json(citas);
  } catch (err) {
    res.status(500).json({ err: "Error al obtener las citas" });
  }
};

export const crearCita = async (req, res) => {
  try {
    const nuevaCita = await Cita.create(req.body);
    res.status(201).json(nuevaCita);
  } catch (err) {
    res.status(500).json({ err: "Error al crear nueva cita" });
  }
};

export const eliminarCita = async (req, res) => {
  try {
    const borrarCita = await Cita.findByPk(req.params.id);
    if (borrarCita) {
      await borrarCita.destroy();
      res.status(204).json({ message: "Cita eliminada" });
    } else {
      res.status(404).json({ message: "Cita no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error al encontrar la cita" });
  }
};
