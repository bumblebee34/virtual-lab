import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import AppNavbar from './component/appNavbar';
import Login from './component/login';

class App extends Component{
    render() {
        return (
            <div className="App">
                <AppNavbar />
                <Login />
            </div>
        );
    }
}

export default App;
