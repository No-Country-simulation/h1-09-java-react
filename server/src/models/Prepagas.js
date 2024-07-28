import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Prepagas = sequelize.define('prepagas',{
  idPrepagas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  nro_afiliado: {
    type: DataTypes.INTEGER,
  },
  plan: {
    type: DataTypes.STRING,
  },
  fecha_vencimiento: {
    type: DataTypes.DATE,
  },
  idGenericUser: {
    type: DataTypes.INTEGER,
    references: {
      model: "genericUser",
      key: "idGenericUser",
    },
  },
});

export default Prepagas;