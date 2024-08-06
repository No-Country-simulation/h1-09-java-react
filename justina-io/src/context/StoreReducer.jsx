import {Types_Reducer} from '../interfaces/Types_Reducer.jsx';

export const initialState = {
    user: null,
    isAuthenticated: false
};

export const storeReducer = (state, action) => {
    switch (action.type) {
        case Types_Reducer.AUTH_LOGIN:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        case Types_Reducer.AUTH_LOGOUT:
            window.localStorage.removeItem('userJustina');
            return {
                ...state,
                user: null,
                isAuthenticated: false
            };
        default:
            return state;
    }
};