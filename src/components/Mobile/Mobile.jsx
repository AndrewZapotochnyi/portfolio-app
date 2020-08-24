import React from "react";
import styled from "styled-components";
import FacebookAppImage from "../../styles/images/FacebookApp.png";
import SchedulerImage from "../../styles/images/Scheduler.png";
import TweeterImage from "../../styles/images/Tweeter.png";
import DigindecImage from "../../styles/images/Digindec.png";
import AzblockchainImage from "../../styles/images/Azblockchain.png";
import Man from "../../styles/images/man.png";

// //Bootstrap
// import Button from 'react-bootstrap/Button';
//

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const slides = [
  {
    title: "Hello, I'm Andrew",
    description: `I'm an accomplished technology professional and recent bootcamp graduate
      with 10 years of experience in digital marketing, UX, and product
      delivery seeking transition to dedicated software development role.`,
    tools: "Take a look at my projects to learn more about me!",
    image: Man,
    link: ["https://www.linkedin.com/in/zapotochnyi/", "My LinkedIn"],
  },
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
  height: 100%;
  color: black;
`;

const HeroImage = styled.img`
  height: 200px;
  margin: 20px;

  -webkit-box-shadow: 0 5px 2px #777;
  -moz-box-shadow: 0 5px 10px #777;
  box-shadow: 0 5px 10px #777;
`;

const SlideHeader = styled.h1`
  font-family: "SF-Pro-Display-Semibold";
  font-size: 32px;
  margin-top: 5%;
`;

const StyledP = styled.p`
  margin: 40px 40px;
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
