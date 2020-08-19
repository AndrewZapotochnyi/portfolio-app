import React, { useState } from 'react';
import logo from '../../styles/images/Apple_Logo.png';
import styled from 'styled-components'

const MenuItems = styled.div`
  margin-bottom: 5px;

`;

const Logo = styled.div`
  position: relative;
  `;

const Button = styled.button`
  width: 36px;
  height: 24px;
  background: ${props => props.isActive ? 'rgba(242, 242, 242, 0.4)' : 'transparent'};
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
`;

const DropdownList = styled.ul`
  color: black;
  font-size: 15px;
  background: rgba(249, 249, 249, 0.7);
  backdrop-filter: blur(30px);
  border-radius: 10px;
  position: absolute;
  box-shadow: 0 0 3px #999999;
  width: 150px;
  
  list-style-type: none;
  margin: 0;
  padding: 10px 10px 0 10px;
  text-align: left;
`;

const ListItem = styled.li`  
  margin-bottom: 10px;
`;

let TopBar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="top-bar">

        <Logo>
            <Button isActive={isActive} onClick={handleClick}>
                <img src={logo} alt={isActive ? "active-logo" : "logo"} className="apple-logo" />
            </Button>
            {isActive && (
                <DropdownList>
                    <ListItem>About this Mac </ListItem>
                    <ListItem>System Preferences ... </ListItem>
                    <ListItem>App Store ... </ListItem>
                </DropdownList>
            )}
        </Logo>


      

      <MenuItems className="top-menu-items">Finder</MenuItems>
      <MenuItems className="top-menu-items">File</MenuItems>
      <MenuItems className="top-menu-items">Edit</MenuItems>
      
      
    
    </div>);
}

export default TopBar;