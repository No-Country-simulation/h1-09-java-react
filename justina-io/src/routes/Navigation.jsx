import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from '../pages/Login';
import CheckIn from '../pages/CheckIn';
import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';


const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registrarse",
        element: <CheckIn />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/editar-perfil",
        element: <EditProfile />
    },

]);

const Navigation = () => {
    return <RouterProvider router={routes} />;
  };
  
export default Navigation;