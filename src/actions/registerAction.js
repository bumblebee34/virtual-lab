import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import axios from 'axios';

export const register = ({ name, prn, email, password, year }) => (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const body = JSON.stringify({ name, prn, email, password, year });
    
    axios.post('http://localhost:5000/user/student', body, config)
        .then(res => dispatch({ 
            type: REGISTER_SUCCESS,
            payload: res.data
         }))
         .catch(err => {
            dispatch({
                 type: REGISTER_FAIL,
                 payload: err.response.data
             });
         });
}