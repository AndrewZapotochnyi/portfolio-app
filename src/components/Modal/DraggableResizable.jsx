import React, { useState } from "react";
import { Rnd } from "react-rnd";
import {ModalNames} from "../constants";
import styled from 'styled-components'

import WindowButton from './WindowButton';

const WhiteHeaderDiv = styled.div`
  position: relative;
  display:flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid #CCC;
  align-items: stretch;
  padding: 0 10px;
`;

const ButtonsDiv = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleHeader = styled.div`
  display: flex;
  align-items: center;
  
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 25px;
  
  font-size: 15px;
  color: #191919;
  opacity: 0.6;  
`;

const BodyDiv = styled.div`
  padding: 10px;
  display:flex;
  height: 100%;
  background: #FBFBFB;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const WhiteWindowStyle = {
  display: "flex",
  border: "solid 1px #ddd",
  background: "rgba(255, 255, 255)",
  padding: "0"
  
}

const DraggableResizable = ({name, removeModal, children }) => {

  const title = name[0].toUpperCase() + name.slice(1).toLowerCase();
  const [draggingDisabled, setDraggingDisabled] = useState(false);

  const removeModalHandle = () => {
    removeModal(name);

  }

  return <Rnd
    disableDragging={draggingDisabled}
    style={WhiteWindowStyle}
    className="modal-rnd"
    minWidth= "300"
    minHeight= "200"
    // enableResizing= "False"
    default={{
      x: 200,
      y: 200,
      width: 320, 
      height: 200,
    }}
    
  >

    <WhiteHeaderDiv >
      <ButtonsDiv>
        <button 
          onClick={() => removeModalHandle()}
          
        >
          <WindowButton 
          name="close"
          setDraggingDisabled={setDraggingDisabled}/>
        </button>
        <WindowButton name="minimize"/>
        <WindowButton name="zoom"/>
      </ButtonsDiv>
      <TitleHeader> {title}</TitleHeader>
    </WhiteHeaderDiv >
      
    <BodyDiv
      onMouseOver={() => setDraggingDisabled(true)}
      onMouseLeave={() => setDraggingDisabled(false)}
      >
      {children}
    </BodyDiv>
  </Rnd>
};

export default DraggableResizable;