import React, {useReducer, useState} from 'react';
import './App.css';
import './styles/App.scss';
import './components/ToolBar/ToolBar'
import ToolBar from './components/ToolBar/ToolBar';
import TopBar from './components/TopBar/TopBar';
import DraggableResizable from './components/Modal/DraggableResizable';
import {modalsStateDefault} from "./components/constants";

function App() {
  
  const [modals, setModals] = useState(modalsStateDefault);
  const openModal = (name) => setModals({
    ...modals,
    [name]: {
      ...modals[name],
      isActive: true
    }
  });
  const closeModal = (name) => setModals({
    ...modals,
    [name]: {
      ...modals[name],
      isActive: false
    }
  });

  return (
    <div className="App">
      <div className="App-Holder">
        <TopBar></TopBar>
    
        {Object.entries(modals).map(([key, subject], i) => (
          <div>
            {subject.isActive &&
              <DraggableResizable 
                name={key}
                removeModal={closeModal}
                key={key}
                subject={modals[key].Content}
              />
            }
          </div>
        ))}
        
        <ToolBar
            addModal={openModal}
            removeModal={closeModal}
            modals={modals}
        >
        </ToolBar>

      </div>
    </div>
  );
}

export default App;
