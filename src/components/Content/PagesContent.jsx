import React from 'react';
import styled from 'styled-components';

const PagesWrapper = styled.div`
  margin: 0;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 10px;
  
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display:flex;
  flex-direction: column;
  text-align: left;
  overflow-y: scroll;
  padding: 0 20px;
  max-height: 70vh;
  
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0,0,0,.2);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  }
`;

const JobTitleAndSubtitle = styled.p`
  margin-top: 2px;
  margin-bottom: 2px;
`;

const PagesContent = () => {

  return (
        <PagesWrapper>
          <p><strong>EXPERIENCE</strong></p>
          <JobTitleAndSubtitle><strong>Founder</strong>, AZ Blockchain Inc. - Toronto, Canada 2017 - present</JobTitleAndSubtitle>
          <JobTitleAndSubtitle><em>AZ Blockchain is a boutique blockchain marketing company and consultancy.</em> Projects include:</JobTitleAndSubtitle>
          <ul>
            <li><strong>CoinPRKit/CoinTraffic</strong> - Partnered with leadership to develop a product for blockchain press release distribution. Developed logic, structure, and built wireframes from concept through go live. The product reached $1M in first year revenue, becoming the top marketing platform for emerging markets and led to its sale to CoinTraffic. The product is supported by advisor/investor Dmitry Buterin (father of Ethereum creator Vitalik Buterin).</li>
            <li><strong>Propy.com</strong> - Managed a five-member team to execute an ICO for a blockchain-based real estate marketplace backed by Crunchbase founder Michael Arrington. Resulted in $17M token sale.</li>
            <li><strong>Ambisafe</strong> - Served as CMO to launch and manage a marketing department for a pioneering blockchain developer. Tech startup clients included Propy.com, Orderbook.io, and Refereum.com.</li>
            <li><strong>Digital Independence Declaration</strong> (personal project) - Developed program concept and created website logic, wireframes, and UX. Led team in development of digindec.com site.</li>
            <li><strong>Homepage</strong> - Hired and coordinated team to build company&rsquo;s web presence <a href="http://azblockchain.co">azblockchain.co</a>.</li>
          </ul>

          <JobTitleAndSubtitle><strong>Senior Digital Producer</strong>, Diamond Integrated Marketing - Toronto, Canada 2017</JobTitleAndSubtitle>
          <JobTitleAndSubtitle><em>Diamond Integrated Marketing is an award-winning Toronto agency.</em></JobTitleAndSubtitle>
          <ul>
            <li>Contributed to development (jQuery, JavaScript, HTML/CSS) and analytics integration (Google Analytics, Adobe Analytics, HootSuite, HubSpot) for TD Bank&rsquo;s website as part of an environmental campaign tied to Canada&rsquo;s 150th birthday.</li>
          </ul>

          <JobTitleAndSubtitle><strong>Digital Marketing Manager and Strategist</strong>, Devlin Digital - Toronto, Canada 2014 - 2016</JobTitleAndSubtitle>
          <JobTitleAndSubtitle><em>Devlin is a leading Toronto agency and was one of the first web production agencies in Canada. </em></JobTitleAndSubtitle>
          <ul>
            <li>Managed technical projects and contributed to light coding, UX, research, and analytics for clients that included City of Toronto and George Brown College.</li>
          </ul>

          <JobTitleAndSubtitle><strong>Digital Marketing Specialist</strong>, Freelance/POSSIBLE/ITCG - Moscow/Kiev 2010 - 2014</JobTitleAndSubtitle>
          <JobTitleAndSubtitle><em>Worked for two digital agencies and spent a year in freelance digital marketing in both Ukraine and Russia.</em></JobTitleAndSubtitle>
          <ul>
            <li>Led product concept, strategy, and software development for Budweiser&rsquo;s Facebook app.</li>
            <li>Managed development of 10+ social media apps (Facebook, Foursquare, Vk.com) for big brands including Unilever and KFC.</li>
          </ul>
         
        </PagesWrapper>

        );
};

export default PagesContent;