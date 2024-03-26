import React, { useState } from 'react';
import './Navbar.css';
import navlogo from '../Assets/cropped.webp';
import { Link } from 'react-router-dom';
import MyBooking from '../Assets/myBooking.webp';
import call_btn from '../Assets/call.webp';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" sticky="top" className="custom-navbar">
            <Container>
                <Navbar.Brand>
                    <Link to='/'><img src={navlogo} alt="" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" in={expanded}>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <div className="side-main">

                            <div className="side-one">
                                <Link to='/form'style={{textDecoration: 'none'}}>
                                    <img src={MyBooking} alt="" />
                                    <span >My Bookings</span>
                                </Link>
                            </div>

                            <div className="side-two">
                                <Link className='call-btn' to="tel:9099535555"><img src={call_btn} alt="" /><span>9099535555</span></Link>
                            </div>
                            <div className="side-three">
                                <div className="side-three">
                                    <NavDropdown title={<Link to="/services" className='nav-link-one'>Services</Link>} className='menu-bar' id="basic-nav-dropdown">
                                        <NavDropdown.Item className='nav-li'>
                                            <Link to="/local" className='nav-link'>Local Household Shifting</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className='nav-li'>
                                            <Link to="/loading" className='nav-link'>Domestic Shifting  Services</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className='nav-li'>
                                            <Link to="/corporate" className='nav-link'>Corporate Relocation Services</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className='nav-li'>
                                            <Link to="/office-goods-shifting" className='nav-link'>International Transportation</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className='nav-li'>
                                            <Link to="/moving-services" className='nav-link'>Car & Bike Transporation</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className='nav-li'>
                                            <Link to="/home-shifting" className='nav-link'>Warehouse Services</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                </div>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
