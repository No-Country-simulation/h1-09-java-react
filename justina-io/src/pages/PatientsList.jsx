import CardPatients from '../components/card/CardPatients';
import LayoutSidebar from '../layouts/layoutSidebar';

function PatientsList() {
  return (
    <LayoutSidebar>
      <div className="flex w-full md:items-end">
        <section className="w-full py-3 mt-10">
          <article className="flex items-center justify-between my-5">
            <h3 className="text-2xl font-semibold text-gray-700 ">Pacientes</h3>
            <h3 className="cursor-pointer font-semibold me-5 text-[#007CA0] text-lg">
              + Agregar Paciente
            </h3>
          </article>
          <article className="my-5">
            <ul className="flex gap-5 font-semibold text-gray-500">
              <li className="p-2 font-bold cursor-pointer bg-[#CCF3FF] text-[#007CA0] rounded-xl">
                Todos(96)
              </li>
              <li className="p-2 cursor-pointer">Estables</li>
              <li className="p-2 cursor-pointer">En Observacion</li>
              <li className="p-2 cursor-pointer">Criticos</li>
              <li className="p-2 cursor-pointer">Mejorando</li>
              <li className="p-2 cursor-pointer">Urgente</li>
              <li className="p-2 cursor-pointer">En tratamiento</li>
              <li className="p-2 cursor-pointer">Alta Medico</li>
            </ul>
          </article>
          <article className="flex gap-5">
            <div className="flex w-full">
              <label className="flex items-center w-full gap-2 input input-bordered">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Escribe para buscar"
                />
              </label>
            </div>
            <div className="flex items-center gap-3">
              <select className="max-w-xs select select-bordered">
                <option selected>Nuevos</option>
                <option>Viejos</option>
                <option>F</option>
              </select>
              <span className="items-center px-3 py-1 bg-white rounded-full select-bordered select">
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
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                  />
                </svg>
              </span>
            </div>
          </article>
          <article>
            <CardPatients />
          </article>
        </section>
      </div>
    </LayoutSidebar>
  );
}

export default PatientsList;
