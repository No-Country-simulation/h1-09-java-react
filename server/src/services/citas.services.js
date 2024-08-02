import Cita from "../models/Citas.js";
import PersonalMedico from "../models/PersonalMedico.js";
import GenericUser from "../models/GenericUser.js";

const createCita = ( cita ) => {
    return Cita.create( cita );
}

const obtenerCitasPorMedicoPacienteService = (idMedico, idPaciente ) => {
    return Cita.findAll({
        where: {
            idPersonal_medico: idMedico,
            idGenericUser: idPaciente
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
                model: GenericUser,
                as: "genericUser"
            }
        ]
    });
}

const obtenerCitasPorPacienteService = (idPaciente) => {
    return Cita.findAll({
        where: {
            idGenericUser: idPaciente
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