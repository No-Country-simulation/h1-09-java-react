import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const User = sequelize.define("user", {
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
    type: DataTypes.STRING
  }
},
{
  sequelize,
  modelName: "user",
  timestamps: true,
});

export default User;
