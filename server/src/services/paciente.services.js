import bcrypt from "bcrypt";
import GenericUser from "../models/GenericUser.js";
import Prepagas from "../models/Prepagas.js";
import Paciente from "../models/Paciente.js";

export const createPaciente = async ({ email, password, ciudad, edad, peso, grupo_sanguineo, genero, altura, alergias, telefono, direccion, contacto_familiar_telefono, contacto_familiar_relacion, nombre, nro_afiliado, plan, fecha_vencimiento }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const paciente = await Paciente.create({
    email,
    password: hashedPassword,
    ciudad,
    edad,
    peso,
    grupo_sanguineo,
    genero,
    altura,
    alergias,
    telefono,
    direccion,
    contacto_familiar_telefono,
    contacto_familiar_relacion
  });

  const prepaga = await Prepagas.create({
    nombre,
    nro_afiliado,
    plan,
    fecha_vencimiento,
    idGenericUser: paciente.idGenericUser
  })

  return {
    user: paciente,
    prepaga
  }
}

export async function getPacienteByEmail(email) {
  return Paciente.findOne({
    where: {
      email: email,
    },
  });
}