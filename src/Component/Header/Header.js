import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
const Header = () => {
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext)
    console.log(loggedInUser)
    return (
        <div className="container">
            <Navbar bg="" expand="lg">
                <Navbar.Brand to="/home">Safa Leather</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <Link to="/home" className="menu"><b>Home</b></Link>
                        <Link to="/myOrders" className="menu"><b>Orders</b></Link>
                        <Link to="/admin/manage" className="menu"><b>Admin</b></Link>
                        {
                            loggedInUser.email ? <img style={{ height: '25px', marginTop: '20px', borderRadius: '50%', }} src={loggedInUser.photo} alt="" srcset="" /> : <Link to="/login" className="menu p-3"><Button variant="outline-success">Login</Button></Link>
                        }
                    </Nav>
                    <Form inline>

                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;