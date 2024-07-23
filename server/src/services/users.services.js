import bcrypt from "bcrypt";
import User from "../models/User.js";

export async function getUserByEmail() {
  return User.findOne({
    where: {
      email: email,
    },
  });
}

export async function createUser() {
  const hashedPassword = await bcrypt.hash(User.password, 10);
  return User.create({
    email: User.email,
    password: hashedPassword,
  });
}
