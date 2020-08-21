import React from "react";
import CalendarImage from "../../styles/icons/Calendar.svg";
import IconWrap from "./IconWrapper";

import styled from "styled-components";

const CalendarDiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  // border-style: solid;
  // border-width: 3px;
  // border-color: #cccccc;
  // background: white;
  background-color: #f1efed;
  background-image: linear-gradient(0deg, #f1efed 0%, #fcf8f8 100%);

  font-size: 35px;
  font-weight: 400;
  font-family: "SF-Pro-Display-Light.otf";
`;

const CalendarIconHeader = styled.div`
  width: 100%;
  height: 15px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background: white;
  background-color: #ec534c;
  background-image: linear-gradient(0deg, #ec534c 0%, #ff5f57 100%);
  color: white;
  font-weight: 600;
  padding-top: 1px;
  font-size: 12px;
`;

let CalendarIcon = () => {
  // return <IconWrap src={CalendarImage} alt="Calendar Image"></IconWrap>;

  const date = new Date();
  const monthNum = date.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[monthNum].slice(0, 3).toUpperCase();

  return (
    <CalendarDiv>
      <CalendarIconHeader> {monthName} </CalendarIconHeader>
      {date.getDate()}
    </CalendarDiv>
  );
};

export default CalendarIcon;
