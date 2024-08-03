import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";
import Cita from "./Citas.js";
import ContactoPaciente from "./ConctactoPaciente.js";
import ContactoFamiliar from "./ContactoFamiliar.js";
import PersonalMedico from "./PersonalMedico.js";
import TipoDocumento from "./TipoDocumento.js";
import Tratamiento from "./Tratamiento.js";

const Paciente = sequelize.define("paciente", {
  idPaciente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  /*idCita: {
    type: DataTypes.INTEGER,
    references: {
      model: Cita,
      key: "idCita",
    },
  },*/
  idContactoPaciente: {
    type: DataTypes.INTEGER,
    references: {
      model: ContactoPaciente,
      key: "idContactoPaciente",
    },
  },
  idContacto_Familiar: {
    type: DataTypes.INTEGER,
    references: {
      model: ContactoFamiliar,
      key: "idContacto_Familiar",
    },
  },

  nombre: {
    type: DataTypes.STRING(20),
  },
  apellido: {
    type: DataTypes.STRING(15),
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
    type: DataTypes.STRING,
  },
  edad: {
    type: DataTypes.INTEGER,
  },
  peso: {
    type: DataTypes.INTEGER,
  },
  altura: {
    type: DataTypes.INTEGER,
  },
  genero: {
    type: DataTypes.STRING(10),
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
    type: DataTypes.STRING,
  },
  idPrepaga: {
    type: DataTypes.INTEGER,
    references: {
      model: "prepagas",
      key: "idPrepagas",
    },
  },
});

export default Paciente;
