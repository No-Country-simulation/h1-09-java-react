function Carrusel() {
  return (
    <>
      <div className="w-full carousel">
        <div id="item1" className="w-full carousel-item">
          <div className="flex justify-around w-full">
            <div className="flex flex-col">
              <span>Dia 2</span>
              <h3>Num</h3>
              <p>Julio</p>
            </div>
            <div className="flex flex-col">
              <span>hora</span>
              <h3>Nombre de usuario</h3>
              <p>Hospital designado</p>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="avatar placeholder">
                <div className="w-8 rounded-full bg-neutral text-neutral-content">
                  <span className="text-xs">UI</span>
                </div>
              </div>
              <div className="p-2 text-black bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="w-full carousel-item">
          <div className="flex justify-around w-full">
            <div className="flex flex-col">
              <span>Dia</span>
              <h3>Num</h3>
              <p>Agosto</p>
            </div>
            <div className="flex flex-col">
              <span>hora</span>
              <h3>Nombre de usuario</h3>
              <p>Hospital designado</p>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="avatar placeholder">
                <div className="w-8 rounded-full bg-neutral text-neutral-content">
                  <span className="text-xs">UI</span>
                </div>
              </div>
              <div className="p-2 text-black bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full gap-2 py-2">
        <a href="#item1" className="btn btn-xs btn-circle btn-outline">
          <div className="badge badge-default badge-xs"></div>
        </a>
        <a href="#item2" className="btn btn-xs btn-circle btn-outline">
          <div className="badge badge-default badge-xs"></div>
        </a>
        <a href="#item6" className="btn btn-xs btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-record2"
            viewBox="0 0 16 16"
          >
            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
            <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
          </svg>
        </a>
        <a href="#item3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-record2"
            viewBox="0 0 16 16"
          >
            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
            <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
          </svg>
        </a>
        <a href="#item4" className="">
          <div className="badge badge-default badge-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-record2"
              viewBox="0 0 16 16"
            >
              <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
              <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}

export default Carrusel;
