import React, { useState } from 'react';
import { FaTimes, FaCoffee, FaUtensils, FaMoon, FaBed, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const Recipe = ({ onClose }) => {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="max-w-[830px] h-[790px] bg-white p-8 rounded-lg shadow-lg flex flex-col relative">
        <div className="pb-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <img src="/favicon.ico" alt="Favicon" className="w-10 mr-4" />
            <img src="/logo.webp" alt="Justina.io Logo" className="w-32" />
            <h1 className="text-[16px] font-bold text-center flex-grow">Receta Médica Digital</h1>
            <div className="flex items-center justify-center bg-gray-200 rounded-full p-2" onClick={onClose}>
              <FaTimes className="text-black cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm mt-14">
            <div>
              <div className="flex justify-between">
                <span className="text-base">Fecha de emisión: 11/07/2024 11:06</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base">Nro de hoja de medicación: 196665221</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="text-base">Emitida por: Carlos Benitez</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base">Teléfono: 913221544</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="text-base">Centro: C.S. Corazonlandia</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base">LIC titular: 1604033112F</span>
              </div>
            </div>
          </div>
          <div className="border-b my-4"></div>
          <div className="flex justify-between col-span-3 text-base">
            <span>Paciente: Hernan Velazco</span>
            <span className="ml-4">Nro de hoja de medicación: 196665221</span>
            <span className="ml-4">F. Nac.: 25/02/1998</span>
          </div>
        </div>
        <div className="mb-4 mt-9 flex-grow">
          <div className="flex">
            <div className="border border-gray-300 p-4 w-[322px] h-[67px]">
              <p className="text-center">Fármacos</p>
            </div>
            <div className="border border-gray-300 w-[444px] h-[67px] grid grid-cols-6">
              <div className="flex flex-col items-center justify-center h-full border">
                Desayuno
                <FaCoffee className="text-gray-500 mb-1" />
              </div>
              <div className="flex flex-col items-center justify-center h-full border">
                Almuerzo
                <FaUtensils className="text-gray-500 mb-1" />
              </div>
              <div className="flex flex-col items-center justify-center h-full border">
                Cena
                <FaBed className="text-gray-500 mb-1" />
              </div>
              <div className="flex flex-col items-center justify-center h-full border">
                Al dormir 
                <FaMoon className="text-gray-500 mb-1" />
              </div>
              <div className="flex items-center justify-center h-full border">
                <span className="text-gray-700">Fecha Inicial</span>
              </div>
              <div className="flex items-center justify-center h-full border">
                <span className="text-gray-700">Fecha Final</span>
              </div>
            </div>
          </div>
          <div className="flex relative">
            <div className="border border-blue-500 p-4 w-[322px] h-[67px]">
              <input type="text" className="w-full h-full" placeholder="" />
            </div>
            <div className="border border-gray-300 p-0 w-[444px] h-[67px] flex flex-col">
              <div className="flex-grow bg-white flex">
                <div className="flex-1 border flex items-center justify-center">
                  <input type="text" className="w-full h-full text-center border border-gray-300 focus:border-[#007CA0] focus:outline-none" placeholder="" />
                </div>
                <div className="flex-1 border flex items-center justify-center">
                  <input type="text" className="w-full h-full text-center border border-gray-300 focus:border-[#007CA0] focus:outline-none" placeholder="" />
                </div>
                <div className="flex-1 border flex items-center justify-center">
                  <input type="text" className="w-full h-full text-center border border-gray-300 focus:border-[#007CA0] focus:outline-none" placeholder="" />
                </div>
                <div className="flex-1 border flex items-center justify-center relative">
                  <span className="absolute left-1/2 transform -translate-x-1/2">{value}</span>
                  <button
                    className="absolute top-1/2 transform -translate-y-1/2 left-2 p-1 bg-[#CCF3FF] text-[#007CA0] rounded-full"
                    onClick={handleDecrement}
                  >
                    <FaMinus />
                  </button>
                  <button
                    className="absolute top-1/2 transform -translate-y-1/2 right-2 p-1 bg-[#CCF3FF] text-[#007CA0] rounded-full"
                    onClick={handleIncrement}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="flex-1 border flex items-center justify-center text-gray-700">
                  <input type="text" className="w-full h-full text-center border border-gray-300 focus:border-[#007CA0] focus:outline-none" placeholder="19/06/24" />
                </div>
                <div className="flex-1 border flex items-center justify-center">
                  <input type="text" className="w-full h-full text-center border border-gray-300 focus:border-[#007CA0] focus:outline-none" placeholder="" />
                </div>
              </div>
              <div className="flex-grow border">
                <input type="text" className="w-full h-full text-center border border-gray-300 focus:border-[#007CA0] focus:outline-none" placeholder="Agregar otras indicaciones" />
              </div>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#FFCCEA] text-[#D0298A] p-2 rounded-full cursor-pointer -mr-8">
              <FaTrash />
            </div>
          </div>
          <button className="text-[#007CA0] mt-9">+ Agregar fármaco</button>
        </div>
        <div className="flex justify-end mt-auto mb-4">
          <button className="mr-2 bg-[#CCF3FF] text-[#007CA0] p-2 rounded hover:bg-[#A8E1FF] hover:text-[#005A8D]" onClick={onClose}>Cancelar</button>
          <button className="bg-[#007CA0] text-[#CCF3FF] p-2 rounded hover:bg-[#005A8D] hover:text-[#A8E1FF]">Subir receta</button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;