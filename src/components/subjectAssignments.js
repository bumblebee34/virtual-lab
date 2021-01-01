import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import image from '../logo.jpeg';
import { ASSIGNMENTS } from '../assets/assignments/assignments';
import { Link } from 'react-router-dom';

function RenderAssignment({assignment , onClick}) {
    return(
        <Card>
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{assignment.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"> Subject: {assignment.subject} </CardSubtitle>
                <CardText> Due: {assignment.due} </CardText>
                <Button color="primary" onClick={onClick}>Open</Button>
            </CardBody>
        </Card>
    );
}

class SubjectAssignments extends Component {

    onClick = () => {
        this.props.history.push();
    }

    render() {
        // const assignments = ASSIGNMENTS.map(assignment =>{
        //     return(
        //         <div key={assignment.id} className="col-md-3 m-4 d-flex">
        //             <RenderAssignment assignment={assignment} onClick={this.onClick(assignment.link)} />
        //         </div>
        //     )
        // })

        return (
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/studentmain">Dashboard</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Subject Name</BreadcrumbItem>
                </Breadcrumb>
                <Row className="d-flex">
                    <div className="col-md-3 m-4">
                        <Card>
                            <CardImg top width="100%" src={image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Shift Cipher</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Subject: Cryptography and Network Security </CardSubtitle>
                                <CardText> Due: 20/12/2020 </CardText>
                                <Button color="primary" onClick={() => this.props.history.push('/demo')}>Open</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3 m-4 d-flex">
                        <Card>
                            <CardImg top width="100%" src={image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Hill Cipher</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Subject: Cryptography and Network Security </CardSubtitle>
                                <CardText> Due: 20/12/2020 </CardText>
                                <Button color="primary" onClick={() => this.props.history.push('/demo1')}>Open</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3 m-4 d-flex">
                        <Card>
                            <CardImg top width="100%" src={image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">RSA Algorithm</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Subject: Cryptography and Network Security </CardSubtitle>
                                <CardText> Due: 20/12/2020 </CardText>
                                <Button color="primary" onClick={() => this.props.history.push('/demo2')}>Open</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3 m-4 d-flex">
                        <Card>
                            <CardImg top width="100%" src={image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Steganography</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Subject: Cryptography and Network Security </CardSubtitle>
                                <CardText> Due: 20/12/2020 </CardText>
                                <Button color="primary" onClick={() => this.props.history.push('/demo3')}>Open</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3 m-4 d-flex">
                        <Card>
                            <CardImg top width="100%" src={image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Data Encryption Standard DES</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Subject: Cryptography and Network Security </CardSubtitle>
                                <CardText> Due: 20/12/2020 </CardText>
                                <Button color="primary" onClick={() => this.props.history.push('/demo4')}>Open</Button>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>
        );
    }
};

export default SubjectAssignments;