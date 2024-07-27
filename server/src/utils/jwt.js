import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default-secret";

export const generateToken = (data) => {
  return jwt.sign(data, JWT_SECRET, { expiresIn: "3h" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
