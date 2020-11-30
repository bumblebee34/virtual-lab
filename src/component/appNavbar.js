import React, { useState } from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

const AppNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">
                        WCE Virtual Labs
                    </NavbarBrand>
                </Container>
            </Navbar>
        </div>
    );
}

export default AppNavbar;