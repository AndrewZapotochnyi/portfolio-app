import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import {ModalNames} from "../constants";
import styled from 'styled-components'

// STYLES 
const WindowStyle = styled.div`
    color: black;
    font-size: 15px;
    display: flex;
    color: black;
    background: white;
    backdrop-filter: blur(30px);
    padding: 7px 12px;
    border-radius: 10px;
    width: 500px;
  
    top: -80%;
    box-shadow: 0 0 3px #999999;
    flex-direction: column;
`;

const CloseButton = styled.div`
  background: #FF5E57;
  border: 5px solid rgba(153, 153, 153, 0.2);
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 5px;
`;

const YellowButton = styled.div`
  background: #FEBC2E;
  border: 5px solid rgba(254, 188, 46, 0.2);
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 5px;
`;

const GreenButton = styled.div`
  background: #28C73E;
  border: 5px solid rgba(40, 199, 62, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
  margin-right: 5px;
`;

const HeaderDiv = styled.div`
  display:flex;
  width: 100%;
  height: 10px;
  justify-content: space-between;
`;

const ButtonsDiv = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
`;

const BodyDiv = styled.div`
  padding: 10px;
  display:flex;
  height: 500px;
`;


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

const style = {
  display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const DraggableResizable = ({name}) => {

  let currentContent = modalsContent[name] ;

  return <Rnd
    style={style}
    className="modal-rnd"
    default={{
      x: 0,
      y: 0,
      width: 320,
      height: 200
    }}
  >
    
  <HeaderDiv>
    <ButtonsDiv>
      <CloseButton />
      <YellowButton />
      <GreenButton />
    </ButtonsDiv>
    {name}
    <div></div>
  </HeaderDiv>
  <BodyDiv>
    {currentContent}
  </BodyDiv>
        

  </Rnd>
};

export default DraggableResizable;