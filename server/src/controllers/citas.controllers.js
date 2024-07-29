import Cita from "../models/Citas.js";

export const obtenerCitas = async (req, res) => {
  try {
    const citas = await Cita.findAll();
    return res.json(citas);
  } catch (err) {
    return res.status(500).json({ err: "Error al obtener las citas" });
  }
};

export const crearCita = async (req, res) => {
  try {
    const {
      idGenericUser,
      idPersonal_medico,
      fecha,
      hora,
      descripcion,
      tipoDeConsulta,
      ubicacion,
      meetLink,
    } = req.body;

    if (
      !idGenericUser ||
      !idPersonal_medico ||
      !fecha ||
      !hora ||
      !descripcion ||
      !tipoDeConsulta ||
      !ubicacion
    ) {
      return res.status(400).json({ err: "Faltan campos requeridos" });
    }

    const nuevaCita = await Cita.create({
      idGenericUser,
      idPersonal_medico,
      fecha,
      hora,
      descripcion,
      tipoDeConsulta,
      ubicacion,
      meetLink,
    });

    return res.status(201).json(nuevaCita);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Error al crear nueva cita" });
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
