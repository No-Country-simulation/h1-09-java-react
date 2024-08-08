import React from 'react';
import { Link } from 'react-router-dom';
import LayoutsNav from './LayoutsNav';

const LayoutSidebar = ({ children = '' }) => {
  return (
    <>
      <LayoutsNav />
      <section className="main-content">
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-30 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <span className="text-gray-900 ms-3 dark:text-white group-hover:text-D0298A">
                Principal
              </span>
              <Link to="/">
                <div className="mt-3">
                  <li>
                    <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container">
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
                    </span>
                  </li>
                </div>
              </Link>
              <Link>
                <li>
                  <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container">
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
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>
                    <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Notificaciones</span>
                  </span>
                </li>
              </Link>
              <Link>
                <li className='mb-4'>
                  <span
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
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                      />
                    </svg>
                    <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Mensajes</span>
                  </span>
                </li>
              </Link>
              <div>
                <span className="text-gray-900 ms-3 dark:text-white group-hover:text-D0298A">
                  Administrar
                </span>
              </div>
              <Link>
                <div className="mt-5 mb-2">
                  <li>
                    <span
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
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                      <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Agenda</span>
                    </span>
                  </li>
                </div>
              </Link>
              <Link to='/pacientes'>
                <li className='mb-4'>
                  <span
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group icon-container"
                  >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white icon-default group-hover:text-D0298A"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-3A2.25 2.25 0 0 0 8.25 5.25V9m7.5 0v-.503a.747.747 0 0 0-.379-.65l-1.128-.621m1.507 1.774v9.75A2.25 2.25 0 0 1 13.5 21h-3a2.25 2.25 0 0 1-2.25-2.25v-9.75M15.75 9h-7.5m0 0v-.503a.747.747 0 0 1 .379-.65l1.128-.621m-1.507 1.774h7.5"
                      />
                    </svg>
                    <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Pacientes</span>
                  </span>
                </li>
              </Link>
              <Link>
                <div className="mt-5 mb-2">
                  <li>
                    <span
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
                          d="M6.75 12a.75.75 0 0 1 .75-.75h10.25m-11 3.75A.75.75 0 0 1 7.75 15h7.25m-10 3.75A.75.75 0 0 1 6 18h4.75m4.086-10.4 2.564 2.564a1.25 1.25 0 0 0 1.768 0l.952-.953a1.25 1.25 0 0 0 0-1.768l-2.564-2.564a1.25 1.25 0 0 0-1.768 0l-.953.952a1.25 1.25 0 0 0 0 1.768Zm0 0L10.7 12.25a4.5 4.5 0 0 1-1.89 1.125L7.5 13.5a.75.75 0 0 1-.92-.92l-.875-1.31a4.5 4.5 0 0 1 1.125-1.89l3.727-3.727a2.25 2.25 0 0 1 3.182 0Z"
                        />
                      </svg>
                      <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Notas</span>
                    </span>
                  </li>
                </div>
              </Link>
              <Link>
                <li>
                  <span
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
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                    <span className="ms-3 text-gray-900 dark:text-white group-hover:text-D0298A">Crear nuevo</span>
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </aside>
        <div className="content-wrapper p-4 sm:ml-64">
          {children}
        </div>
      </section>
    </>
  );
}

export default LayoutSidebar;