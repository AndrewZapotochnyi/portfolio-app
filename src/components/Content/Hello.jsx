import React from "react";
import Man from "../../styles/images/man.png";
import styled from "styled-components";

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-style: solid;
  border-width: 3px;
  border-color: #cccccc;
  box-shadow: 1px 0px 1px 0px #666;
`;

const SafariWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBig = styled.h2`
  font-family: "SF-Pro-Display-Semibold";
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: 0em;
  color: rgb(29, 29, 31);
`;

const SubTitle = styled.h3`
  font-family: "SF-Pro-Display-Semibold";
  font-size: 21px;
  line-height: 1.1;
  letter-spacing: 0em;
  color: rgb(29, 29, 31);
  margin-left: 20px;
  margin-right: 20px;
`;

const AboutMe = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
  line-height: 1.1;
  letter-spacing: 0em;
  color: rgb(29, 29, 31);
`;

const Hello = () => {
  return (
    <SafariWrapper>
      <TitleBig>Welcome to my desktop!</TitleBig>
      <Img src={Man} alt="Andrew Zapotochnyi"></Img>
      <SubTitle>Hey, I'm Andrew Zapotochnyi. </SubTitle>
      <AboutMe>
        I'm an accomplished technology professional and recent bootcamp graduate
        with 10 years of experience in digital marketing, UX, and product
        delivery seeking transition to dedicated software development role.
      </AboutMe>
      <AboutMe>Take a look at my desktop to learn more about me!</AboutMe>
    </SafariWrapper>
  );
};

export default Hello;
