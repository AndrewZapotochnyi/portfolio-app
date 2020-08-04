import React from 'react';
import styled from 'styled-components'
import Tooltip from './Tooltip'

let ToolButton = ({icon, alt, title, modalName}) => {

    const DotIsActive = styled.div`
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
    
    return (
        <ElementWrap>
            <Tooltip>{title}</Tooltip>
            {icon}
            <DotIsActive>.</DotIsActive>
        </ElementWrap>
    );

;}  

export default ToolButton;