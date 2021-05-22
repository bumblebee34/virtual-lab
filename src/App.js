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
import SubjectAssignments from './components/subjectAssignments';
import CreateAssignment from './components/createAssignment';
import demo from './components/demo';
import demo1 from './components/demo1';
import demo2 from './components/demo2';
import demo3 from './components/demo3';
import demo4 from './components/demo4';
import demoAssesment from './components/demoAssesment';
import StudentData from './components/studentData';
import StudentAssignmentData from './components/studentAssignmentData';

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
                        <Route path='/subjectassignments' component={SubjectAssignments} />
                        <Route path='/create' component={CreateAssignment} />
                        <Route path='/demo' component={demo} />
                        <Route path='/demo1' component={demo1} />
                        <Route path='/demo2' component={demo2} />
                        <Route path='/demo3' component={demo3} />
                        <Route path='/demo4' component={demo4} />
                        <Route path='/demoAssesment' component={demoAssesment} />
                        <Route path='/studentdata' component={StudentData} />
                        <Route path='/studentassignmentdata' component={StudentAssignmentData} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
