import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";
import {EstadoCita, MotivoConsulta, TipoConsulta} from "../interfaces/interfaces.js";

const Cita = sequelize.define("cita", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  tipoDeConsulta: {
    type: DataTypes.ENUM(...Object.values(TipoConsulta)),
    allowNull: false,
  },
  ubicacion: { // Si es presencial
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefono: { // Si es llamada
    type: DataTypes.STRING,
    allowNull: true,
  },
  meetLink: { // Si es videoconferencia
    type: DataTypes.STRING,
    allowNull: true,
  },
  motivo: {
    type: DataTypes.ENUM(...Object.values(MotivoConsulta)),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(...Object.values(EstadoCita)),
    allowNull: false,
  },
  comentarios: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
},
{
  sequelize,
  modelName: "cita",
  timestamps: true,
});

export default Cita;
