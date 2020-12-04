import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row
} from 'reactstrap';
import image from '../logo.jpeg';
import { ASSIGNMENTS } from '../assets/assignments/assignments';

function RenderAssignment({assignment}) {
    return(
        <Card>
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{assignment.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"> Subject: {assignment.subject} </CardSubtitle>
                <CardText> Due: {assignment.due} </CardText>
                <Button color="primary">Attempt</Button>
            </CardBody>
        </Card>
    );
}

class FacultyMain extends Component {
    render() {

        const assignments = ASSIGNMENTS.map(assignment =>{
            return(
                <div key={assignment.id} className="col-md-3 m-4 d-flex">
                    <RenderAssignment assignment={assignment} />
                </div>
            )
        })

        return (
            <Container>
               <Row>
                   {assignments}
               </Row>
            </Container>
        );
    }
};

export default FacultyMain;