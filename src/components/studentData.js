import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Input, Row, Col, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class StudentData extends Component {

    state = {
        prn: null,
        assignments: [],
        msg: null,
        res: false
    }

    getData = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        var data = JSON.stringify({
            prn: this.state.prn
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
                        <BreadcrumbItem><Link to="/facultymain">Dashboard</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Student Data</BreadcrumbItem>
                    </Breadcrumb>
                <Form>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="prn" id="prn" placeholder="Enter PRN" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                        <Button color="primary" onClick={this.getData}>Search</Button>
                        </Col>
                    </Row>
                </FormGroup>
                </Form>
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


export default StudentData;