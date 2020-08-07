import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import {ModalNames} from "../constants";
import styled from 'styled-components'

import WindowButton from './WindowButton';

const TransparentHeaderDiv = styled.div`
  display:flex;
  width: 100%;
  height: 52px;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  
  align-items: stretch;
`;

const WhiteHeaderDiv = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  height: 28px;
  justify-content: space-between;
  border-bottom: 1px solid #CCCCCC;
 
  align-items: stretch;
`;

const ButtonsDiv = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

const HeaderEnd = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

const TitleHeader = styled.div`
  
  display: flex;
  align-items: center;
  margin-left: 20px;
  
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  
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

const TransparentWindowStyle = {
  display: "flex",
  border: "solid 1px #ddd",
  background: "rgba(249, 249, 249, 0.7)",
  padding: "0"
};

const WhiteWindowStyle = {
  display: "flex",
  border: "solid 1px #ddd",
  background: "rgba(255, 255, 255)",
  padding: "0"
  
}

// MODAL CONTENT
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

const DraggableResizable = ({name, addModal, removeModal}) => {

  const currentContent = modalsContent[name] ;
  const title = name[0].toUpperCase() + name.slice(1).toLowerCase();

  return <Rnd
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
        
        <WindowButton name="close"/>
        <WindowButton name="minimize"/>
        <WindowButton name="zoom"/>
        {/* <WindowButton name="deselected"/> */}
        <div></div>
      </ButtonsDiv>
        <TitleHeader> {title}</TitleHeader>
      <HeaderEnd></HeaderEnd>
      
      </WhiteHeaderDiv >
      
    {/* </WhiteHeaderDiv> */}
    <BodyDiv>
      {currentContent}
    </BodyDiv>
  </Rnd>
};

export default DraggableResizable;