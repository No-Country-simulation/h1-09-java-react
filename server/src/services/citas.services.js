import Cita from "../models/Citas.js";
import PersonalMedico from "../models/PersonalMedico.js";
import GenericUser from "../models/GenericUser.js";
import Paciente from "../models/Paciente.js";

const createCita = ( cita ) => {
    return Cita.create( cita );
}

const obtenerCitasPorMedicoPacienteService = (idMedico, idPaciente ) => {
    return Cita.findAll({
        where: {
            idPaciente: idPaciente,
            idPersonal_medico: idMedico
        }
    });
}

const obtenerCitasPorMedicoService = (idMedico) => {
    return Cita.findAll({
        where: {
            idPersonal_medico: idMedico
        },
        include: [
            {
                model: Paciente,
                as: "paciente"
            }
        ]
    });
}

const obtenerCitasPorPacienteService = (idPaciente) => {
    return Cita.findAll({
        where: {
            idPaciente: idPaciente
        },
        include: [
            {
                model: PersonalMedico,
                as: "personal_medico"
            }
        ]
    });
}

export {
    createCita,
    obtenerCitasPorMedicoPacienteService,
    obtenerCitasPorMedicoService,
    obtenerCitasPorPacienteService
};