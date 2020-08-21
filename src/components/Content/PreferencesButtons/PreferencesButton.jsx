import React, { useState } from "react";
import styled from "styled-components";

const Dot = styled.div`
  position: absolute;
  color: black;
  bottom: -7px;
  border: 3px solid #191919;
  border-radius: 70%;
`;

const StyledButton = styled.div`
  // cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  width: 70px;
  height: 70px;
  margin: 10px;
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

const IconTitle = styled.div`
  margin-top: 5px;
  height: 70px;
  color: #666666;
`;

const IconWrapSize = styled.div`
  width: 60px;
  height: 60px;
`;

let PreferencesButton = ({ Icon, title }) => {
  const [isHoovered, setIsHoovered] = useState(false);

  const handleClick = () => {
    if (!isHoovered) {
    } else {
    }
  };

  return (
    <StyledButton
    // onMouseEnter={() => setIsHoovered(true)}
    // onMouseLeave={() => setIsHoovered(false)}
    // onClick={handleClick}
    >
      {/* {isHoovered && <Tooltip>{title}</Tooltip>} */}
      <Icon />
      <IconTitle>{title}</IconTitle>
    </StyledButton>
  );
};

export default PreferencesButton;
