import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import {ModalNames} from "../constants";
import styled from 'styled-components';

import CloseButton from '../../styles/buttons/Close.png';
import Minimize from '../../styles/buttons/Minimise.png';
import Zoom from '../../styles/buttons/Zoom.png';
import Deselected from '../../styles/buttons/Deselected.png';

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
`;

const MidButton = styled.img`
  
  width: 32px;
  height: 24px;
  margin-left: 14px;
  margin-right: 4px;

`;


const WindowButton = ({name}) => {

  if (name === "deselected") {
    return <MidButton src={windowButtons[name]}></MidButton>;
  }

  return <CloseButtonIcon src={windowButtons[name]}></CloseButtonIcon>;
};

export default WindowButton;