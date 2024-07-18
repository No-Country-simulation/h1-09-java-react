import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";

const Tratamiento = sequelize.define('tratamiento', {
  idTratamiento: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  idPatologias: {
    type: DataTypes.INTEGER,
    references: {
      model: 'patologias',
      key: 'idPatologias'
    }
  }
})

export default Tratamiento;