import React, { Component } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import App from '../App';
import PropTypes from 'prop-types';
import { logout } from '../actions/loginActions';

class AppNavbar extends Component {

    state = {
        isOpen :false
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        logout: PropTypes.func.isRequired
    }

    toogle = () => {
        this.setState({ isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <NavbarBrand href="/">
                            WCE Virtual Labs
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            {this.props.isAuthenticated === true ? 
                            <NavItem>
                                <NavLink style={{ cursor: "pointer" }} onClick={this.props.logout}>Logout</NavLink>
                            </NavItem> : null  
                        }  
                        { this.props.isAuthenticated === false ? <Redirect to="/" /> : null}
                        </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.login.isAuthenticated
    }
}

export default connect(mapStateToProps, { logout })(AppNavbar);