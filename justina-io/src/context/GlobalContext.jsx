import {createContext, useCallback, useMemo, useReducer} from 'react';
import {initialState, storeReducer} from './StoreReducer.jsx';

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(storeReducer, initialState);

    const login = useCallback( ( user ) => {
        window.localStorage.setItem('userJustina', JSON.stringify(user));
        dispatch({ type: 'AUTH_LOGIN', payload: user });
    }, []);

    const logout = useCallback( () => {
        dispatch({ type: 'AUTH_LOGOUT' });
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