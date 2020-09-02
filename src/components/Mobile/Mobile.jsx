import React from "react";
import styled from "styled-components";
import FacebookAppImage from "../../styles/images/FacebookApp.jpg";
import SchedulerImage from "../../styles/images/Scheduler.jpg";
import TweeterImage from "../../styles/images/Tweeter.jpg";
import DigindecImage from "../../styles/images/Digindec.jpg";
import AzblockchainImage from "../../styles/images/Azblockchain.jpg";

// //Bootstrap
// import Button from 'react-bootstrap/Button';
//

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
    link: [
      "https://github.com/AndrewZapotochnyi/FB-Audience-Outreach",
      "GitHub Repo",
    ],
  },
  {
    title: "Interview Scheduler",
    description:
      "As a part of Lighthouse Labs program wrote a React application that allows users to book and cancel interviews.",
    tools: "Tools: React | Node.js | JS | HTML | SASS | Axios | Storybook",
    image: SchedulerImage,
    link: ["https://github.com/AndrewZapotochnyi/Scheduler", "GitHub Repo"],
  },
  {
    title: "Tweeter",
    description: "Built a single-page Twitter clone. ",
    tools: "Tools: HTML | CSS | JS | jQuery | AJAX | Node | Express | MongoDB",
    image: TweeterImage,
    link: ["https://github.com/AndrewZapotochnyi/tweeter", "GitHub Repo"],
  },
  {
    title: "Digital Independence Declaration",
    description:
      "Developed program concept and created website logic, wireframes, and UX. Led team in development",
    tools: "",
    image: DigindecImage,
    link: ["https://digindec.com/", "Digindec.com"],
  },
  {
    title: "AZ Blockchain Inc.",
    description:
      "Hired and coordinated team to build my company’s web presence",
    tools: "",
    image: AzblockchainImage,
    link: ["http://azblockchain.co/", "AZBlockchain.co"],
  },
];

const Background = styled.div`
  max-height: 55vh;
  color: #191919;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  // background-color: #0084cb;
  // background-image: linear-gradient(
  //   0deg,
  //   #ffffff 0%,
  //   #dadada 54%,
  //   #ffffff 100%
  // );
`;

const HeroImage = styled.img`
  width: 30vw;
  margin: 0;

  // -webkit-box-shadow: 0 5px 2px #777;
  // -moz-box-shadow: 0 5px 10px #777;
  // box-shadow: 0 5px 10px #777;
`;

const SlideHeader = styled.h1`
  font-family: "SF-Pro-Display-Semibold";
  font-size: 3vh;
  // margin-top: 5%;
  line-height: 1.1;
  color: #191919;
  text-align: center;
`;

const StyledP = styled.p`
  margin: 0 60px;
  text-align: center;
  font-size: 2.2vh;
  line-height: 1.1;
`;

const Mobile = () => {
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
            <a href={slide.link[0]} target="_blank" rel="noopener noreferrer">
              {slide.link[1]}
            </a>
          </StyledP>
        </Background>
      ))}
    </Slider>
  );
};

export default Mobile;
