import React from 'react';
import { Link } from 'react-router-dom';
import LayoutsNav from './LayoutsNav';

const LayoutSidebar = ({ children }) => {
  return (
    <>
      <LayoutsNav />
      <section className="main-content">
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Principal</span>
              <Link to='/'>
                <div className='mt-3'>
                  <li>
                    <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white icon-default group-hover:text-D0298A"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                        />
                      </svg>
                      <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Inicio</span>
                    </a>
                  </li>
                </div>
              </Link>
              <Link>

                <li>
                  <a
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white icon-default group-hover:text-D0298A"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Notificaciones</span>
                  </a>
                </li>
              </Link>
              <Link>

                <li className='mb-4'>
                  <a
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white icon-default group-hover:text-D0298A"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                    <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Mensajes</span>
                  </a>
                </li>
              </Link>
              <div>
                <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Administrar</span>
              </div>
              <Link>
                <div className='mt-5 mb-2'>
                  <li>
                    <a
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container"
                    >
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white icon-default group-hover:text-D0298A"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                      </svg>
                      <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Agenda</span>
                    </a>
                  </li>
                </div>
              </Link>
              <Link to='/pacientes'>

                <li className='mb-4'>
                  <a
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container"
                  >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white icon-default group-hover:text-D0298A"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>

                    <span className="ms-3  text-gray-900 dark:text-white group-hover:text-D0298A">Pacientes</span>
                  </a>
                </li>
              </Link>
              <div>

                <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Reportes</span>
              </div>
              <Link>
                <div className='mt-3 '>
                  <li className='mb-4'>
                    <a
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container"
                    >
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white icon-default group-hover:text-D0298A"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                      </svg>
                      <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Estadísticas</span>
                    </a>
                  </li>
                </div>
              </Link>
              <div>
                <span className="ms-3  text-gray-900 dark:text-white group-hover:text-D0298A">Perfil</span>
              </div>
              <Link>
                <div className='mt-3 '>

                  <li>
                    <a
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container"
                    >
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white icon-default group-hover:text-D0298A"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 5.25h.75a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3h-8.25a3 3 0 0 1-3-3v-10.5a3 3 0 0 1 3-3h.75M15.75 5.25v-.75a3 3 0 0 0-3-3h-1.5a3 3 0 0 0-3 3v.75M15.75 5.25h-7.5" />
                      </svg>

                      <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Perfil</span>
                    </a>
                  </li>
                </div>
              </Link>
              <Link>

                <li>
                  <a
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container"
                  >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white icon-default group-hover:text-D0298A"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>

                    <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Configuracion</span>
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </aside>
        <div className="content">
          {children}
        </div>
      </section>
    </>
  );
};

export default LayoutSidebar;
