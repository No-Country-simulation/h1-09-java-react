import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext.jsx';

export const useGlobalReducer = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error('useGlobalReducer debe estar dentro del proveedor GlobalContext');
    }

    return context;

}