import React from 'react';
import './ToolButton'
import ToolButton from './ToolButton';
import styled from 'styled-components'

const ToolBarStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 10px;
    margin-bottom: 20px;
    background: rgba(249, 249, 249, 0.3);
    background-blend-mode: luminosity;
    box-shadow: inset 0px 1px 3px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(81.5485px);
    border-radius: 20px;
`;


const ToolBar = (props) => {
    return (
        <ToolBarStyle className="tool-bar">
                {Object.entries(props.modals).map(([key, subject], i) => {

                    if (subject.toolButton) {
                        return <ToolButton
                        Icon={subject.toolButton.Icon} 
                        title={subject.toolButton.title} 
                        modalName={key} 
                        isActive={subject.isActive}    
                        {...props} 
                        >     
                        </ToolButton>
                    }
                    

                }
                    
                    
            )}
        </ToolBarStyle>
    );
}

export default ToolBar;