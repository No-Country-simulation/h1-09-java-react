import bcrypt from "bcrypt";
import GenericUser from "../models/GenericUser.js";
import Prepagas from "../models/Prepagas.js";

export const createUser = async ({ email, password, ciudad, edad, peso, grupo_sanguineo, genero, altura, alergias, telefono, direccion, contacto_familiar_telefono, contacto_familiar_relacion, nombre, nro_afiliado, plan, fecha_vencimiento }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await GenericUser.create({
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
    idGenericUser: user.idGenericUser
  })

  return {
    user,
    prepaga
  }
}

export async function getGenericUserByEmail(email) {
  return GenericUser.findOne({
    where: {
      email: email,
    },
  });
}