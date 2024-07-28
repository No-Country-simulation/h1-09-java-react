import Cita from "./Citas.js";
import Entidades from "./Entidades.js";
import Especialidad from "./Especialidad.js";
import Farmacia from "./Farmacia.js";
import Financiadores from "./Financiadores.js";
import GenericUser from "./GenericUser.js";
import Laboratorio from "./Laboratorio.js";
import Medicamento from "./Medicamento.js";
import Paciente from "./Paciente.js";
import Patologias from "./Patologias.js";
import PersonalMedico from "./PersonalMedico.js";
import TipoDocumento from "./TipoDocumento.js";
import Tratamiento from "./Tratamiento.js";

// PersonalMedico -> Especialidad
PersonalMedico.belongsTo(Especialidad, { foreignKey: "idEspecialidad" });
Especialidad.hasMany(PersonalMedico, { foreignKey: "idEspecialidad" });

// Paciente -> Entidades
Paciente.belongsTo(Entidades, { foreignKey: "idEntidades" });
Entidades.hasMany(Paciente, { foreignKey: "idEntidades" });

// Paciente -> Financieros
Paciente.belongsTo(Financiadores, { foreignKey: "idPrepagas" });
Financiadores.hasMany(Paciente, { foreignKey: "idPrepagas" });

// Paciente -> Tratamiento
Paciente.belongsTo(Tratamiento, { foreignKey: "idTratamiento" });
Tratamiento.hasMany(Paciente, { foreignKey: "idTratamiento" });

// Paciente -> Personal_medico
Paciente.belongsTo(PersonalMedico, { foreignKey: "idPersonal_medico" });
PersonalMedico.hasMany(Paciente, { foreignKey: "idPersonal_medico" });

// Paciente -> Patologias
Paciente.belongsTo(Patologias, { foreignKey: "idPatologias" });
Patologias.hasMany(Paciente, { foreignKey: "idPatologias" });

// Paciente -> TipoDocumento
Paciente.belongsTo(TipoDocumento, { foreignKey: "idTipo_Documento" });
TipoDocumento.hasMany(Paciente, { foreignKey: "idTipo_Documento" });

// Financieros -> Personal_medico
Financiadores.belongsTo(PersonalMedico, { foreignKey: "idPersonal_medico" });
PersonalMedico.hasMany(Financiadores, { foreignKey: "idPersonal_medico" });

// Tratamiento -> Patologias
Tratamiento.belongsTo(Patologias, { foreignKey: "idPatologias" });
Patologias.hasMany(Tratamiento, { foreignKey: "idPatologias" });

// Farmacia -> Medicamento
Farmacia.belongsTo(Medicamento, { foreignKey: "idMedicamento" });
Medicamento.hasMany(Farmacia, { foreignKey: "idMedicamento" });

// Farmacia -> Laboratorio
Farmacia.belongsTo(Laboratorio, { foreignKey: "idLaboratorio" });
Laboratorio.hasMany(Farmacia, { foreignKey: "idLaboratorio" });

// Medicamento -> Patologias
Medicamento.belongsTo(Patologias, { foreignKey: "idPatologias" });
Patologias.hasMany(Medicamento, { foreignKey: "idPatologias" });

// Medicamento -> Tratamiento
Medicamento.belongsTo(Tratamiento, { foreignKey: "idTratamiento" });
Tratamiento.hasMany(Medicamento, { foreignKey: "idTratamiento" });

// Medicamento -> Farmacia
Medicamento.belongsTo(Farmacia, { foreignKey: "idFarmacia" });
Farmacia.hasMany(Medicamento, { foreignKey: "idFarmacia" });
//Paciente --> Cita
Paciente.belongsTo(Cita, { foreignKey: "idCita", targetKey: "idCita" });
Cita.hasMany(Paciente, { foreignKey: "idCita", sourceKey: "idCita" });

//Cita --> GenericUser
Cita.belongsTo(GenericUser, {
  foreignKey: "idGenericUser",
  targetKey: "idGenericUser",
});
GenericUser.hasMany(Cita, {
  foreignKey: "idGenericUser",
});
