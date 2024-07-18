import bcrypt from "bcrypt";
import { User } from "../models/User";
import { generateToken } from "../services/auth.services";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = generateToken();
    res.status(201).json(newUser, token);
  } catch (err) {
    res.status(500).json({ message: "Error al crear el usuario " });
  }
};
