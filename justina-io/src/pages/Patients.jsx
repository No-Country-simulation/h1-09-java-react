import React, { useState } from 'react';
import PhoneIcon from '../assets/PhoneIcon';
import MessageIcon from '../assets/MessageIcon';
import SuspensePoints from '../assets/SuspensePoints';
import InfoIcon from '../assets/InfoIcon';
import LayoutSidebar from '../layouts/layoutSidebar';
import CardWithDate from '../components/card/CardWithDate';
import './Patients.css'; // Asegúrate de importar el archivo CSS

function Patients() {
  const [activeSection, setActiveSection] = useState('Tratamiento');

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Historial clinico':
        return <CardWithDate />;
      // Agrega los demás casos según las secciones
      default:
        return <div>Contenido de {activeSection}</div>;
    }
  };

  return (
    <LayoutSidebar>
      <div className="flex">
        <section className="flex flex-col w-4/5 gap-8 p-5 mt-20">
          <article className="flex justify-between">
            <h3 className="text-2xl font-semibold text-gray-700">
              Pacientes
              <span className="ms-5">{'>'} </span>
              <span className="font-normal ms-2">Hernan Velazco</span>
            </h3>
            <div className="flex gap-5 font-semibold me-5 text-[#007CA0] text-lg">
              <h3 className="cursor-pointer">+ Agregar Receta</h3>
              <h3 className="cursor-pointer">+ Agregar Cita</h3>
            </div>
          </article>
          <article className="flex gap-5">
            <div className="inline-flex items-center justify-between w-2/3 p-5 bg-white rounded-xl">
              <div className="flex gap-5">
                <span>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="/img/image9.png" alt="Profile" />
                    </div>
                  </div>
                </span>
                <span>
                  <h3 className="font-semibold">Hernan Velazco</h3>
                  <h5 className="text-gray-500 underline cursor-pointer">
                    hernanvelazco@gmail.com
                  </h5>
                </span>
              </div>
              <div className="inline-flex gap-3 text-white">
                <span className="bg-[#007CA0] rounded-full p-1 cursor-pointer">
                  <MessageIcon />
                </span>
                <span className="bg-[#007CA0] rounded-full p-1 cursor-pointer">
                  <PhoneIcon />
                </span>
                <span className="bg-[#007CA0] rounded-full p-1 cursor-pointer">
                  <SuspensePoints />
                </span>
              </div>
            </div>
            <div className="bg-[#007CA0] w-1/3 inline-flex items-center justify-between max-w-sm px-7 py-3 rounded-xl text-white/90">
              <div className="flex flex-col justify-between h-full">
                <h3 className="font-semibold">● Post - Transplante</h3>
                <h4>Control bajo medicamentos</h4>
              </div>
              <InfoIcon />
            </div>
          </article>
          <article className="w-full p-2">
            <div className="pb-2 font-semibold text-gray-700 border-b border-gray-300">
              <ul className="flex gap-8 ms-2">
                {['Tratamiento', 'Citas', 'Datos del paciente', 'Historial clinico'].map((section) => (
                  <li
                    key={section}
                    className={`nav-item ${activeSection === section ? 'active' : ''}`}
                    onClick={() => setActiveSection(section)}
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <article className="w-full p-2">
            {renderSectionContent()}
          </article>
        </section>
      </div>
    </LayoutSidebar>
  );
}

export default Patients;
