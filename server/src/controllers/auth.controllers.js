import bcrypt from "bcrypt";
import { User } from "../models/User";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error al crear el usuario " });
  }
};
