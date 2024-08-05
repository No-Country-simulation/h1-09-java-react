function GeneralInstructionsCard({ instrucciones }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[406px] h-[223px]">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Instrucciones generales de seguimiento
      </h2>
      <ul className="space-y-2">
        {instrucciones.map((instruccion, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
            <span className="text-gray-700">{instruccion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GeneralInstructionsCard;
