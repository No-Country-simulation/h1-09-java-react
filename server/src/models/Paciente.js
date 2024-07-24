import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";
import Cita from "./Citas.js";
import PersonalMedico from "./PersonalMedico.js";
import TipoDocumento from "./TipoDocumento.js";
import Tratamiento from "./Tratamiento.js";

const Paciente = sequelize.define("paciente", {
  idPaciente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  idEntidades: {
    type: DataTypes.INTEGER,
    references: {
      model: "entidades",
      key: "idEntidades",
    },
  },
  idPrepagas: {
    type: DataTypes.INTEGER,
    references: {
      model: "financiadores",
      key: "idFinanciadores",
    },
  },
  idTratamiento: {
    type: DataTypes.INTEGER,
    references: {
      model: Tratamiento,
      key: "idTratamiento",
    },
  },
  idPersonal_medico: {
    type: DataTypes.INTEGER,
    references: {
      model: PersonalMedico,
      key: "idPersonal_medico",
    },
  },
  idPatologias: {
    type: DataTypes.INTEGER,
    references: {
      model: "patologias",
      key: "idPatologias",
    },
  },
  idTipo_Documento: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoDocumento,
      key: "idTipo_Documento",
    },
  },
  idCita: {
    type: DataTypes.INTEGER,
    references: {
      model: Cita,
      key: "idCita",
    },
  },
  nombre: {
    type: DataTypes.STRING(20),
  },
  apellido: {
    type: DataTypes.STRING(15),
  },
  n_de_documento: {
    type: DataTypes.INTEGER,
  },
  fecha_nacimiento: {
    type: DataTypes.INTEGER,
  },
  sexo: {
    type: DataTypes.INTEGER,
  },
  factor_sanguineo: {
    type: DataTypes.INTEGER,
  },
});

export default Paciente;
