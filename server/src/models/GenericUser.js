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
  edad: {
    type: DataTypes.INTEGER,
  },
  peso: {
    type: DataTypes.INTEGER,
  },
  grupo_sanguineo: {
    type: DataTypes.STRING,
  },
  genero: {
    type: DataTypes.STRING,
  },
  altura: {
    type: DataTypes.STRING,
  },
  alergias: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.INTEGER,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  contacto_familiar_telefono: {
    type: DataTypes.INTEGER,
  },
  contacto_familiar_relacion: {
    type: DataTypes.STRING,
  },
  profile_picture: {
    type: DataTypes.STRING
  },
  idPrepaga: {
    type: DataTypes.INTEGER,
    references: {
      model: "prepagas",
      key: "idPrepagas"
    }
  }
});

export default GenericUser;
