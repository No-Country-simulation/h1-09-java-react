/**
 * Componente que redirecciona al usuario cuando
 * no está autenticado: Login, Signup
 */

/*
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../utils/hooks/useAuthContext';
import {USUARIO_} from '../../utils/router/paths.js';

export function UserGuestRoutes() {

    const { isAuthenticated, currentLocation } = useAuthContext();

    return currentLocation && isAuthenticated ? <Navigate to={currentLocation}/> :
        isAuthenticated ? <Navigate to={`${USUARIO_}/`}/> : <Outlet />;
}*/
