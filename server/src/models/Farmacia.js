import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Medicamento from "./Medicamento.js";
import Laboratorio from "./Laboratorio.js";

const Farmacia = sequelize.define('farmacia', {
  idFarmacia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idMedicamento: {
    type: DataTypes.INTEGER,
    references: {
      model: Medicamento,
      key: 'idMedicamento'
    }
  },
  idLaboratorio: {
    type: DataTypes.INTEGER,
    references: {
      model: Laboratorio,
      key: 'idLaboratorio'
    }
  }
})

export default Farmacia;