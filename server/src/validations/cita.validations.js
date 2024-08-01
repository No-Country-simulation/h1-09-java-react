import Joi from "joi";
import { TipoConsulta, MotivoConsulta, EstadoCita } from "../interfaces/interfaces.js";

const objectCreateCita = {
    idPersonal_medico:
        Joi.number()
            .integer()
            .positive()
            .required()
            .messages({
                'number.base': 'El id del medico debe ser un número entero positivo',
                'number.integer': 'El id del medico debe ser un número entero',
                'number.positive': 'El id del medico debe ser un número entero positivo',
                'any.required': 'El id del medico es un campo requerido'
            }),
    idGenericUser:
        Joi.number()
            .integer()
            .positive()
            .required()
            .messages({
                'number.base': 'El id del paciente debe ser un número entero positivo',
                'number.integer': 'El id del paciente debe ser un número entero',
                'number.positive': 'El id del paciente debe ser un número entero positivo',
                'any.required': 'El id del paciente es un campo requerido'
            }),
    tipoDeConsulta:
        Joi.string()
            .empty()
            .valid(...Object.values(TipoConsulta))
            .min(2)
            .required()
            .messages({
                'string.base': 'El tipo de consulta debe ser una cadena de texto',
                'string.empty': 'El tipo de consulta no puede estar vacío',
                'string.min': 'La longitud mínima del tipo de consulta es de {#limit} caracteres',
                'any.required': 'El tipo de consulta es un campo requerido',
                'any.only': `El tipo de consulta debe ser uno de los siguientes valores: ${Object.values(TipoConsulta).join(', ')}`
            }),
    ubicacion:
        Joi.string()
            .when('tipoDeConsulta', {
                is: TipoConsulta.PRESENCIAL,
                then: Joi.string().required().messages({
                    'string.empty': 'La ubicación no puede estar vacía para consultas presenciales',
                    'any.required': 'La ubicación es un campo requerido para consultas presenciales'
                }),
                otherwise: Joi.string().optional()
            }),
    telefono:
        Joi.string()
            .when('tipoDeConsulta', {
                is: TipoConsulta.LLAMADA,
                then: Joi.string().required().messages({
                    'string.empty': 'El teléfono no puede estar vacío para consultas por llamada',
                    'any.required': 'El teléfono es un campo requerido para consultas por llamada'
                }),
                otherwise: Joi.string().optional()
            }),
    meetLink:
        Joi.string()
            .when('tipoDeConsulta', {
                is: TipoConsulta.VIDEOCONFERENCIA,
                then: Joi.string().required().messages({
                    'string.empty': 'El enlace de la videoconferencia no puede estar vacío',
                    'any.required': 'El enlace de la videoconferencia es un campo requerido'
                }),
                otherwise: Joi.string().optional()
            }),
    motivo:
        Joi.string()
            .empty()
            .valid(...Object.values(MotivoConsulta))
            .min(2)
            .required()
            .messages({
                'string.base': 'El motivo de la consulta debe ser una cadena de texto',
                'string.empty': 'El motivo de la consulta no puede estar vacío',
                'string.min': 'La longitud mínima del motivo de la consulta es de {#limit} caracteres',
                'any.required': 'El motivo de la consulta es un campo requerido',
                'any.only': `El motivo de la consulta debe ser uno de los siguientes valores: ${Object.values(MotivoConsulta).join(', ')}`
            }),
    status:
        Joi.string()
            .empty()
            .valid(...Object.values(EstadoCita))
            .required()
            .min(2)
            .required()
            .messages({
                'string.base': 'El estatus de la consulta debe ser una cadena de texto',
                'string.empty': 'El estatus de la consulta no puede estar vacío',
                'string.min': 'La longitud mínima del estatus de la consulta es de {#limit} caracteres',
                'any.required': 'El estatus de la consulta es un campo requerido',
                'any.only': `El estatus de la consulta debe ser uno de los siguientes valores: ${Object.values(EstadoCita).join(', ')}`
            }),
    comentarios:
        Joi.string()
            .empty()
            .messages({
                'string.base': 'Los comentarios deben ser una cadena de texto',
                'string.empty': 'Los comentarios no pueden estar vacío'
            }),
};

const createCitaSchema = Joi.object(objectCreateCita).options({
    messages: {
        'object.unknown': 'El campo {#key} no esta permitido'
    }
});

export { createCitaSchema };