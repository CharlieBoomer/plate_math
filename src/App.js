import Container from 'react-bootstrap/Container'
import NaviBar from './components/NaviBar';
import Button from 'react-bootstrap/Button'
import './App.css';

import CalcuPage from './components/CalcuPage';
import { useState } from 'react'




function App() {
  
  
  return (
    <Container bg='dark'>
       <NaviBar/>
        <CalcuPage   />
    </Container>

  );
}

export default App;
