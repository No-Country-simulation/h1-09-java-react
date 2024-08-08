function AssignedMedication({ medicaciones, instrucciones }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[868px] h-[223px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Medicación asignada
        </h2>
        <button className="flex items-center text-blue-500 hover:text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>
          Ver receta
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {medicaciones.map((med, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
          >
            {med}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {instrucciones.map((inst, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
          >
            {inst}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AssignedMedication;
