import React from 'react';
import './App.css';
import './styles/_colors.scss';
import './components/ToolBar/ToolBar'
import ToolBar from './components/ToolBar/ToolBar';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <div className="App-Holder">
        <TopBar></TopBar>
    
        <ToolBar ></ToolBar>
        
      </div>
    </div>
  );
}

export default App;
