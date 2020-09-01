import React, { useState } from "react";
import styled from "styled-components";
import appleLogo from "../../styles/images/Apple_Logo.png";
import { modalsStateDefault } from "../../ModalsStateDefault";
import MobileButton from "./MobileButton";
import HelloMobile from "./Content/HelloMobile";
import MobileWindowButton from "./MobileWindowButton";

const MobileBDiv = styled.div`
  color: black;

  display: flex;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;
  height: 100vh;
  font-family: "SF-Pro-Display-Light.otf";
`;

const Header = styled.div`
  // flex-grow: 0.5;
  height: 50px;

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
  margin: 5px;
  display: flex;
  flex-direction: column;
  font-size: 2.2vh;
  // padding-left: 20px;
  // padding-right: 20px;
`;

const Footer = styled.div`
  background: white;

  margin: 10px;

  align-self: center;

  display: flex;
  flex-direction: row;
  padding: 10px 10px;

  background: rgba(249, 249, 249, 0.3);
  background-blend-mode: luminosity;
  box-shadow: inset 0px 1px 3px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(81.5485px);
  border-radius: 20px;

  justify-content: center;
  width: min-content;
  font-size: 12px;
`;

const AppleLogo = styled.img`
  height: 30px;
  width: 30px;
  margin: 8px;
`;

const ButtonsDiv = styled.div`
  top: 3px;
  left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 2px;
  padding-left: 8px;
`;

const ButtonBg = styled.button`
  border-width: 0px;

  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  padding-right: 0px;
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
          ([key, { isActive, Content, ContentMobile, openMobile }]) =>
            isActive &&
            ContentMobile && (
              <div>
                <ButtonsDiv>
                  <ButtonBg onClick={() => closeModal(key)}>
                    <MobileWindowButton name="close" />
                  </ButtonBg>
                  <MobileWindowButton name="minimize" />
                  <MobileWindowButton name="zoom" />
                </ButtonsDiv>

                {ContentMobile}
              </div>
            )
        )}

        {/* <HelloMobile /> */}
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
