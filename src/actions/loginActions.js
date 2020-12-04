import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';
import axios from 'axios';

export const loginStudent = ({ email_login, password_login }) => dispatch => {

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({ email_login, password_login });

    axios.post('http://localhost:5000/user/login/student', body, config)
        .then(res => dispatch({ 
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data
        }));
}

export const loginFaculty = ({ email_login, password_login }) => dispatch => {

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({ email_login, password_login });

    axios.post('http://localhost:5000/user/login/faculty', body, config)
        .then(res => dispatch({ 
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data
        }));
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}