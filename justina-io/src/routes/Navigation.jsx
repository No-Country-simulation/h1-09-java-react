import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from '../pages/Login';
import CheckIn from '../pages/CheckIn';
import LayoutsNav from '../layouts/LayoutsNav';
import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';
import PasswordRecovery from '../pages/PasswordRecovery';

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
]);

const Navigation = () => {
  return <RouterProvider router={routes} />;
};

export default Navigation;
