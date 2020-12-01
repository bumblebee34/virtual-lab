import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
    msg: null
}

export default function( state = initialState, action) {
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                msg: action.payload.msg
            }
        case REGISTER_FAIL:
            return{
                ...state,
                msg: action.payload.msg
            }
        default: return state;
    }
}

