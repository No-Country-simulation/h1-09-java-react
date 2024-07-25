import AgendaIcon from '../../assets/AgendaIcon';
import PacienteIcon from '../../assets/PacienteIcon';

function Card({ title, number, status, subNumber, icon, color, onClick }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow lg:min-w-80 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <h5 className="w-2/3 mb-2 text-xl font-semibold tracking-tight text-[#4D516F] dark:text-white">
            {title}
          </h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="relative py-1">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-700 dark:text-white">
            {number}
          </h5>
          <small
            className={`absolute font-bold ${status === '+' ? 'text-green-500' : 'text-red-500'} top-3 left-10`}
          >
            {status}
            {subNumber}
          </small>
        </div>
        <div className="flex items-center gap-3">
          <div className={`p-1.5 bg-${color}-300 rounded-full`}>
            {icon === 'Agenda' ? <AgendaIcon /> : <PacienteIcon />}
          </div>
          <p>{icon}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
