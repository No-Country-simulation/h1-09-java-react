/**
 * Componente que redirecciona al usuario cuando
 * ya está autenticado.
 */

import { Navigate } from 'react-router-dom';
import { useGlobalReducer } from '../hooks/useGlobalReducer.jsx';

export function UserPrivateRoutes({ children }) {

    const { isAuthenticated } = useGlobalReducer();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
