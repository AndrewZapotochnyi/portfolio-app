import React, { useState } from "react";
import styled from "styled-components";

const Dot = styled.div`
  position: absolute;
  color: black;
  bottom: -7px;
  border: 3px solid #191919;
  border-radius: 70%;
`;

const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
`;

const Tooltip = styled.div`
  color: black;
  font-size: 15px;
  display: flex;
  flex-flow: center;
  background: rgba(249, 249, 249, 0.7);
  backdrop-filter: blur(30px);
  padding: 7px 12px;
  border-radius: 10px;
  position: absolute;
  top: -80%;
  box-shadow: 0 0 3px #999999;
`;

let ToolButton = ({
  Icon,
  title,
  modalName,
  isActive,
  openModal,
  closeModal,
  openMobile,
}) => {
  const handleClick = () => {
    if (!isActive) {
      openMobile(modalName);
    } else {
      openMobile(modalName);
    }

    console.log("click");
  };

  return (
    <StyledButton onClick={() => handleClick()}>
      {isActive && <Dot />}
      <Icon iconMobile="true" />
      {/* {title} */}
    </StyledButton>
  );
};

export default ToolButton;
