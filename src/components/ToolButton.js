import React from 'react';
import image01 from '../helpers/Finder.svg'


let ToolButton = (props) => {

 
    let icons = [];

    var req = require.context("../styles/icons", false, /.*\.svg$/);
    req.keys().forEach(function(key){
      req(key);
      icons.push(req(key));
    });


    console.log(icons);

    const iconsRender = icons.map((icon) => {
      return (<img src={icon} className="tool-box-button"></img>)
    })

  return (
    <div className="tool-button">
        {/* <img src={image01} className="tool-icon" alt="Icon"/> */}
        {iconsRender}
        
    </div>);
}

export default ToolButton;