import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputField from '../components/atoms/InputField';
import PasswordInputField from '../components/atoms/PasswordInputField';
import EspecialidadField from '../components/atoms/EspecialidadField';
import EstadoCivilField from '../components/atoms/EstadoCivilField';
import ActionButton from '../components/atoms/ActionButton';
import { AiOutlineLeft } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';

const CheckIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-pattern min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto p-6 mt-20 md:mt-10 mb-8 md:mb-10">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap text-2xl text-black font-semibold leading-none tracking-tight">Registración de usuarios</h3>
        </div>
        <div className="p-6 space-y-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Nombre" id="nombre" placeholder="Ingrese su nombre" {...register('nombre', { required: 'Nombre requerido' })} />
              <InputField label="Apellido" id="apellido" placeholder="Ingrese su apellido" {...register('apellido', { required: 'Apellido requerido' })} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Teléfono" id="telefono" placeholder="Ingrese su teléfono" {...register('telefono')} />
              <InputField label="N° Matrícula" id="matricula" placeholder="Ingrese su número de matrícula" {...register('matricula')} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <EspecialidadField label="Especialidad" id="especialidad" placeholder="Seleccione una opción..." {...register('especialidad')} />
              <EstadoCivilField label="Estado Civil" id="estado-civil" placeholder="Seleccione una opción..." {...register('estadoCivil')} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Email" id="email" placeholder="Ingrese su email" type="email" {...register('email', { required: 'Email requerido', pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
              <InputField label="Confirmar Email" id="confirmar-email" placeholder="Confirme su email" type="email" {...register('confirmarEmail', { required: 'Confirmar Email requerido', pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PasswordInputField label="Contraseña" id="contrasena" placeholder="Ingrese su contraseña" {...register('contrasena', { required: 'Contraseña requerida', minLength: { value: 6, message: 'Mínimo 6 caracteres' } })} />
              <PasswordInputField label="Confirmar Contraseña" id="confirmar-contrasena" placeholder="Confirme su contraseña" {...register('confirmarContrasena', { required: 'Confirmar Contraseña requerida', minLength: { value: 6, message: 'Mínimo 6 caracteres' } })} />
            </div>
            {Object.keys(errors).length > 0 &&
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                {Object.values(errors).map((error, index) => (
                  <p key={index}>{error.message}</p>
                ))}
              </div>
            }
            <div className="items-center p-6 flex justify-between">
              <Link to="/login">
                <ActionButton text={<><AiOutlineLeft className="mr-2" />Volver</>} className="bg-gray-300 text-black hover:bg-gray-400 h-10 px-6 md:px-8 py-2 mr-4" />
              </Link>
              <ActionButton text={<><FaUserPlus className="mr-2" />Registrar</>} className="bg-purple-600 text-white hover:bg-primary/90 h-10 px-6 md:px-8 py-2" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;