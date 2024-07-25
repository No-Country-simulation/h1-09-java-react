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
    unique: false,
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
  }
});

export default User;
