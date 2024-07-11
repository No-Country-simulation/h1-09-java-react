import React from 'react'

const Home = () => {
  return (
    <section>
      <div className="drawer drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-10">
          {/* Page content here */}
          <div className="card glass w-96">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu text-base	bg-base-200 text-base-content min-h-full w-80 p-20 flex-col items-start">
            {/* Sidebar content here */}
          <a href="/" className="text-2xl font-semibold text-gray-900">
            <img
              className="w-32 h-auto md:w-80"
              src="/imagotype.webp"
              width="300"
              height="261"
              alt="App logo"
            />
          </a>
            <li className='mt-10'><a>Inicio</a></li>
            <li><a>Turnos</a></li>
            <li><a>Calendario</a></li>
            <li><a>Pacientes</a></li>
            <li><a>Perfil</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home;
