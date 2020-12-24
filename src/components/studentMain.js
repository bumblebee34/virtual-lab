import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class StudentMain extends Component {

    render() {
        return (
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem active>Dashboard</BreadcrumbItem>
                </Breadcrumb>
                <ListGroup>
                    <ListGroupItem className="btn" style={{ textAlign: "left" }} onClick={() => this.props.history.push('/subjectassignments')}>3IT401 - Cryptography and Network Security</ListGroupItem>
                    <ListGroupItem className="btn" style={{ textAlign: "left" }}>3IC401 - Management and Economics</ListGroupItem>
                    <ListGroupItem className="btn" style={{ textAlign: "left" }}>4OE395 - OE I data Visualization and Interpretation</ListGroupItem>
                    <ListGroupItem className="btn" style={{ textAlign: "left" }}>3IT402 - Data Mining</ListGroupItem>
                    <ListGroupItem className="btn" style={{ textAlign: "left" }}>3IT413 - PE Deep Learning</ListGroupItem>
                    <ListGroupItem className="btn" style={{ textAlign: "left" }}>3IT451 - Open Source Software Lab</ListGroupItem>
                    <ListGroupItem className="btn" style={{ textAlign: "left" }}>3IT452 - Software Testing and Quality Assurance Lab</ListGroupItem>
                    <ListGroupItem className="btn" style={{ textAlign: "left" }}>3IT453 - Data Mining Lab</ListGroupItem>
                    <ListGroupItem className="btn" style={{ textAlign: "left" }}>3IT454 - Project</ListGroupItem>
                </ListGroup>
            </Container>
        );
    }
}

export default StudentMain;