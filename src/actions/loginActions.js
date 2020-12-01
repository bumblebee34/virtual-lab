import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import axios from 'axios';

export const login = ({ email_login, password_login }) => dispatch => {

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({ email_login, password_login });

    axios.post('http://localhost:5000/user/login', body, config)
        .then(res => dispatch({ 
            type: LOGIN_SUCCESS,
            payload: res.data
         }))
         .catch(err => {
            dispatch({
                 type: LOGIN_FAIL,
                 payload: err.response.data
             });
         });

}