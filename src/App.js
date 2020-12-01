import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/appNavbar';
import Login from './components/login';

class App extends Component{
    render() {
        return (
            <Provider store={store} >
                <div className="App">
                    <AppNavbar />
                    <Login />
                </div>
            </Provider>
        );
    }
}

export default App;
