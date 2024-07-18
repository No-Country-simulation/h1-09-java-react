import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import PersonalMedico from "./PersonalMedico.js";

const Financiadores = sequelize.define('financiadores', {
  idFinanciadores: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  descripcion: {
    type: DataTypes.INTEGER
  },
  idPersonal_medico: {
    type: DataTypes.INTEGER,
    references: {
      model: PersonalMedico,
      key: 'idPersonal_medico'
    }
  }
});

export default Financiadores;