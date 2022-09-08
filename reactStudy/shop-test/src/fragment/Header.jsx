import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Header extends Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Donators Market</h1>
                </div>

                <div>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                        </Container>
                    </Navbar>
                </div>
            </div>
        );
    }
}


export default Header;