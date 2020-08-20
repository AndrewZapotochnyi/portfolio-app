import React, { useState } from "react";
import styled from "styled-components";

const DropDownButtonStyle = styled.div`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  margin: 0px 0;
  font-weight: 400;
  width: 100%;
  height: 25px;
  background: ${(props) => (props.isHoovered ? "#0063E2" : "transparent")};
  color: ${(props) => (props.isHoovered ? "white" : "black")};
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const Margin = styled.div`
  margin-left: 10px;
`;

let DropDownButton = ({ ModalName, title, openModal }) => {
  const [isHoovered, setIsHoovered] = useState(false);

  return (
    <DropDownButtonStyle
      onClick={() => openModal(ModalName)}
      onMouseEnter={() => setIsHoovered(true)}
      onMouseLeave={() => setIsHoovered(false)}
      isHoovered={isHoovered}
    >
      <Margin>{title}</Margin>
    </DropDownButtonStyle>
  );
};

export default DropDownButton;
