import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const ContactoFamiliar = sequelize.define("ContactoFamiliar", {
  idContacto_Familiar: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  relacion: {
    type: DataTypes.STRING,
  },
});

export default ContactoFamiliar;
