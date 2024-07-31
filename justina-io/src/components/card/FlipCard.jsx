import React from 'react';
import InfoIcon from '../../assets/InfoIcon';

const FlipCard = ({ frontTitle, frontSubtitle, backTitle, backSubtitle, isFlipped, onClick }) => {
  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front h-[120px] bg-[#007CA0] inline-flex items-center justify-between p-6 rounded-xl text-white/90">
          <div className="flex flex-col justify-between h-full">
            <h3 className="font-semibold">{frontTitle}</h3>
            <h4>{frontSubtitle}</h4>
          </div>
          <InfoIcon />
        </div>
        <div className="flip-card-back h-[120px] bg-white p-6 border border-gray-200 rounded-xl shadow">
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-[#007CA0] font-semibold">{backTitle}</h3>
            <h4 className="text-[#007CA0]">{backSubtitle}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;