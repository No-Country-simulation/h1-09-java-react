import Paciente from "../models/Paciente.js";
import {createUser, getGenericUserByEmail} from "../services/genericUser.services.js";
import GenericUser from "../models/GenericUser.js";
import bcrypt from "bcrypt";
import {generateToken} from "../utils/jwt.js";
import cloudinary from "../utils/cloudinary.js";

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

export const register = async (req, res) => {
  try {
    const data = req.body;
    const user = await createUser(data);
    return res.status(200).json({ status: 'success', message: 'Usuario creado', data: user })
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const data  = req.body;

    if (data === undefined || Object.keys(data).length === 0 || data === null) return res.status(400).json({ message: "Se necesita un valor" });

    await GenericUser.update(data,
        {
          where: {
            idGenericUser: req.user.idGenericUser
          }
        }
    )

    return res.status(200).json({ status: 'success', message: 'Perfil actualizado'});
  } catch (error) {
    return res.status(400).json({ status: 'failed', message: error.message })
  }
};

export const login = async (req, res) => {
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

    const user = await getGenericUserByEmail(email);
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
    return res.json(err);
  }
};

export const updatePatientProfileImage = async (req, res) => {
  try {
    let secure_url;
    if (!req.file) return res.status(400).send("Por favor seleccione una imagen para subir");

    const imageFile = req.file;
    const { buffer } = imageFile;

    cloudinary.uploader.upload_stream(async (error, result) => {
      if (error) throw error;

      secure_url = result.secure_url;
      await GenericUser.update({
        profile_picture: secure_url
      }, {
        where: {
          idGenericUser: req.user.idGenericUser
        }
      })
    }).end(buffer);

    return res.status(200).json({ message: "Foto de perfial actualizada" })
  } catch (error) {
    return res.status(400).json({ status: 'failed', message: error.message });
  }
};