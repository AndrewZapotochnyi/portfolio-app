import React, { useState } from "react";
import styled from "styled-components";

import CloseButton from "../../styles/buttons/Close.png";
import CloseHover from "../../styles/buttons/Close_Hover.png";

import Minimize from "../../styles/buttons/Inactive.png";
import Zoom from "../../styles/buttons/Inactive.png";
import Deselected from "../../styles/buttons/Deselected.png";

// MODAL CONTENT
const windowButtons = {
  close: CloseButton,
  minimize: Minimize,
  zoom: Zoom,
  deselected: Deselected,
};

const CloseButtonIcon = styled.img`
  margin: 2px;
  width: 12px;
  height: 12px;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
`;

const WindowButton = ({ name }) => {
  const [isHoovered, setIsHoovered] = useState(false);

  return name !== "close" ? (
    <CloseButtonIcon src={windowButtons[name]} />
  ) : (
    <CloseButtonIcon
      src={!isHoovered ? windowButtons[name] : CloseHover}
      onMouseEnter={() => setIsHoovered(true)}
      onMouseLeave={() => setIsHoovered(false)}
    />
  );
};

export default WindowButton;
