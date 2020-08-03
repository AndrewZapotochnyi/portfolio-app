import React from 'react';
import './App.css';
import './styles/_colors.scss';
import './components/ToolBar'
import ToolBar from './components/ToolBar';

function App() {
  return (
    <div className="App">
      <div className="App-Holder">
    
        <ToolBar 
          text={"Hello"}
        ></ToolBar>
        
      </div>
    </div>
  );
}

export default App;
