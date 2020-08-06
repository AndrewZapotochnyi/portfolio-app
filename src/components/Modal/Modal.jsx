import React, { useState } from 'react';
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
  
    top: -80%;
    box-shadow: 0 0 3px #999999;
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
  width: 500px;
  height: 10px;
`;

const BodyDiv = styled.div`
  display:flex;
  height: 500px;
`;


let ModalWindow = ({children}) => {

    return (
        <WindowStyle>
          <HeaderDiv>
            <CloseButton />
            <YellowButton />
            <GreenButton />
          </HeaderDiv>
            <BodyDiv>
                {children}
            </BodyDiv>
        </WindowStyle>
    );
}

export default ModalWindow;