import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Especialidad from "./Especialidad.js";

const PersonalMedico = sequelize.define('personal_medico', {
  idPersonal_medico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.INTEGER
  },
  idEspecialidad: {
    type: DataTypes.INTEGER,
    references: {
      model: Especialidad,
      key: 'idEspecialidad'
    }
  }
});

export default PersonalMedico;