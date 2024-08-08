import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";

const Laboratorio = sequelize.define('laboratorio', {
  idLaboratorio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.INTEGER,
  }
});

export default Laboratorio;