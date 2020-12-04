import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/appNavbar';
import Login from './components/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FacultyMain from "./components/facultyMain";
import ImageUpload from './components/imageUpload';
import StudentMain from './components/studentMain';

class App extends Component{
    render() {
        return (
            <Provider store={store} >
                <BrowserRouter>
                <AppNavbar />
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/facultymain' component={FacultyMain} />
                        <Route path='/studentmain' component={StudentMain} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
