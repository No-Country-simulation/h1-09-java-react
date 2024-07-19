import { FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardPatients = () => {
  const names = [
    'Mateo Fernandez',
    'Lucas García',
    'Sofía Rodríguez',
    'Hernan Velazco',
    'Valentina Gómez',
    'Martina Sánchez',
    'Pedro Rodriguez',
    'Ana Torres',
    'Diego Vargas',
  ];

  const photos = [
    'img/image6.png',
    'img/frame5.png',
    'img/image1.png',
    'img/image9.png',
    'img/frame29.png',
    'img/image3.png',
    'img/image6.png',
    'img/frame5.png',
    'img/frame29.png',
  ];

  return (
    <div className="h-[952px] mx-auto p-4">
      {names.map((name, index) => (
        <div
          key={index}
          className="h-[72px] bg-white rounded-lg mb-4 shadow-lg flex items-center justify-between p-2"
        >
          <Link to={`/pacientes/${name}`} className="flex items-center">
            <img
              src={photos[index]}
              alt={`Foto de ${name}`}
              className="w-12 h-12 mr-4 rounded-full"
            />
            <span className="text-lg text-black">{name}</span>
          </Link>
          <div className="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 rounded-full">
            <FaEllipsisH className="text-gray-900 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPatients;
