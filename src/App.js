import React, {useReducer} from 'react';
import './App.css';
import './styles/App.scss';
import './components/ToolBar/ToolBar'
import ToolBar from './components/ToolBar/ToolBar';
import TopBar from './components/TopBar/TopBar';
import DraggableWindow from './components/Modal/DraggableModal';
import {ModalNames} from "./components/constants";

const modalsContent = {
  [ModalNames.calendar]: <div>Calendar</div>,
  [ModalNames.contacts]: <div>Contacts</div>,
};

const initialState = [];

// const state = {
//   [ModalNames.calendar]: {
//     x: 0,
//     y: 0,
//   },
//   [ModalNames.contacts]: {
//     x: 10,
//     y: 10,
//   },
// };

const ADD_MODAL_NAME = 'ADD_MODAL_NAME';
const REMOVE_MODAL_NAME = 'REMOVE_MODAL_NAME';

const addModalActionCreator = (modalName) => ({
  type: ADD_MODAL_NAME,
  modalName,
});
const removeModalNameActionCreator = (modalName) => ({
  type: REMOVE_MODAL_NAME,
  modalName,
});

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

  return (
    <div className="App">
      <div className="App-Holder">
        <TopBar></TopBar>

        {modalNames.map( modalName => (!!modalsContent[modalName] && <DraggableWindow>{modalsContent[modalName]}</DraggableWindow>))}
    
        <ToolBar
            addModal={(name) => dispatch(addModalActionCreator(name))}
            removeModal={(name) => dispatch(removeModalNameActionCreator(name))}
        />

      </div>
    </div>
  );
}

export default App;
