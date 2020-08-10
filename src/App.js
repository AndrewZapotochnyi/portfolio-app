import React, {useReducer, createContext, useContext} from 'react';
import './App.css';
import './styles/App.scss';
import './components/ToolBar/ToolBar'
import ToolBar from './components/ToolBar/ToolBar';
import TopBar from './components/TopBar/TopBar';
import DraggableResizable from './components/Modal/DraggableResizable';
import {ModalNames} from "./components/constants";

///// CONTENT FOR MODAL WINDOWS /////
const modalsContent = {
  [ModalNames.calendar]: <div>Calendar Content</div>,
  [ModalNames.contacts]: <div>Contacts Content</div>,
  [ModalNames.bucket]: <div>Bucket Content</div>,
  [ModalNames.finder]: <div>Finder Content</div>,
  [ModalNames.mail]: <div>Mail Content</div>,
  [ModalNames.safari]: <div>Safari Content</div>,
  [ModalNames.photos]: <div>Photos Content</div>,
  [ModalNames.messages]: <div>Messages Content</div>
};

///// STATE & REDUCER MANAGEMENT /////
const initialState = [];

const ADD_MODAL_NAME = 'ADD_MODAL_NAME';
const REMOVE_MODAL_NAME = 'REMOVE_MODAL_NAME';

function reducer(state, action) {
  switch (action.type) {
    case ADD_MODAL_NAME:
      return [...state, action.modalName];
    case REMOVE_MODAL_NAME:
      return state.filter(name => name !== action.modalName);
    default:
      throw new Error();
  }
}

///// CONTEXT - OPENED WINDOWS
const colors = {
  blue: "#03619c",
  yellow: "#8c8f03",
  red: "#9c0312"
};



function App() {
  const [modalNames, dispatch] = useReducer(reducer, initialState);

  
  
  

  return (
    <div className="App">
      <div className="App-Holder">
        <TopBar></TopBar>
    
        {modalNames.map( modalName => (
          !!modalsContent[modalName] && 
            <DraggableResizable 
              name={modalName}
              removeModal={(name) => dispatch({
                  type: REMOVE_MODAL_NAME,
                  modalName: name,
                })}
              key={modalName}
            />))}
    
    
        <ToolBar
            addModal={(name) => dispatch({
              type: ADD_MODAL_NAME,
              modalName: name,
            })}
            removeModal={(name) => dispatch({
              type: REMOVE_MODAL_NAME,
              modalName: name,
            })}
        />
      

      </div>
    </div>
  );
}

export default App;
