import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NLogo from './assets/PlogoSmall.png'
import Nav from 'react-bootstrap/Nav'



const NaviBar = () => {
    return ( 
        <>
  <Navbar bg="light" sticky='top'>
  <Container>
    <Navbar.Brand href="#home">
       <img
        src={NLogo}
        
        // width="30"
        // height="30"
        className="d-inline-block align-top"
        alt="Plate Math Logo"
      /> 
     </Navbar.Brand>
     <Nav className="me-auto">
            <Nav.Link href="#home">SWR Calculator</Nav.Link>
            <Nav.Link href="#features">Explore</Nav.Link>
            <Nav.Link href="#pricing">How To Use</Nav.Link>
      </Nav>
  </Container>
  </Navbar>
</>
     );
}
 
export default NaviBar;