import React,{Component} from "react";
import { Navbar, Nav, Container  } from 'react-bootstrap';
import {Route} from 'react-router-dom'
import OurTeam from "../OurTeam/OurTeam";
import {Link} from 'react-scroll'
import './Navigation.css';

class Navigation extends Component {           
    render(){
        return(
            <Navbar expand="lg" className='cont'>
                <Container className='cont'>
                    <Navbar.Brand href="#home">
                        <img className='navbar-logo' src = "/assets/logo.png" alt=''/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navitems">
                    <Nav className="me-auto">

                        <Link  to="home" spy={true} smooth={true}><h5 className="eachitem">HOME</h5></Link>
                        <Link  to="services" spy={true} smooth={true}><h5 className="eachitem">LEISTUNGEN</h5></Link>
                        <Link  to="shop" spy={true} smooth={true}><h5 className="eachitem">SHOP</h5></Link>
                        <Link  to="team" spy={true} smooth={true}><h5 className="eachitem">TEAM</h5></Link>
                        <Link  to="contact" spy={true} smooth={true}><h5 className="eachitem">KONTAKT</h5></Link>
            
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation