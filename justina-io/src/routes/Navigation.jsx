import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from '../pages/Login';
import CheckIn from '../pages/CheckIn';
import LayoutsNav from '../layouts/LayoutsNav';
import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';
import PasswordRecovery from '../pages/PasswordRecovery';
import Patients from '../pages/Patients';
import PatientsList from '../pages/PatientsList';

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registrarse',
    element: (
      <LayoutsNav>
        {' '}
        <CheckIn />{' '}
      </LayoutsNav>
    ),
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/editar-perfil',
    element: <EditProfile />,
  },
  {
    path: '/recuperacion',
    element: (
      <LayoutsNav>
        <PasswordRecovery />
      </LayoutsNav>
    ),
  },
  {
    path: '/pacientes',
    element: (
      <LayoutsNav>
        <PatientsList />
      </LayoutsNav>
    ),
  },
  {
    path: '/pacientes/:patient',
    element: (
      <LayoutsNav>
        <Patients />
      </LayoutsNav>
    ),
  },
]);

const Navigation = () => {
  return <RouterProvider router={routes} />;
};

export default Navigation;