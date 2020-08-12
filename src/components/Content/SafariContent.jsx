import React from 'react';
import Man from '../../styles/images/man.png';
import styled from 'styled-components';

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const SafariContent = () => {

  return (
        <div>
          <h2>Hi, I'm Andrew Zapotochnyi</h2>
          <Img src={Man} alt="Andrew Zapotochnyi"></Img>
          <p>Accomplished technology professional and recent bootcamp graduate 
            with 10 years of experience in digital marketing, UX, and product 
            delivery seeking transition to dedicated software development role. 
            Entrepreneurial background with client project history with global giants 
            (Budweiser, KFC, Unilever), startups, and blockchain ventures. </p>
            <a href="/">Take a look at my desktop to learn more about me!</a>


        </div>

        );
};

export default SafariContent;