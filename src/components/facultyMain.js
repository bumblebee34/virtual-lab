import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row,Col
} from 'reactstrap';
import image from '../logo.jpeg';
import { ASSIGNMENTS } from '../assets/assignments/assignments';
import { Redirect } from 'react-router-dom';

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
                    <Button color="primary" onClick={() => this.props.history.push("/studentdata")}>Student Data</Button>
                </Row>
                <Row className="d-flex">
                    <div className="col-md-3 m-4">
                        <Card>
                            <CardImg top width="100%" src={image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Shift Cipher</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Subject: Cryptography and Network Security </CardSubtitle>
                                <CardText> Due: 20/12/2020 </CardText>
                                <Row>
                                    <Col>
                                    <Button color="primary" onClick={() => this.props.history.push('/demo')}>Open</Button>
                                    </Col>
                                    <Col>
                                    <Button color="warning" onClick={() => this.props.history.push('/demoAssesment')}>Assesment</Button>
                                    </Col>
                                </Row>
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
                                <Row>
                                    <Col>
                                    <Button color="primary" onClick={() => this.props.history.push('/demo')}>Open</Button>
                                    </Col>
                                    <Col>
                                    <Button color="warning" onClick={() => this.props.history.push('/demo')}>Assesment</Button>
                                    </Col>
                                </Row>
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
                                <Row>
                                    <Col>
                                    <Button color="primary" onClick={() => this.props.history.push('/demo')}>Open</Button>
                                    </Col>
                                    <Col>
                                    <Button color="warning" onClick={() => this.props.history.push('/demo')}>Assesment</Button>
                                    </Col>
                                </Row>
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
                                <Row>
                                    <Col>
                                    <Button color="primary" onClick={() => this.props.history.push('/demo')}>Open</Button>
                                    </Col>
                                    <Col>
                                    <Button color="warning" onClick={() => this.props.history.push('/demo')}>Assesment</Button>
                                    </Col>
                                </Row>
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
                                <Row>
                                    <Col>
                                    <Button color="primary" onClick={() => this.props.history.push('/demo')}>Open</Button>
                                    </Col>
                                    <Col>
                                    <Button color="warning" onClick={() => this.props.history.push('/demo')}>Assesment</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>
        );
    }
};

export default FacultyMain;