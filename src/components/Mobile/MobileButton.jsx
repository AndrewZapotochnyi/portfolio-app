import React from "react";
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
