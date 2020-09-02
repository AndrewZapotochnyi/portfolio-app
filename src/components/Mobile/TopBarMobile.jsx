import React, { useState } from "react";
import logo from "../../styles/images/Apple_Logo.png";
import styled from "styled-components";
import DropDownMobile from "./DropDownMobile";

const Logo = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: auto;
  height: 100%;
  background: ${(props) =>
    props.isActive ? "rgba(242, 242, 242, 0.4)" : "transparent"};
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
`;

const DropdownList = styled.ul`
  color: black;
  font-size: 20px;
  background: rgba(249, 249, 249);
  backdrop-filter: blur(30px);
  border-radius: 4px;
  position: absolute;
  box-shadow: 0 0 3px #999999;
  width: 190px;

  list-style-type: none;
  margin: 0;
  padding: 5px;
  text-align: left;
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  margin: 8px;
`;

let TopBar = ({ openMobile, closeModal }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const openModal = (name) => {
    setIsActive(!isActive);
    openMobile(name);
  };

  return (
    <Logo>
      <Button isActive={isActive} onClick={handleClick}>
        <Image
          src={logo}
          alt={isActive ? "active-logo" : "logo"}
          className="apple-logo"
        />
      </Button>
      {isActive && (
        <DropdownList>
          <DropDownMobile
            ModalName="HELLO"
            title="Hello world!"
            openModal={openModal}
          />

          <DropDownMobile
            ModalName="CREDENTIALS"
            title="Project Credentials"
            openModal={openModal}
          />
        </DropdownList>
      )}
    </Logo>
  );
};

export default TopBar;
