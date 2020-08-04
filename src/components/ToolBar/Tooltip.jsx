import React from 'react';
import styled from 'styled-components'

    const Tooltip = styled.div`
        margin-top: -50px;
        margin-left: -10px;
        margin-bottom: 15px;
        color: black;
        font-size: 15px;
        display: flex;
        flex-flow: center; 
        background: rgba(249, 249, 249, 0.7);
        backdrop-filter: blur(30px);
        padding: 7px 12px;
        border-radius: 10px;
    `;

export default Tooltip;