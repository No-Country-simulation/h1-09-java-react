import { createUser, getUserByEmail } from "../services/users.services.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  try {
    const { email, password, nombre, apellido, telefono, estado_civil, especialidad, nro_matricula } = req.body;
    if (!email || !password) {
      res.status(400);
      throw {
        code: 400,
        message: "Debes ingresar email o contraseña",
        data: null,
      };
    }
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      res.status(400);
      throw {
        code: 400,
        message: "El email ya se encuentra registrado",
        data: null,
      };
    }
    
    const user = await createUser({
      email,
      password, nombre, apellido, telefono, estado_civil, especialidad, nro_matricula
    });
    const accessToken = generateToken(user);

    return res.status(200).json({
      user,
      accessToken,
    });
  } catch (err) {
    return res.json(err);
  }
};
