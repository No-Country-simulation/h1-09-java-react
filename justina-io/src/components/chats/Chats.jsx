import React from 'react';

const chatsData = [
  { id: 1, name: 'Mateo Fernandez', number: 3, active: true },
  { id: 2, name: 'Sofía Rodríguez', active: false },
  { id: 3, name: 'Hernan Velazco', active: true },
  { id: 4, name: 'Valentina Gómez', number: 2, active: false },
  { id: 5, name: 'Martina Sánchez', active: true },
  { id: 6, name: 'Lucas García', number: 3, active: false },
];

const photos = [
  'img/image6.png',
  'img/image1.png',
  'img/image9.png',
  'img/frame29.png',
  'img/image3.png',
  'img/frame5.png',
];

const Chats = () => {
  return (
    <div className="w-[344px] md:w-[688px] h-auto bg-white p-4 border rounded-lg">
      <h1 className="text-left text-xl mb-4">Chats</h1>
      {chatsData.map((chat, index) => (
        <div
          key={chat.id}
          className="w-full h-[72px] flex items-center mb-2 bg-white border border-gray-300 rounded-lg p-2"
        >
          <div className="relative">
            <img
              src={photos[index]}
              alt={chat.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div
              className={`absolute bottom-0 right-0 w-3 h-3 border-2 ${
                chat.active ? 'bg-green-500' : 'bg-red-500'
              } border-white rounded-full`}
              style={{ transform: 'translate(25%, 25%)' }}
            ></div>
          </div>
          <span className="flex-grow ml-4">{chat.name}</span>
          {chat.number && (
            <span
              className="w-6 h-6 flex items-center justify-center bg-[#007CA0] text-white rounded-full"
            >
              {chat.number}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chats;
