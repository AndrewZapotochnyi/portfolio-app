import React, { useState } from "react";
import styled from "styled-components";

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

const IconTitle = styled.div`
  margin-top: 5px;
  height: 70px;
  color: #666666;
`;

let PreferencesButton = ({ Icon, title }) => {
  const [isHoovered, setIsHoovered] = useState(false);

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
