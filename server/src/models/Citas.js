import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";
import GenericUser from "./GenericUser.js";

const Cita = sequelize.define("cita", {
  idCita: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idGenericUser: {
    type: DataTypes.INTEGER,
    references: {
      model: GenericUser,
      key: "idGenericUser",
    },
  },
  idPersonal_Medico: {
    type: DataTypes.INTEGER,
    references: {
      model: "PersonalMedico",
      key: "idPersonal_Medico",
    },
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipoDeConsulta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  meetLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Cita;
