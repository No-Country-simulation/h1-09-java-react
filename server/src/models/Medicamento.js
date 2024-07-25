import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Tratamiento from "./Tratamiento.js";

const Medicamento = sequelize.define('medicamento', {
  idMedicamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.INTEGER,
  },
  idPatologias: {
    type: DataTypes.INTEGER,
    references: {
      model: 'patologias',
      key: 'idPatologias'
    }
  },
  idTratamiento: {
    type: DataTypes.INTEGER,
    references: {
      model: Tratamiento,
      key: 'idTratamiento'
    }
  },
  idFarmacia: {
    type: DataTypes.INTEGER,
    references: {
      model: 'farmacia',
      key: 'idFarmacia'
    }
  }
});

export default Medicamento;