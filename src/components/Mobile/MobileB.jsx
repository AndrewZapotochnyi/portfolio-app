import React, { useState } from "react";
import styled from "styled-components";
import appleLogo from "../../styles/images/Apple_Logo.png";
import { modalsStateDefault } from "../../ModalsStateDefault";
import MobileButton from "./MobileButton";

const MobileBDiv = styled.div`
  color: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  flex-grow: 0.5;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0px 20px;

  background: rgba(0, 0, 0, 0.05);
  box-shadow: inset 0px 1px 3px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(1px);

  font-size: 20px;
  color: white;
`;

const Body = styled.div`
  background: white;
  flex-grow: 10;
  border-radius: 20px;
`;

const Footer = styled.div`
  background: white;
  flex-grow: 1.5;
  margin: 0px 20px;

  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  margin-bottom: 20px;
  background: rgba(249, 249, 249, 0.3);
  background-blend-mode: luminosity;
  box-shadow: inset 0px 1px 3px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(81.5485px);
  border-radius: 20px;
  justify-content: center;
  min-width: max-content;
`;

const AppleLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const MobileB = ({ openModal, modals, closeModal, setModals, openMobile }) => {
  return (
    <MobileBDiv className="mobileVersionB">
      <Header>
        <AppleLogo src={appleLogo}></AppleLogo>
        Andrew Zapotochnyi
      </Header>

      <Body>
        {Object.entries(modals).map(
          ([key, { isActive, Content }]) => isActive && <div>{Content}</div>
        )}
      </Body>

      <Footer>
        {Object.entries(modals).map(
          ([key, subject]) =>
            subject.toolButton && (
              <MobileButton
                Icon={subject.toolButton.Icon}
                title={subject.toolButton.title}
                modalName={key}
                isActive={subject.isActive}
                openModal={openModal}
                closeModal={closeModal}
                openMobile={openMobile}
              />
            )
        )}
      </Footer>
    </MobileBDiv>
  );
};

export default MobileB;
