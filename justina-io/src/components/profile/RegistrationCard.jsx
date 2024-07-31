import React from 'react'
import FlipCard from '../card/FlipCard';

const RegistrationCard = () => {
  return (
    <div className="relative w-1/3 max-w-sm float-end">
        <FlipCard
            frontTitle="● Número de Matrícula: 123456789"
            frontSubtitle="Fecha de Expiración: 01/01/2025"
        />
    </div>
  )
}

export default RegistrationCard;