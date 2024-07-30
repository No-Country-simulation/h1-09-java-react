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
      model: "prepagas",
      key: "idPrepagas",
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
    },
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  n_de_documento: {
    type: DataTypes.INTEGER,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
  },
  sexo: {
    type: DataTypes.STRING,
  },
  factor_sanguineo: {
    type: DataTypes.STRING,
    allowNull: false,
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
    type: DataTypes.STRING,
    defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  },
});

export default Paciente;
