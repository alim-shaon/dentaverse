import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Dentaverse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end nav-custom">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/appointment">Appointment-Requst</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Navbar.Text className="px-2">
                            <p className="m-0">{user?.displayName ? user.displayName : user.email}</p>
                        </Navbar.Text>
                        {user?.email ?
                            <Button variant="light" onClick={logOut}>log-out</Button>
                            :
                            <Nav.Link as={Link} to="/login">Log-In</Nav.Link>}


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;