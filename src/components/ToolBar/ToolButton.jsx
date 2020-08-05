import React from 'react';
import styled from 'styled-components'
import Tooltip from './Tooltip'

const Dot = styled.div`
        margin-top: -10px;
        margin-left: -10px;
        color: black;
        font-size: 45px;
    `;

const ElementWrap = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    `;

let ToolButton = ({icon, alt, title, modalName,}) => 

    (
        <ElementWrap>
            <Tooltip>{title}</Tooltip>
            {icon}
            <Dot>.</Dot>
        </ElementWrap>
    );

  

export default ToolButton;