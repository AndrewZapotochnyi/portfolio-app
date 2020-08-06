import React, { useState } from 'react';
import './App.css';
import './styles/App.scss';
import './components/ToolBar/ToolBar'
import ToolBar from './components/ToolBar/ToolBar';
import TopBar from './components/TopBar/TopBar';
import DraggableWindow from './components/Modal/DraggableModal';

function App() {

  const [windowIsOpen, setWindowIsOpen] = useState(true);

  const windowToggle = () => {
    setWindowIsOpen(!windowIsOpen);
  };


  return (
    <div className="App">
      <div className="App-Holder">
        <TopBar></TopBar>

        {windowIsOpen && <DraggableWindow></DraggableWindow>}
    
        <ToolBar windowToggle={windowToggle} ></ToolBar>
        
        
      </div>
    </div>
  );
}

export default App;
