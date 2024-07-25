import bcrypt from "bcrypt";
import User from "../models/User.js";
import PersonalMedico from "../models/PersonalMedico.js";

export async function getUserByEmail(email) {
  return User.findOne({
    where: {
      email: email,
    },
  });
}

export async function createUser({ email, password, nombre, apellido, telefono, estado_civil, especialidad, nro_matricula }) {console.log(email, password)
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = User.create({
    email,
    password: hashedPassword,
    nombre,
    apellido,
    telefono,
    estado_civil: estado_civil.toLowerCase(),
    especialidad,
    nro_matricula
  })
  PersonalMedico.create({
    idPersonalMedico: await user?.id
  })
  
  return user;
}
