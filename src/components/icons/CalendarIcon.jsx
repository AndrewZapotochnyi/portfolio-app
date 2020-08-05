import React from 'react';
import CalendarImage from '../../styles/icons/Calendar.svg';
import styled from 'styled-components';
import IconWrap from './IconWrapper';

let CalendarIcon = () => {

  return (
        <IconWrap src={CalendarImage} alt="Calendar Image"></IconWrap>
        );
};

export default CalendarIcon;