import React from 'react';
import logo from '../../styles/images/Apple_Logo.png';
import styled from 'styled-components'


const Dropdown = styled.div`
        color: black;
        font-size: 15px;
        display: flex;
        flex-flow: center; 
        background: rgba(249, 249, 249, 0.7);
        backdrop-filter: blur(30px);
        padding: 7px 12px;
        border-radius: 10px;
        position: absolute;
        bottom: -80%;
        box-shadow: 0 0 3px #999999;
    `;

let TopBar = () => {

  return (
    <div className="top-bar">
      
      <img src={logo} className="apple-logo"></img>
      <div className="top-menu-items">Finder</div>
      <div className="top-menu-items">File</div>
      <div className="top-menu-items">Edit</div>
      <Dropdown />
    
    </div>);
}

export default TopBar;