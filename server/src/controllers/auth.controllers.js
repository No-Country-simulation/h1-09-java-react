import { createUser, getUserByEmail } from "../services/users.services";
import { generateToken } from "../utils/jwt";

export const register = async (req, res) => {
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
    const existingUser = await getUserByEmail();
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
      password,
    });
    const accessToken = generateToken(user);

    res.status(200).json({
      user,
      accessToken,
    });
  } catch (err) {
    return res.json(err);
  }
};
