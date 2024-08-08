import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";

const TipoDocumento = sequelize.define('tipo_documento',{
  idTipo_Documento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING(30)
  }
})

export default TipoDocumento;