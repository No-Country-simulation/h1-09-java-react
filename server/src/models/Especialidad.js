import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";

const Especialidad = sequelize.define('especialidad', {
  idEspecialidad: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  tipo: {
    type: DataTypes.INTEGER
  }
});

export default Especialidad;