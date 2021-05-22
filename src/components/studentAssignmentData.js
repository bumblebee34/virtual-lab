import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Input, Row, Col, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StudentAssignmentData extends Component {

    state = {
        assignments: [],
        msg: null,
        res: false
    }

    static propTypes = {
        prn: PropTypes.string.isRequired
    }

    componentDidMount = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        var data = JSON.stringify({
            prn: this.props.prn
        })

        axios.post('http://localhost:5000/user/student/getData', data, config)
        .then(res => {
            this.setState({ assignments : res.data.assignments, msg: res.data.msg})
            if(res.data.msg != "Success")
            {
                alert("PRN not found")
            }
        })
        .catch(e => console.log(e));
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        const assign = this.state.assignments.map((assignment, index) => {
            return(
                <ListGroupItem key={index}>
                    <h4>Assignment Name: {assignment.assignment_name}</h4>
                    <h6>Student Score: {assignment.student_score}</h6>
                    <h6>Out of: {assignment.assignment_score}</h6>
                    <h6>Remark: {assignment.remark}</h6>
                    <h6>Submission Date: {assignment.date}</h6>
                    <h6>Submission Details:</h6>
                    <ListGroup>
                    {assignment.questions.map((que, i) => {
                        return(
                            <ListGroupItem key={i}>
                                <h6>Question {i + 1} Ans: {que.que_ans}</h6>
                                <h6>Marks: {que.student_mark}/{que.marks}</h6>
                            </ListGroupItem>
                        )
                    })}
                    </ListGroup>
                </ListGroupItem>
            )
        })

        return (
            <Container>
                <Breadcrumb>
                        <BreadcrumbItem><Link to="/studentmain">Dashboard</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Student Assignment Data</BreadcrumbItem>
                </Breadcrumb>
                <br/>
                {
                    this.state.msg == "Success" ? 
                    <ListGroup>
                        {assign}
                    </ListGroup>:null
                }
                
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return{
        prn: state.login.prn
    }
}

export default connect(mapStateToProps, {})(StudentAssignmentData);