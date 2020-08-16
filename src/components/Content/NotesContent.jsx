import React, { useState } from 'react';
import styled from 'styled-components';

const NotesWrapper = styled.div`
  margin: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display:flex;
  flex-direction: row;
`;

const NotesLeftBar = styled.div`
  margin: 0;
  width: 210px;
  height: 100%;
  border-bottom-left-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  
`;

const NotesRightBar = styled.div`
  margin: 0;
  padding: 10px;
  
  border-bottom-right-radius: 10px;
  background: white;
  border-left: 1px solid #CCC;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 2;
`;

const NotesBarTitle = styled.button`
  border-width: 0;
  background: white;
  border-bottom: 1px solid #CCC;
  height: 50px;
  width: 200px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'SF-Pro-Display-Semibold';
  outline: none;
`;

const LeftBarSubTitle = styled.div`
  font-family: 'SF-Pro-Display-Light.otf';
`;

const notesEducationContent = {
  lighthouse: {
    title: 'Web Development Bootcamp',
    subtitle: 'Lighthouse Labs (2020)',
    content: 'Lighthouse Labs – Toronto (2020)'
  },
  oxford: {
    title: 'Blockchain Strategy',
    subtitle: 'University of Oxford (2018)',
    content: 'Blockchain Strategy, University of Oxford Said Business School'
  },
  brainstation: {
    title: 'Web Development Course',
    subtitle: 'Part-time, Brainstation (2016)',
    content: 'Web Development Course - Part-time'
  },
  southampton: {
    title: 'Digital Marketing Course',
    subtitle: 'University of Southampton (2014)',
    content: 'Digital Marketing Course, University of Southampton - Southampton, England'
  },
  alfrednobel: {
    title: 'Bachelor’s in Marketing',
    subtitle: 'Alfred Nobel University (2011)',
    content: 'Bachelor’s in Marketing, Alfred Nobel University - Ukraine'
  }
}

const NotesContent = () => {

  const [noteOpened, setNoteOpened] = useState("lighthouse");

  return (
    <NotesWrapper>

      <NotesLeftBar>
        { Object.keys(notesEducationContent).map((key) => {
          return (
            <NotesBarTitle onClick={() => setNoteOpened(key)}>
            <div>{notesEducationContent[key].title}</div>
            <LeftBarSubTitle>{notesEducationContent[key].subtitle}</LeftBarSubTitle>
            </NotesBarTitle>
          )
        })}
      </NotesLeftBar>

      <NotesRightBar>
                {notesEducationContent[noteOpened].content}
      </NotesRightBar>
      
    </NotesWrapper>

    );
};

export default NotesContent;