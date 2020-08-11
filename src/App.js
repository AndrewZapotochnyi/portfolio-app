import React, {useReducer, useState} from 'react';
import './App.css';
import './styles/App.scss';
import './components/ToolBar/ToolBar'
import ToolBar from './components/ToolBar/ToolBar';
import TopBar from './components/TopBar/TopBar';
import DraggableResizable from './components/Modal/DraggableResizable';
import {ModalNames} from "./components/constants";
import CalendarIcon from "./components/icons/CalendarIcon";
import ToolButton from "./components/ToolBar/ToolButton";

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

const modals = {
  [ModalNames.calendar]: {
    Content: <div>Calendar Content</div>,
    isActive: false,
    toolButton: {
      Icon: CalendarIcon,
      title: 'Calendar',
    },
    x: 0,
    y: 0,
    width: 200,
    height: 300,
  },
};

function App() {
  const [modals, setModals] = useState(modals);
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


  const [modalNames, dispatch] = useReducer(reducer, initialState);

  const [modalsOpenedState, setModalsOpenedState] = useState(modalsOpened);

  const addModal = (name) => dispatch({
    type: ADD_MODAL_NAME,
    modalName: name,
  });

  const removeModal = (name) => dispatch({
    type: REMOVE_MODAL_NAME,
    modalName: name,
  });
  
  return (
    <div className="App">
      < className="App-Holder">
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
        
        <ToolBar
            addModal={addModal}
            removeModal={removeModal}
            modalsOpenedState={modalsOpenedState}
            setModalsOpenedState={setModalsOpenedState}
        >
          {/*{tools.map((tool) =>*/}
          {/*    <ToolButton*/}
          {/*        key={tool.modalName}*/}

          {/*        {...tool}*/}
          {/*        {...props}*/}
          {/*    />)}*/}
        </ToolBar>



      </div>
    </div>
  );
}

export default App;
