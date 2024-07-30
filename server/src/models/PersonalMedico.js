import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import Especialidad from "./Especialidad.js";

const PersonalMedico = sequelize.define('personal_medico', {
  idPersonal_medico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado_civil: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especialidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nro_matricula: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profile_picture: {
    type: DataTypes.STRING,
    defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  },
  descripcion: {
    type: DataTypes.STRING
  },
  idEspecialidad: {
    type: DataTypes.INTEGER,
    references: {
      model: Especialidad,
      key: 'idEspecialidad'
    }
  }
});

export default PersonalMedico;