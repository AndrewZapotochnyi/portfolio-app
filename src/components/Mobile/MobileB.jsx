import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MobileButton from "./MobileButton";
import MobileWindowButton from "./MobileWindowButton";
import TopBarMobile from "./TopBarMobile";

const MobileBDiv = styled.div`
  color: black;

  display: flex;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
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
  background: ${(props) => (props.isAnyActive ? "white" : "transparent")};
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
  const [isAnyActive, setIsAnyActive] = useState(false);

  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  useEffect(() => {
    for (const [key, value] of Object.entries(modals)) {
      console.log(`${key}: ${value.isActive}`);
      if (value.isActive) {
        setIsAnyActive(true);
      }
    }
  }, [modals]);

  const handleCloseMobile = (name) => {
    closeModal(name);
    setIsAnyActive(false);
  };

  return (
    <MobileBDiv className="mobileVersionB">
      <Header>
        <TopBarMobile closeModal={closeModal} openMobile={openMobile} />
        Andrew Zapotochnyi
      </Header>

      <Body isAnyActive={isAnyActive}>
        {Object.entries(modals).map(
          ([key, { isActive, Content, ContentMobile, openMobile }]) =>
            isActive &&
            ContentMobile && (
              <div>
                <ButtonsDiv>
                  <ButtonBg onClick={() => handleCloseMobile(key)}>
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
