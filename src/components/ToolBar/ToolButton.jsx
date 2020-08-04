import React from 'react';


let ToolButton = ({icon, alt, title, modalName}) => (
    <button onClick={console.log(modalName)}>{title}</button>
);

export default ToolButton;