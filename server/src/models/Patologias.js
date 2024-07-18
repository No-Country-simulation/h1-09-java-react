import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Especialidad from "./Especialidad.js";

const Patologias = sequelize.define('patologias', {
  idPatologias: {
    type: DataTypes.INTEGER,
    primaryKey: true
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

export default Patologias;