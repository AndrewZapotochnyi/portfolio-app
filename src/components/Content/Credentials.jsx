import React from "react";
import styled from "styled-components";

const CredentialsWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  padding: 0 20px;
  text-align: left;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const TitleBig = styled.h2`
  font-family: "SF-Pro-Display-Semibold";
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: 0em;
  color: rgb(29, 29, 31);
`;

const AboutMe = styled.p`
  width: 450px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 1.1;
  letter-spacing: 0em;
  color: rgb(29, 29, 31);
`;

const A = styled.a`
  color: inherit; /* blue colors for links too */
  // text-decoration: inherit; /* no underline */
`;

const Credentials = () => {
  return (
    <CredentialsWrapper>
      <TitleBig>Credentials</TitleBig>

      <AboutMe>
        <b>Development:</b> Andrew Zapotochnyi
      </AboutMe>
      <AboutMe>
        <b>Mentorship and code-reviews:</b> Serhii Rumiantsev
      </AboutMe>
      <AboutMe>
        <b>Idea:</b> Konstantine Kupriyanov, Andrew Zapotochnyi
      </AboutMe>
      <AboutMe>
        <b>Tech-stack:</b> React | React Rnd | Styled Components | React
        Animated Slider | Sass
      </AboutMe>
      <AboutMe>
        <b>Design template</b>: Big Sur UI Kit by ls.graphics
      </AboutMe>

      <AboutMe>
        <A
          href="https://github.com/AndrewZapotochnyi/portfolio-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          View this project on GitHub
        </A>
      </AboutMe>
    </CredentialsWrapper>
  );
};

export default Credentials;
