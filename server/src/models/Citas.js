import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Cita = sequelize.define("cita", {
  idCita: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idPaciente: {
    type: DataTypes.INTEGER,
    references: {
      model: "paciente",
      key: "idPaciente",
    },
    idPersonal_Medico: {
      type: DataTypes.INTEGER,
      references: {
        model: "PersonalMedico",
        key: "idPersonal_Medico",
      },
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
});

export default Cita;
