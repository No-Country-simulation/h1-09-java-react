import React from 'react';
import { FaHospital } from 'react-icons/fa';

const Calendar = () => {
  return (
    <div className="w-[688px] h-[430px] mt-12 bg-white p-4 rounded-lg border border-gray-200 shadow-md ml-96 flex items-center justify-center">
      <div className="flex">
        <div className="w-[132px] h-[401px] bg-white rounded-lg shadow mr-4 p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4 whitespace-nowrap">Agosto 2024</h2>
          <div className="flex flex-col items-start space-y-9">
            <div className="flex items-center space-x-2 mt-5">
              <span className="text-md font-semibold">29</span>
              <span className="text-md text-slate-400">jueves</span>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              <span className="text-md font-semibold">30</span>
              <span className="text-md text-slate-400">Viernes</span>
            </div>
          </div>
        </div>
        <div className="w-[499px] h-[342px] bg-white rounded-lg shadow p-4 flex items-center justify-center mt-9">
          <div className="w-full overflow-hidden flex flex-col items-center justify-center">
            <div className="w-[483px] bg-white border rounded-lg mb-4 p-2">
              <div className="flex items-center space-x-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Foto" className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <p className="font-semibold">Consulta con Mateo Fernandez</p>
                  <p className="text-slate-400">8:00 - 10:00</p>
                </div>
              </div>
            </div>
            <div className="w-[483px] bg-white border rounded-lg mb-4 p-2">
              <div className="flex items-center space-x-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Foto" className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <p className="font-semibold">Seguimiento con Ana Rodriguez</p>
                  <p className="text-slate-400">8:00 - 10:00</p>
                </div>
              </div>
            </div>
            <div className="w-[483px] bg-white border rounded-lg mb-4 p-2">
              <div className="flex items-center space-x-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Foto" className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <p className="font-semibold">Consulta con Hernan Velazco</p>
                  <p className="text-slate-400">10:30 - 11:00</p>
                </div>
              </div>
            </div>
            <div className="w-[483px] bg-white border rounded-lg p-2">
              <div className="flex items-center space-x-2">
                <FaHospital className="w-12 h-12 text-slate-400 mr-4"/>
                <div>
                  <p className="font-semibold">Reunión con Equipo Médico HUA</p>
                  <p className="text-slate-400">13:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
