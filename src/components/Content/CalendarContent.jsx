import styled from "styled-components";

import React, { useEffect } from "react";

const minWidth = "498px";
const minHeight = "500px";
const url = "https://calendly.com/andrewzapotochnyi/";

const CalendlyWrapper = styled.div`
  margin: 0;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
  background: white;
  top: 0px;
  left: 0px;
`;

const CalendarContent = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <CalendlyWrapper
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth, minHeight }}
    />
  );
};

export default CalendarContent;
