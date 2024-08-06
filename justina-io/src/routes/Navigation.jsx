import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from '../pages/Login';
import CheckIn from '../pages/CheckIn';
import LayoutsNav from '../layouts/LayoutsNav';
import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';
import PasswordRecovery from '../pages/PasswordRecovery';
import Patients from '../pages/Patients';
import PatientsList from '../pages/PatientsList';
import {GetPacientes} from './loaders/getPacientes.jsx';
import {UserGuestRoutes} from './UserGuestRoutes.jsx';
import {UserPrivateRoutes} from "./UserPrivateRoutes.jsx";

const routes = createBrowserRouter([
  {
    path: '/login',
    element: (
        <UserGuestRoutes>
          <Login />
        </UserGuestRoutes>
    ),
  },
  {
    path: '/registrarse',
    element: (
        <UserGuestRoutes>
          <CheckIn />
        </UserGuestRoutes>
    ),
  },
  {
    path: '/',
    element:  (
        <UserPrivateRoutes>
          <Home />
        </UserPrivateRoutes>
    ),
  },
  {
    path: '/editar-perfil',
    element: (
        <UserPrivateRoutes>
          <EditProfile />
        </UserPrivateRoutes>
    ),
  },
  {
    path: '/recuperacion',
    element: (
        <UserPrivateRoutes>
          <LayoutsNav>
            <PasswordRecovery />
          </LayoutsNav>
        </UserPrivateRoutes>
    ),
  },
  {
    path: '/pacientes',
    element: (
        <UserPrivateRoutes>
          <PatientsList />
        </UserPrivateRoutes>
    ),
    loader: () => GetPacientes(),
  },
  {
    path: '/paciente',
    element: (
        <UserPrivateRoutes>
          <Patients />
        </UserPrivateRoutes>
    ),
  },
]);

const Navigation = () => {
  return <RouterProvider router={routes} />;
};

export default Navigation;
