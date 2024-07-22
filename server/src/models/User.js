import { DataTypes } from "sequelize";
import sequelize from "../database";

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default User;
