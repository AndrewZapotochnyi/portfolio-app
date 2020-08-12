
import styled from 'styled-components';


import React, { useEffect } from 'react';

const minWidth = "500px";
const minHeight = "600px";
const url = "https://calendly.com/andrewzapotochnyi/";

const CalendlyWrapper = styled.div`
  // width: 100%;
  // height: 100%;
  margin: 0;
`;


const CalendarContent = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }, []);

  return (
    <CalendlyWrapper
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth, minHeight}}
    />
    
  );
};

export default CalendarContent;