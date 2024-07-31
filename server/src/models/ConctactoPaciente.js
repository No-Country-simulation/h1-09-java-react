import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const ContactoPaciente = sequelize.define("Contacto", {
  idContactoPaciente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
});

export default ContactoPaciente;
