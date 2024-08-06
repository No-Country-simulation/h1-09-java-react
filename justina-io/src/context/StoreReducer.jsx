import {Types_Reducer} from '../interfaces/Types_Reducer.jsx';
import {logoutApi} from '../core/api/logout.api.jsx';

export const initialState = {
    user: null,
    isAuthenticated: !!window.localStorage.getItem('userJustina')
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
            logoutApi();
            return {
                ...state,
                user: null,
                isAuthenticated: false
            };
        default:
            return state;
    }
};