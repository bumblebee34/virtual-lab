import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';

const initialState = {
    id: null,
    name: null,
    email: null,
    isAuthenticated: false,
    msg: null,
    type: null
}

export default function( state = initialState, action) {
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                isAuthenticated: true,
                msg: null,
                type: action.payload.type
            }
        case LOGIN_FAIL:
            return{
                ...state,
                id: null,
                name: null,
                email: null,
                isAuthenticated: false,
                msg: action.payload.msg
            }
        case LOGOUT:
            return{
                ...state,
                id: null,
                name: null,
                email: null,
                isAuthenticated: false,
                msg: null
            }
        default: return state;
    }
}

