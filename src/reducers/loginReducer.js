import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
    id: null,
    name: null,
    email: null,
    isAuthenticated: null,
    msg: null
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
                msg: null
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
        default: return state;
    }
}

