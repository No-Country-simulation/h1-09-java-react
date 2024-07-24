import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";
import Paciente from "./Paciente.js";
import PersonalMedico from "./PersonalMedico.js";

const Cita = sequelize.define("cita", {
  idCita: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idPaciente: {
    type: DataTypes.INTEGER,
    references: {
      model: Paciente,
      key: "idPaciente",
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  idPersonal_Medico: {
    type: DataTypes.INTEGER,
    references: {
      model: PersonalMedico,
      key: "idPersonal_Medico",
    },
  },
});

export default Cita;
