import {createContext, useCallback, useMemo, useReducer} from 'react';
import {initialState, storeReducer} from './StoreReducer.jsx';
import {Types_Reducer} from '../interfaces/Types_Reducer.jsx';

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(storeReducer, initialState);

    const login = useCallback( ( user ) => {
        window.localStorage.setItem('userJustina', JSON.stringify(user));
        dispatch({ type: Types_Reducer.AUTH_LOGIN, payload: user });
    }, []);

    const logout = useCallback( () => {
        dispatch({ type: Types_Reducer.AUTH_LOGOUT });
    }, []);

    const contextValue = useMemo(() => ({
        ...state,
        dispatch,
        login,
        logout
    }), [login, logout, state]);
    
    return (
        <GlobalContext.Provider value={ contextValue }>
            { children }
        </GlobalContext.Provider>
    );
};