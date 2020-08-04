import React from 'react';
import logo from '../../styles/images/Apple_Logo.png';

let TopBar = () => {

  return (
    <div className="top-bar">
      
      <img src={logo} className="apple-logo"></img>
      <div className="top-menu-items">Finder</div>
      <div className="top-menu-items">File</div>
      <div className="top-menu-items">Edit</div>
    
    </div>);
}

export default TopBar;