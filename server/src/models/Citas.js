import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";
import Paciente from "./Paciente.js";

const Cita = sequelize.define("citas", {
  idCita: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idPaciente: {
    type: DataTypes.INTEGER,
    references: {
      model: Paciente,
      key: "idPaciente",
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
  },
});

export default Cita;
