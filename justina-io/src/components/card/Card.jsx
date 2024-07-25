import React from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisH, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ photo, icon: Icon, name, date, showDownload }) => (
  <div className="w-full h-[64px] bg-white rounded-lg mb-4 shadow-lg flex items-center justify-between p-2">
    <Link to={`/pacientes/${name}`} className="flex items-center">
      <div className="w-12 h-12 mr-4 flex items-center justify-center">
        {photo ? (
          <img
            src={photo}
            alt={`Foto de ${name}`}
            className="w-12 h-12 rounded-full"
          />
        ) : (
          Icon && <Icon className="w-6 h-6 text-gray-700" />
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-lg text-black">{name}</span>
      </div>
    </Link>
    <div className="flex items-center">
      {showDownload && (
        <div className="flex items-center mr-6">
          {date && <span className="text-lg text-gray-500 mr-6">{date}</span>}
          <FaDownload className="text-gray-900 cursor-pointer" />
        </div>
      )}
      <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
        <FaEllipsisH className="text-gray-900 cursor-pointer" />
      </div>
    </div>
  </div>
);

Card.propTypes = {
  photo: PropTypes.string,
  icon: PropTypes.elementType,
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
  showDownload: PropTypes.bool,
};

Card.defaultProps = {
  photo: null,
  icon: null,
  date: '',
  showDownload: false,
};

export default Card;
