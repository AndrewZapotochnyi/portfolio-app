import React from "react";
import styled from "styled-components";
import FacebookAppImage from "../../styles/images/FacebookApp.png";
import SchedulerImage from "../../styles/images/Scheduler.png";
import TweeterImage from "../../styles/images/Tweeter.png";
import DigindecImage from "../../styles/images/Digindec.png";
import AzblockchainImage from "../../styles/images/Azblockchain.png";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const slides = [
  {
    title: "Facebook Audience Analytics App",
    description:
      "Created concept and built a social media analytics app that uses Facebook’s API to create and analyze social media audiences",
    tools:
      "Tools: Facebook API | React | Ruby on Rails | JS | SQlite | React Router | Sass | Chart.js | Axios | Material UI | Jest",
    image: FacebookAppImage,
    link: "https://github.com/AndrewZapotochnyi/FB-Audience-Outreach",
  },
  {
    title: "Interview Scheduler",
    description:
      "As a part of Lighthouse Labs program wrote a React application that allows users to book and cancel interviews.",
    tools: "Tools: React | Node.js | JS | HTML | SASS | Axios | Storybook",
    image: SchedulerImage,
    link: "https://github.com/AndrewZapotochnyi/Scheduler",
  },
  {
    title: "Tweeter",
    description: "Built a single-page Twitter clone. ",
    tools: "Tools: HTML | CSS | JS | jQuery | AJAX | Node | Express | MongoDB",
    image: TweeterImage,
    link: "https://github.com/AndrewZapotochnyi/tweeter",
  },
  {
    title: "Digital Independence Declaration",
    description:
      "Developed program concept and created website logic, wireframes, and UX. Led team in development",
    tools: "",
    image: DigindecImage,
    link: "https://digindec.com/",
  },
  {
    title: "AZ Blockchain Inc.",
    description:
      "Hired and coordinated team to build company’s web presence azblockchain.co",
    tools: "",
    image: AzblockchainImage,
    link: "http://azblockchain.co/",
  },
];

const Background = styled.div`
  background-color: #0084cb;
  background-image: linear-gradient(
    0deg,
    #ffffff 0%,
    #dadada 54%,
    #ffffff 100%
  );
  height: 100%;
  color: black;
`;

const HeroImage = styled.img`
  width: auto;
  max-width: 70%;
  max-height: 200px;
  min-height: 100px;
  margin: 20px;

  -webkit-box-shadow: 0 5px 2px #777;
  -moz-box-shadow: 0 5px 10px #777;
  box-shadow: 0 5px 10px #777;
`;

const SlideHeader = styled.h1`
  font-family: "SF-Pro-Display-Semibold";
  line-height: 1.1;
`;

const StyledP = styled.p`
  margin: 0 40px;
  line-height: 1.1;
`;

const SafariContent = () => {
  return (
    <Slider>
      {slides.map((slide, index) => (
        <Background key={index}>
          <SlideHeader>{slide.title}</SlideHeader>
          <StyledP>{slide.description}</StyledP>
          <section>
            <HeroImage src={slide.image} />
          </section>
          <StyledP>{slide.tools}</StyledP>
          <StyledP>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              GitHub repo
            </a>
          </StyledP>
        </Background>
      ))}
    </Slider>
  );
};

export default SafariContent;
