import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const GenericUser = sequelize.define("genericUser", {
  idGenericUser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default GenericUser;
