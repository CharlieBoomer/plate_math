import Container from 'react-bootstrap/Container'
import NaviBar from './components/NaviBar';
import HowTo from './components/HowTo';
import CommentSection from './components/CommentSection';
//import './App.css';

import CalcuPage from './components/CalcuPage';
import LiftExplorer from './components/LiftExplorer';
import { useState } from 'react';
import LanguageSelect from './components/LanguageSelect';




function App() {
  
  const[langauge, setLanguage]=useState(false);

  const changeLangauge = (lang)=> {
    setLanguage(lang);
  }

  return (
    <Container bg='dark'>
      <LanguageSelect langauge={langauge} changeLangauge={()=>setLanguage(!langauge)}/>
      <NaviBar langauge={langauge}/>
      <CalcuPage langauge={langauge}/>
      <LiftExplorer langauge={langauge}/>
      <HowTo langauge={langauge}/>
      <CommentSection langauge={langauge}/>
    </Container>

  );
}

export default App;
