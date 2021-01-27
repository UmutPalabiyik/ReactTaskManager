import { Navbar, Nav, Image } from "react-bootstrap";
import styled from 'styled-components';


const Header = () => {

  const NavbarStyle = styled.div`
  
  .navbar{
    height: 10vh;
    
  }

  .headeright{
    font-family: 'Poppins', sans-serif;

    .headerText{
      font-size: 1.2em;
      color: #d1cdcd;
      letter-spacing: 1px;

      &:hover{
        font-size: 1.3em;
      }
    }
  }

  
  `;

  return (
    <>
    <NavbarStyle>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="shadow" >
        <Navbar.Brand href="#home" className="ml-5"><Image src="mottodoPic.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="mr-5 headeright">
            <Nav.Link href="#deets" className="mr-5 headerText">Who we are</Nav.Link>
            <Nav.Link eventKey={2} href="#" className="headerText">
              What we do 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </NavbarStyle>
    </>
  );
}

export default Header;
