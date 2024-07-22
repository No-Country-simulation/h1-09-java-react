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

  pais: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  dni: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
