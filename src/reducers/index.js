import { combineReducers } from 'redux'
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';


const reducer = combineReducers({
    register: registerReducer,
    login: loginReducer
})

export default reducer;