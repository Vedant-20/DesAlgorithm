import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
    return (
        <Navbar className='bg2'  expand="lg">
          <Container>
            <Navbar.Brand href="#home" className='title'>Virtual Lab of Pallotti</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="tab">
                <Nav.Link href="/aim" >Aim</Nav.Link>
                <Nav.Link href="/theory" >Theory</Nav.Link>
                <Nav.Link href="/procedure" >Procedure</Nav.Link>
                <Nav.Link href="/objective" >Objective</Nav.Link>
                <Nav.Link href="/simulation" >Simulation</Nav.Link>
                <Nav.Link href="/assignment" >Assignment</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
          {/* <div className='bg2'>
          
        </div> */}
        </Navbar>
        
      );


       
}

