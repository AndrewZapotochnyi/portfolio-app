import React, {useReducer, createContext, useContext, useState} from 'react';
import './App.css';
import './styles/App.scss';
import './components/ToolBar/ToolBar'
import ToolBar from './components/ToolBar/ToolBar';
import TopBar from './components/TopBar/TopBar';
import DraggableResizable from './components/Modal/DraggableResizable';
import {ModalNames} from "./components/constants";
import WindowContext from './helpers/Context';

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

const modalsOpened = {
  [ModalNames.calendar]: false,
  [ModalNames.contacts]: false,
  [ModalNames.bucket]: false,
  [ModalNames.finder]: false,
  [ModalNames.mail]: false,
  [ModalNames.safari]: false,
  [ModalNames.photos]: false,
  [ModalNames.messages]: false
}

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

function App() {
  const [modalNames, dispatch] = useReducer(reducer, initialState);

  const [modalsOpenedState, setModalsOpenedState] = useState(modalsOpened);

  const addModal = (name) => dispatch({
    type: ADD_MODAL_NAME,
    modalName: name,
  })

  const removeModal = (name) => dispatch({
    type: REMOVE_MODAL_NAME,
    modalName: name,
  })

  
  return (
    <div className="App">
      <div className="App-Holder">
        <TopBar></TopBar>
    
        {modalNames.map( modalName => (
          !!modalsContent[modalName] && 
            <DraggableResizable 
              name={modalName}
              removeModal={removeModal}
              key={modalName}
              modalsOpenedState={modalsOpenedState}
              setModalsOpenedState={setModalsOpenedState}
            />))}
    
    
   
        <button onClick={() => setModalsOpenedState({...modalsOpenedState, "CALENDAR": true})}>Hello </button>
        
        <ToolBar
            addModal={addModal}
            removeModal={removeModal}
            modalsOpenedState={modalsOpenedState}
            setModalsOpenedState={setModalsOpenedState}
        />


          
    

      </div>
    </div>
  );
}

export default App;
