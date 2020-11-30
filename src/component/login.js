import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import classnames from 'classnames';

const Login = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="container" style={{ marginTop: "50px"}}>
            <div className="row">
                <div className="col-md-6 m-auto">
                    <Nav tabs>
                        <NavItem style={{ width: "50%" }}>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                                style={{textAlign: "center"}}
                            >
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ width: "50%" }}>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                                style={{textAlign: "center"}}
                            >
                                Register
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} className="tab">
                        <TabPane tabId="1" className="tabpane">
                        <div className="row row-content">
                            <div className="col-12">
                                <Row className="form-group">
                                        <Label htmlfor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                            <Input type="email" id="email" name="email" placeholder="Enter your email"/>
                                        </Col>
                                </Row>
                                <Row className="form-group">
                                        <Label htmlfor="password" md={2}>Password</Label>
                                        <Col md={10}>
                                            <Input type="password" id="password" name="password" placeholder="Enter your password"/>
                                        </Col>
                                </Row>
                                <Row className="form-group">
                                            <Label htmlfor="type" md={2}>Type</Label>
                                            <Col md={10}>
                                                <Input type="select" name="type" id="type">
                                                    <option>Faculty</option>
                                                    <option>Student</option>
                                                </Input>
                                            </Col>
                                    </Row>
                                <Row className="form-group">
                                    <Col md={{size:10, offset: 2}}>
                                        <Button type="submit" color="primary">Login</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        </TabPane>
                        <TabPane tabId="2" className="tabpane">
                            <div className="row row-content">
                                <div className="col-12">
                                    <Row className="form-group">
                                            <Label htmlfor="name" md={2}>Name</Label>
                                            <Col md={10}>
                                                <Input type="text" id="name" name="name" placeholder="Enter your name"/>
                                            </Col>
                                    </Row>
                                    <Row className="form-group">
                                            <Label htmlfor="prn" md={2}>PRN</Label>
                                            <Col md={10}>
                                                <Input type="text" id="prn" name="prn" placeholder="Enter your PRN"/>
                                            </Col>
                                    </Row>
                                    <Row className="form-group">
                                            <Label htmlfor="email" md={2}>Email</Label>
                                            <Col md={10}>
                                                <Input type="email" id="email" name="email" placeholder="Enter your email"/>
                                            </Col>
                                    </Row>
                                    <Row className="form-group">
                                            <Label htmlfor="password" md={2}>Password</Label>
                                            <Col md={10}>
                                                <Input type="password" id="password" name="password" placeholder="Enter your password"/>
                                            </Col>
                                    </Row>
                                    <Row className="form-group">
                                            <Label htmlfor="class" md={2}>Class</Label>
                                            <Col md={10}>
                                                <Input type="select" name="class" id="class">
                                                    <option>First Year</option>
                                                    <option>Second Year</option>
                                                    <option>Third Year</option>
                                                    <option>Final Year</option>
                                                </Input>
                                            </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size:10, offset: 2}}>
                                            <Button type="submit" color="success">Register</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default Login;