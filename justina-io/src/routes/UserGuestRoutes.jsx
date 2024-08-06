/**
 * Componente que redirecciona al usuario cuando
 * no está autenticado: Login, Signup
 */

import { Navigate } from 'react-router-dom';
import { useGlobalReducer } from '../hooks/useGlobalReducer.jsx';

export function UserGuestRoutes({ children }) {

    const { isAuthenticated } = useGlobalReducer();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}
