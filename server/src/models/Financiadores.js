import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";
import PersonalMedico from "./PersonalMedico.js";

const Financiadores = sequelize.define("financiadores", {
  idFinanciadores: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.INTEGER,
  },
  idPersonal_medico: {
    type: DataTypes.INTEGER,
    references: {
      model: PersonalMedico,
      key: "idPersonal_medico",
    },
  },
  nombrePrepaga: {
    type: DataTypes.STRING,
  },
  nroAfiliado: {
    type: DataTypes.INTEGER,
  },
  plan: {
    type: DataTypes.STRING,
  },
  fechaVencimiento: {
    type: DataTypes.STRING,
  },
});

export default Financiadores;
