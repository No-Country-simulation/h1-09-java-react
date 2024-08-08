import { createUser, getUserByEmail } from "../services/users.services.js";
import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";

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
    
    const user = await getUserByEmail(email);
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
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none'
    }).json({
      code: 200,
      message: "success",
      data
    })
  } catch (err) {
    return res.json(err);
  }
};

export const logout = (req, res) => {
  return res.status(200).clearCookie('Authorization').json(
		{
			code: 200,
			message: 'Logged out',
			data: null
		}
	)
};
