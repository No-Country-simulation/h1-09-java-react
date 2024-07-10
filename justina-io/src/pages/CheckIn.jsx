import React from 'react';
import InputField from '../components/atoms/InputField';
import PasswordInputField from '../components/atoms/PasswordInputField';
import EspecialidadField from '../components/atoms/EspecialidadField';
import EstadoCivilField from '../components/atoms/EstadoCivilField';
import ActionButton from '../components/atoms/ActionButton';
import { AiOutlineLeft } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';

const CheckIn = () => {
  return (
    <div className="bg-white rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto p-6 mt-20 md:mt-10">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl text-black font-semibold leading-none tracking-tight">Registración de usuarios</h3>
      </div>
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Nombre" id="nombre" placeholder="Ingrese su nombre" />
          <InputField label="Apellido" id="apellido" placeholder="Ingrese su apellido" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Teléfono" id="telefono" placeholder="Ingrese su teléfono" />
          <InputField label="N° Matrícula" id="matricula" placeholder="Ingrese su número de matrícula" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EspecialidadField label="Especialidad" id="especialidad" placeholder="Seleccione una opción..." />
          <EstadoCivilField label="Estado Civil" id="estado-civil" placeholder="Seleccione una opción..." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Email" id="email" placeholder="Ingrese su email" type="email" />
          <InputField label="Confirmar Email" id="confirmar-email" placeholder="Confirme su email" type="email" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PasswordInputField label="Contraseña" id="contrasena" placeholder="Ingrese su contraseña" />
          <PasswordInputField label="Confirmar Contraseña" id="confirmar-contrasena" placeholder="Confirme su contraseña" />
        </div>
      </div>
      <div className="items-center p-6 flex justify-between">
        <ActionButton  text={<><AiOutlineLeft className="mr-2" />Volver</>} className="bg-gray-300 text-black hover:bg-gray-400 h-10 px-6 md:px-8 py-2" />
        <ActionButton text={<><FaUserPlus className="mr-2" />Registrar</>} className="bg-purple-600 text-white hover:bg-primary/90 h-10 px-6 md:px-8 py-2" />
      </div>
    </div>
  );
}

export default CheckIn;