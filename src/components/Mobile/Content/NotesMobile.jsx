import React, { useState } from "react";
import styled from "styled-components";

import { colors } from "../../../styles/colors";

const NotesWrapper = styled.div`
  margin: 0 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;

  line-height: 1.1;
`;

const NotesLeftBar = styled.div`
  margin: 0;
  // height: 100%;
  border-bottom-left-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const NotesRightBar = styled.div`
  margin: 0;

  padding: 10px 20px;

  border-bottom-right-radius: 10px;
  background: white;
  // border-left: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  // flex-grow: 2;
  text-align: left;
`;

const NotesBarTitle = styled.button`
  border-width: 0;
  background: ${(props) => (props.isActive ? colors.lightgray : colors.white)};
  border-bottom: 1px solid #ccc;
  height: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "SF-Pro-Display-Semibold";
  outline: none;
  cursor: pointer;
`;

const LeftBarSubTitle = styled.div`
  font-family: "SF-Pro-Display-Light.otf";
`;

const NoteHolder = styled.div`
  margin-top: -10px;
  max-height: 80%;
`;

const notesEducationContent = {
  lighthouse: {
    title: "Diploma, Web Development",
    subtitle: "Lighthouse Labs",
    content: (
      <NoteHolder>
        <p>
          Lighthouse Labs is a coding bootcamp for web and mobile software
          development in Canada. I've completed a full-time immersive 12 hours a
          day, six days a week, 12 weeks program.
        </p>
        <p>
          Technologies and frameworks learned: JavaScript, NodeJS, jQuery,
          React, Sass, Ruby On Rails, Git, Ajax, Express, EJS, Bootstrap,
          ActiveRecord, SQL, PostgreSQL.
        </p>
      </NoteHolder>
    ),
  },
  oxford: {
    title: "Blockchain Programme",
    subtitle: "University of Oxford",
    content: (
      <NoteHolder>
        <p>
          The Oxford Blockchain Strategy Programme cohesively integrates
          relevant information on blockchain for business leaders and innovators
          by showcasing best use cases, value propositions, and implementation
          strategies in the blockchain industry.
        </p>
      </NoteHolder>
    ),
  },
  brainstation: {
    title: "Web Development Course",
    subtitle: "Part-time, Brainstation",
    content: (
      <NoteHolder>
        <p>
          BrainStation is the global leader in digital skills training,
          empowering businesses and brands to succeed in the digital age.{" "}
        </p>
        <p>
          I've completed a part-time web development course with the focus on
          front-end technologies, such as CSS3, HTML5, Javascript, Git, JQuery,
          Ajax, Bootstrap.
        </p>
      </NoteHolder>
    ),
  },
  southampton: {
    title: "Digital Marketing Course",
    subtitle: "University of Southampton",
    content: (
      <NoteHolder>
        <p>
          I've completed a short digital marketing course on emerging trends in
          digital culture and online consumer behavior, data analytics, and
          privacy.
        </p>
      </NoteHolder>
    ),
  },
  alfrednobel: {
    title: "Bachelor’s in Marketing",
    subtitle: "Alfred Nobel University",
    content: (
      <NoteHolder>
        <p>
          Alfred Nobel University is one of the top private universities in
          Ukraine. It is committed to enhancing innovative technologies in
          teaching, and it helps to strengthen the country's position in the
          international arena, which is reflected in its mission.{" "}
        </p>
        <p>I have earned a Bachelor's degree in Marketing.</p>
      </NoteHolder>
    ),
  },
};

const NotesMobile = ({ isMobile }) => {
  const [noteOpened, setNoteOpened] = useState("lighthouse");

  return (
    <NotesWrapper isMobile={isMobile}>
      <NotesLeftBar>
        {Object.keys(notesEducationContent).map((key) => (
          <NotesBarTitle
            isActive={key === noteOpened}
            onClick={() => setNoteOpened(key)}
          >
            <div>{notesEducationContent[key].title}</div>
            <LeftBarSubTitle>
              {notesEducationContent[key].subtitle}
            </LeftBarSubTitle>
          </NotesBarTitle>
        ))}
      </NotesLeftBar>

      <NotesRightBar>{notesEducationContent[noteOpened].content}</NotesRightBar>
    </NotesWrapper>
  );
};

export default NotesMobile;
