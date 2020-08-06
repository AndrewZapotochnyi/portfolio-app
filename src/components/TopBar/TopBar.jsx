import React, { useState } from 'react';
import logo from '../../styles/images/Apple_Logo.png';
import styled from 'styled-components'


const Dropdown = styled.div`
  margin-top: 105px;
  color: black;
  font-size: 15px;
  background: rgba(249, 249, 249, 0.7);
  backdrop-filter: blur(30px);
  border-radius: 10px;
  position: absolute;
  box-shadow: 0 0 3px #999999;  
`;

const ButtonActive = styled.div`
  width: 36px;
  height: 24px;
  background: rgba(242, 242, 242, 0.4);
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin-left: 20px;
  `;

const ButtonInActive = styled.div`
  width: 36px;
  height: 24px;
  // background: rgba(242, 242, 242, 0.4);
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin-left: 20px;
`;

const DropdownList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 7px 10px;
  text-align: left;
`;

const ListItem = styled.li`
  
  margin-left: 5px;
  margin-top: 10px;
`;

const MenuItems = styled.div`
  margin-bottom: 5px;

`;

let TopBar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="top-bar">
      
      { !isActive && 
      <ButtonInActive onClick={handleClick} >
        <img src={logo} className="apple-logo"></img>
      </ButtonInActive> }
      { isActive && 
      <ButtonActive onClick={handleClick} >
        <img src={logo} className="apple-logo"></img>
      </ButtonActive> }

      {isActive && <Dropdown> 
          <DropdownList>
            <ListItem>About this Mac </ListItem>
            <ListItem>System Preferences ... </ListItem>
            <ListItem>App Store ... </ListItem>
          </DropdownList>
      </Dropdown>}
      

      <MenuItems className="top-menu-items">Finder</MenuItems>
      <MenuItems className="top-menu-items">File</MenuItems>
      <MenuItems className="top-menu-items">Edit</MenuItems>
      
      
    
    </div>);
}

export default TopBar;