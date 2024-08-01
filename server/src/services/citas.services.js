import Cita from "../models/Citas.js";

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
        }
    });
}

const obtenerCitasPorPacienteService = (idPaciente) => {
    return Cita.findAll({
        where: {
            idGenericUser: idPaciente
        }
    });
}

export {
    createCita,
    obtenerCitasPorMedicoPacienteService,
    obtenerCitasPorMedicoService,
    obtenerCitasPorPacienteService
};