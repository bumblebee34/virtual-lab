import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

class StudentMain extends Component {
    render() {
        return (
            <Container>
                <ListGroup>
                    <ListGroupItem>3IC401 - Management and Economics</ListGroupItem>
                    <ListGroupItem>4OE395 - OE I data Visualization and Interpretation</ListGroupItem>
                    <ListGroupItem>3IT401 - Cryptography and Network Security</ListGroupItem>
                    <ListGroupItem>3IT402 - Data Mining</ListGroupItem>
                    <ListGroupItem>3IT413 - PE Deep Learning</ListGroupItem>
                    <ListGroupItem>3IT451 - Open Source Software Lab</ListGroupItem>
                    <ListGroupItem>3IT452 - Software Testing and Quality Assurance Lab</ListGroupItem>
                    <ListGroupItem>3IT453 - Data Mining Lab</ListGroupItem>
                    <ListGroupItem>3IT454 - Project</ListGroupItem>
                </ListGroup>
            </Container>
        );
    }
}

export default StudentMain;