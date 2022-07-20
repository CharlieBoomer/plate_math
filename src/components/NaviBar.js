import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NLogo from './assets/PlogoSmall.png'
import Nav from 'react-bootstrap/Nav'



const NaviBar = ({langauge}) => {
    return ( 
        <>
  <Navbar bg="primary" sticky='top' style={{borderRadius: "0px 0px 5px 5px"}}>
  <Container className='d-flex'>
    <Navbar.Brand href="#top" className=''>
       <img
        src={NLogo}
        
        // width="30"
        // height="30"
        className="d-inline-block align-top"
        alt="Plate Math Logo"
      /> 
     </Navbar.Brand>
     <Nav className="me-auto row flex-fill text-center">
            {/* <div class="vr"></div> */}
            <Nav.Link href="#top" className='fs-5 col border-end  border-dark text-secondary'><strong>{langauge?"КСВ калькулятор":'SWR Calculator'}</strong></Nav.Link>
            {/* <div class="vr"></div> */}
            <Nav.Link href="#explore" className='fs-5 col border-end  border-dark text-secondary'><strong>{langauge?"Информация о лифте":'Lift Information'}</strong></Nav.Link>
            {/* <div class="vr"></div> */}
            <Nav.Link href="#howTo" className='fs-5 col border-dark border-end text-secondary'><strong>{langauge?"Как использовать":'How To Use'}</strong></Nav.Link>
            <Nav.Link href="#Comments" className='fs-5 col border-dark text-secondary'><strong>{langauge?"Комментарий":'Comment'}</strong></Nav.Link>
      </Nav>
  </Container>
  </Navbar>
</>
     );
}
 
export default NaviBar;