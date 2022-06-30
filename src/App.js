import Container from 'react-bootstrap/Container'
import NaviBar from './components/NaviBar';
import HowTo from './components/HowTo';
//import './App.css';

import CalcuPage from './components/CalcuPage';
import LiftExplorer from './components/LiftExplorer';




function App() {
  
  
  return (
    <Container bg='dark'>
      <NaviBar/>
      <CalcuPage/>
      <LiftExplorer/>
      <HowTo/>
    </Container>

  );
}

export default App;
