import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  width: 5vh;
  height: 5vh;
  margin-left: 8vw;
  margin: 5%;
`;

const IconTitle = styled.div`
  margin-top: 5px;
  // height: 1vh;
  color: #666666;
`;

let PreferencesButtonMobile = ({ Icon, title }) => {
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

export default PreferencesButtonMobile;
