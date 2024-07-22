import React from 'react';
import { IoClose } from 'react-icons/io5';
import Documentoplus from '../../assets/Documentoplus';

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[547px] h-[497px] rounded-lg p-6 relative">
        <button
          className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300"
          onClick={closeModal}
        >
          <IoClose size={24} />
        </button>
        <h2 className="text-[24px] font-bold mb-2">Subir archivo</h2>
        <p className="mb-6">Adjunte el archivo a continuación</p>
        <div className="w-[499px] h-[285px] border-2 border-dashed border-gray-400 flex flex-col items-center justify-center mb-6">
          <div className="relative mb-4">
            <Documentoplus />
          </div>
          <h3 className="text-lg font-semibold mb-2">Arrastre el archivo(s) aquí para cargarlo</h3>
          <p className="text-[16px] mb-1">Alternativamente, puede seleccionar el archivo</p>
          <p className="text-[16px] font-normal text-cyan-700 cursor-pointer">haciendo clic aquí</p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 text-[#007CA0] bg-[#CCF3FF] rounded hover:bg-[#B3E0F2] hover:text-[#005F73]"
            onClick={closeModal}
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-[#007CA0] text-white rounded hover:bg-[#005F73] hover:text-[#CCF3FF]">Subir archivo</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;