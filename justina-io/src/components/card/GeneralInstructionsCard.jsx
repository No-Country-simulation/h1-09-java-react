function GeneralInstructionsCard({ instrucciones }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Instrucciones generales de seguimiento
      </h2>
      <ul className="space-y-2">
        {instrucciones.map((instruccion, index) => (
          <li key={index} className="flex items-start">
            <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
            <span className="text-gray-700">{instruccion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GeneralInstructionsCard;
