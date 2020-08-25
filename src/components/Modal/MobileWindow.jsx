import React, { useState, useRef, useLayoutEffect } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";

import WindowButton from "./WindowButton";

const HeaderDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  align-items: stretch;
  padding: 0 10px;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ButtonsDiv = styled.div`
  position: absolute;
  top: 3px;
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
  display: flex;

  height: calc(100% - 55px);
  padding: 20px 0;
  background: white;
  flex-grow: 2;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ButtonBg = styled.button`
  border-width: 0px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  padding-right: 0px;
`;

const RefContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MobileWindow = ({
  name,
  title,
  removeModal,
  children,
  height,
  width,
  isFixed,
  isOnTop,
  moveOnTop,
  countPosition,
  upperY,
}) => {
  const [draggingDisabled, setDraggingDisabled] = useState(false);
  const [done, setDone] = useState(false);

  const MobileWindowStyle = styled.div`
    display: flex,
    border: solid 1px #ddd,
    background: rgba(255, 255, 255),
    padding: "0",
    z-index: isOnTop ? "999" : "0",
    height: 80%`;
  const removeModalHandle = (event) => {
    event.stopPropagation();
    removeModal(name);
  };

  return (
    <MobileWindowStyle className="modal-rnd-mobile">
      <RefContainerDiv data-e2e-id="hello">
        <HeaderDiv onClick={() => moveOnTop(name)}>
          <ButtonsDiv>
            <ButtonBg onClick={removeModalHandle}>
              <WindowButton
                name="close"
                setDraggingDisabled={setDraggingDisabled}
              />
            </ButtonBg>
            <WindowButton name="minimize" />
            <WindowButton name="zoom" />
          </ButtonsDiv>
          <TitleHeader> {title}</TitleHeader>
        </HeaderDiv>

        <BodyDiv
          data-e2e-id="bodyDiv"
          onMouseOver={() => setDraggingDisabled(true)}
          onMouseLeave={() => setDraggingDisabled(false)}
        >
          {children}
        </BodyDiv>
      </RefContainerDiv>
    </MobileWindowStyle>
  );
};

export default MobileWindow;
