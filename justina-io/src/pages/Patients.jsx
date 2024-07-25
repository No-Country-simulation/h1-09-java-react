import React, { useState } from 'react';
import PhoneIcon from '../assets/PhoneIcon';
import MessageIcon from '../assets/MessageIcon';
import SuspensePoints from '../assets/SuspensePoints';
import InfoIcon from '../assets/InfoIcon';
import LayoutSidebar from '../layouts/layoutSidebar';
import CardWithDate from '../components/card/CardWithDate';
import Recipe from '../components/recipe/Recipe'; 
import PatientInfo from '../components/patientInfo/PatientInfo'; 
import './Patients.css';
import Statistics from '../components/molecules/Statistics';

function Patients() {
  const [activeSection, setActiveSection] = useState('Tratamiento');
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [isCardFlipped, setIsCardFlipped] = useState(false); // Estado para manejar el flip

  const handleCardClick = () => {
    setIsCardFlipped(!isCardFlipped); // Alterna entre la vista frontal y trasera
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Historial clinico':
        return <CardWithDate />;
      case 'Datos del paciente':
        return <PatientInfo />;
      case 'Tratamiento':
        return <Statistics />;
      default:
        return <div>Contenido de {activeSection}</div>;
    }
  };

  const handleOpenRecipeModal = () => {
    setIsRecipeModalOpen(true);
  };

  const handleCloseRecipeModal = () => {
    setIsRecipeModalOpen(false);
  };

  return (
    <LayoutSidebar>
      <section className="flex flex-col w-full gap-8 py-5 mt-10">
        <article className="flex justify-between">
          <h3 className="text-2xl font-semibold text-gray-700">
            Pacientes
            <span className="ms-5">{'>'} </span>
            <span className="font-normal ms-2">Hernan Velazco</span>
          </h3>
          <div className="flex gap-5 font-semibold me-5 text-[#007CA0] text-lg">
            <h3 className="cursor-pointer" onClick={handleOpenRecipeModal}>+ Agregar Receta</h3>
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

          {/* Tarjeta con animación de flip */}
          <div className="relative w-1/3 max-w-sm">
            <div
              className={`flip-card ${isCardFlipped ? 'flipped' : ''}`}
              onClick={handleCardClick}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front h-[120px] bg-[#007CA0] inline-flex items-center justify-between p-6 rounded-xl text-white/90">
                  <div className="flex flex-col justify-between h-full">
                    <h3 className="font-semibold">● Post - Transplante</h3>
                    <h4>Control bajo medicamentos</h4>
                  </div>
                  <InfoIcon />
                </div>
                <div className="flip-card-back h-[120px] bg-white p-6 border border-gray-200 rounded-xl shadow">
                  <div className="flex flex-col justify-between h-full">
                    <h3 className="text-[#007CA0] font-semibold">● Hernioplastia Inguinal</h3>
                    <h4 className="text-[#007CA0]">Fecha de la cirugía: 15 de febrero de 2024</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="w-full">
          <div className="font-semibold text-gray-700 border-b border-gray-300">
            <ul className="flex gap-8 ms-2">
              {['Tratamiento', 'Datos del paciente', 'Historial clinico'].map((section) => (
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

      {/* Mostrar el modal si isRecipeModalOpen es true */}
      {isRecipeModalOpen && <Recipe onClose={handleCloseRecipeModal} />}
    </LayoutSidebar>
  );
}

export default Patients;
