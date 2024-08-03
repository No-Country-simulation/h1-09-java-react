import Paciente from "../models/Paciente.js";
import {createPaciente, getPacienteByEmail} from "../services/paciente.services.js";
import bcrypt from "bcrypt";
import {generateToken} from "../utils/jwt.js";
import cloudinary from "../utils/cloudinary.js";

export const obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.findAll();
    return res.status(200).json(pacientes);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const obtenerPacientesById = async (req, res, next) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (paciente) {
      return res.status(200).json(paciente);
    } else {
      return res.status(204).json({ err: "Paciente no encontrado" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const register = async (req, res, next) => {
  try {
    const data = req.body;
    const paciente = await createPaciente(data);
    return res.status(200).json({ status: 'success', message: 'Paciente creado', data: paciente })
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const data  = req.body;

    if (data === undefined || Object.keys(data).length === 0 || data === null) return res.status(400).json({ message: "Se necesita un valor" });

    await Paciente.update(data,
        {
          where: {
            idPaciente: req.user.idPaciente
          }
        }
    )

    return res.status(200).json({ status: 'success', message: 'Perfil actualizado'});
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw {
        code: 400,
        message: "Debes ingresar email o contraseña",
        data: null,
      };
    }

    const user = await getPacienteByEmail(email);
    if (!user) {
      res.status(400);
      throw {
        code: 400,
        message: "El email no corresponde a un usuario registrado",
        data: null,
      };
    }

    const validateUser = await bcrypt.compare(password, user.password);
    if (!validateUser) {
      res.status(400);
      throw {
        code: 400,
        message: "contraseña incorrecta",
        data: null,
      };
    }

    const { password: pwd, createdAt, updatedAt, ...data } = user.dataValues;
    const token = generateToken(data);
    return res.cookie('Authorization',
        token,
        {
          maxAge: 7200000, // 2hs
          httpOnly: true,
        }).json({
      code: 200,
      message: "success",
      data
    })
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updatePatientProfileImage = async (req, res, next) => {
  try {
    let secure_url;
    if (!req.file) return res.status(400).send("Por favor seleccione una imagen para subir");

    const imageFile = req.file;
    const { buffer } = imageFile;

    cloudinary.uploader.upload_stream(async (error, result) => {
      if (error) throw error;

      secure_url = result.secure_url;
      await Paciente.update({
        profile_picture: secure_url
      }, {
        where: {
          idPaciente: req.user.idPaciente
        }
      })
    }).end(buffer);

    return res.status(200).json({ message: "Foto de perfil actualizada" })
  } catch (error) {
    console.error(error);
    next(error);
  }
};