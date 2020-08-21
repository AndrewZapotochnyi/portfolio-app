import React, { useState } from "react";
import logo from "../../styles/images/Apple_Logo.png";
import styled from "styled-components";
import DropDownButton from "./DropDownButton";

const MenuItems = styled.div`
  margin-bottom: 5px;
  cursor: pointer;
`;

const RightHolder = styled.div`
  position: absolute;
  right: 20px;
  top: 5px;
`;

const Logo = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 36px;
  height: 24px;
  background: ${(props) =>
    props.isActive ? "rgba(242, 242, 242, 0.4)" : "transparent"};
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
  border-radius: 4px;
  position: absolute;
  box-shadow: 0 0 3px #999999;
  width: 140px;

  list-style-type: none;
  margin: 0;
  padding: 5px;
  text-align: left;
`;

const TopBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: rgba(0, 0, 0, 0.05);
  box-shadow: inset 0px 1px 3px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(1px);
  font-size: 15px;
  // padding-left: 20px;

  width: 100%;
  height: 24px;
`;

const LeftHolder = styled.div`
  display: flex;
  margin-left: 10px;
`;

const A = styled.a`
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
`;

let TopBar = ({ addModal }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const openModal = (name) => {
    setIsActive(!isActive);
    addModal(name);
  };

  return (
    <TopBarStyle className="top-bar">
      <LeftHolder>
        <Logo>
          <Button isActive={isActive} onClick={handleClick}>
            <img
              src={logo}
              alt={isActive ? "active-logo" : "logo"}
              className="apple-logo"
            />
          </Button>
          {isActive && (
            <DropdownList>
              <DropDownButton
                ModalName="HELLO"
                title="Hello world!"
                openModal={openModal}
              />

              <DropDownButton
                ModalName="CREDENTIALS"
                title="Project Credentials"
                openModal={openModal}
              />
            </DropdownList>
          )}
        </Logo>

        <MenuItems className="top-menu-items">
          <A
            href="https://www.linkedin.com/in/zapotochnyi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </A>
        </MenuItems>
        <MenuItems className="top-menu-items">
          <A
            href="https://github.com/AndrewZapotochnyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </A>
        </MenuItems>
      </LeftHolder>

      <RightHolder>Andrew Zapotochnyi</RightHolder>
    </TopBarStyle>
  );
};

export default TopBar;
