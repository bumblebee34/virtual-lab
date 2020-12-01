import React, { Component } from 'react';
import { Alert, TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, Label, Input, Form } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { register } from '../actions/registerAction';
import { login } from '../actions/loginActions';
import PropTypes from 'prop-types'

class Login extends Component {

    state = {
        activeTab : '1',
        name: '',
        prn: '',
        email: '',
        password: '',
        year: null,
        email_login: '',
        password_login: ''
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        login_msg: PropTypes.string.isRequired,
        reg_msg: PropTypes.string.isRequired
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitRegister = (e) => {
        e.preventDefault();
        
        const { name, prn, email, password, year } = this.state;
        const newUser = {
            name, prn, email, password, year
        };
        this.props.register(newUser);
        document.getElementById("register").reset();
    }

    onSubmitLogin = (e) => {
        e.preventDefault();
        console.log(this.state.email_login, this.state.password_login);
        const { email_login, password_login } = this.state;
        const newUser = {
            email_login, password_login
        };
        this.props.login(newUser);
        console.log(this.props.msg);
    }

    render() {
        return (
            <div className="container" style={{ marginTop: "50px"}}>
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <Nav tabs>
                            <NavItem style={{ width: "50%" }}>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => this.setState({ activeTab: '1' })}
                                    style={{textAlign: "center"}}
                                >
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem style={{ width: "50%" }}>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => this.setState({ activeTab: '2' })}
                                    style={{textAlign: "center"}}
                                >
                                    Register
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab} className="tab">
                            <TabPane tabId="1" className="tabpane">
                            { this.props.login_msg ? <Alert color="danger">{`${this.props.msg}`}</Alert> : null}
                            <div className="row row-content">
                                <div className="col-12">
                                    <Row className="form-group">
                                            <Label htmlfor="email_login" md={2}>Email</Label>
                                            <Col md={10}>
                                                <Input type="email" id="email_login" name="email_login" placeholder="Enter your email" onChange={this.onChange} />
                                            </Col>
                                    </Row>
                                    <Row className="form-group">
                                            <Label htmlfor="password_login" md={2}>Password</Label>
                                            <Col md={10}>
                                                <Input type="password" id="password_login" name="password_login" placeholder="Enter your password" onChange={this.onChange} />
                                            </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size:10, offset: 2}}>
                                            <Button type="submit" color="primary" onClick={this.onSubmitLogin}>Login</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            </TabPane>
                            <TabPane tabId="2" className="tabpane">
                                { this.props.reg_msg ? 
                                    this.props.reg_msg === "Registration successful, please login"?
                                    <Alert color="success">{this.props.reg_msg}</Alert>:
                                    <Alert color="danger">{this.props.reg_msg}</Alert> :
                                    null
                                }
                                <div className="row row-content">
                                    <div className="col-12">
                                        <Form id="register">
                                            <Row className="form-group">
                                                <Label htmlfor="name" md={2}>Name</Label>
                                                <Col md={10}>
                                                    <Input type="text" id="name" name="name" placeholder="Enter your name" onChange={this.onChange}/>
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Label htmlfor="prn" md={2}>PRN</Label>
                                                <Col md={10}>
                                                    <Input type="text" id="prn" name="prn" placeholder="Enter your PRN" onChange={this.onChange}/>
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Label htmlfor="email" md={2}>Email</Label>
                                                <Col md={10}>
                                                    <Input type="email" id="email" name="email" placeholder="Enter your email" onChange={this.onChange}/>
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Label htmlfor="password" md={2}>Password</Label>
                                                <Col md={10}>
                                                    <Input type="password" id="password" name="password" placeholder="Enter your password" onChange={this.onChange}/>
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Label htmlfor="year" md={2}>Year</Label>
                                                <Col md={10}>
                                                    <Input type="select" name="year" id="year" onChange={this.onChange}>
                                                        <option>select</option>
                                                        <option>First Year</option>
                                                        <option>Second Year</option>
                                                        <option>Third Year</option>
                                                        <option>Final Year</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Col md={{size:10, offset: 2}}>
                                                    <Button type="submit" color="success" onClick={this.onSubmitRegister}>Register</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        id: state.login.id,
        name: state.login.name,
        email: state.login.email,
        isAuthenticated: state.login.isAuthenticated,
        login_msg: state.login.msg,
        reg_msg: state.register.msg
    }
}

export default connect(mapStateToProps, { register, login })(Login);