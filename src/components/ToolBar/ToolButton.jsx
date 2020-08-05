import React, { useState } from 'react';
import styled from 'styled-components'

const Dot = styled.div`
        position: absolute;
        color: black;
        bottom: -15%;
        border: 3px solid black;
        border-radius: 50%;
    `;

const StyledButton = styled.button`
        cursor: pointer;
        position: relative;
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
        top: -50%;
    `;

let ToolButton = ({Icon, title, modalName,}) => {
    const [isHoovered, setIsHoovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log(modalName);
    };

    return (
        <StyledButton
            onMouseEnter={() => setIsHoovered(true)}
            onMouseLeave={() => setIsHoovered(false)}
            onClick={handleClick}
        >
            {isHoovered && <Tooltip>{title}</Tooltip>}
            <Icon />
            {isActive && <Dot/>}
        </StyledButton>
    );
}
  

export default ToolButton;