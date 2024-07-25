import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";

const Entidades = sequelize.define('entidades', {
  idEntidades: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.INTEGER
  }
});

export default Entidades;