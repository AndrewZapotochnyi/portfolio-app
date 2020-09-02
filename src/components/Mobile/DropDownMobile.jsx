import React, { useState } from "react";
import styled from "styled-components";

const DropDownButtonStyle = styled.div`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  margin: 0px 0;
  font-weight: 400;
  width: 190px;
  height: 40px;
  background: ${(props) => (props.isHoovered ? "#0063E2" : "transparent")};
  color: ${(props) => (props.isHoovered ? "white" : "black")};
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const Margin = styled.div`
  margin-left: 10px;
`;

let DropDownMobile = ({ ModalName, title, openModal }) => {
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

export default DropDownMobile;
